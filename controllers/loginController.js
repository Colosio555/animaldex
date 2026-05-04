const Usuario         = require('../models/usuarioModel');
const LoginBackground = require('../models/loginBackgroundModel');

const DEFAULT_BACKGROUNDS = [
  { url: 'https://i1-e.pinimg.com/1200x/44/18/65/44186532b4c6e80c74c8a9bdc1960404.jpg', descripcion: 'Naturaleza 1' },
  { url: 'https://i1-e.pinimg.com/1200x/9f/0a/a3/9f0aa3d7ca3000b16caa776ac1efa7c5.jpg', descripcion: 'Naturaleza 2' },
  { url: 'https://i1-e.pinimg.com/736x/fc/87/27/fc8727407d28daebe9c9a0cd22082ceb.jpg',   descripcion: 'Naturaleza 3' },
  { url: 'https://i1-e.pinimg.com/1200x/b3/88/44/b38844f9d70247b6b11af961adebfcc5.jpg', descripcion: 'Naturaleza 4' },
  { url: 'https://i.pinimg.com/736x/c7/70/f2/c770f25411fdd5083c6a110f3526f3f2.jpg',     descripcion: 'Naturaleza 5' },
  { url: 'https://i1-e.pinimg.com/1200x/7d/6c/6c/7d6c6c6ce5378d5f4a08ebd0fa505972.jpg', descripcion: 'Naturaleza 6' }
];

async function seedDefaultsIfEmpty() {
  const count = await LoginBackground.countDocuments();
  if (count === 0) await LoginBackground.insertMany(DEFAULT_BACKGROUNDS);
}

async function getRandomBackground() {
  try {
    await seedDefaultsIfEmpty();
    const activas = await LoginBackground.find({ activa: true });
    if (activas.length === 0) {
      const all = DEFAULT_BACKGROUNDS.map(b => b.url);
      return all[Math.floor(Math.random() * all.length)];
    }
    return activas[Math.floor(Math.random() * activas.length)].url;
  } catch {
    const all = DEFAULT_BACKGROUNDS.map(b => b.url);
    return all[Math.floor(Math.random() * all.length)];
  }
}

exports.renderLanding = async (req, res) => {
  if (req.session.user) return res.redirect('/home');
  const bgImage = await getRandomBackground();
  res.render('landing', { bgImage });
};

exports.renderLogin = (req, res) => {
  if (req.session.user) return res.redirect('/home');
  res.render('login', { error: null });
};

exports.renderRegistro = (req, res) => {
  if (req.session.user) return res.redirect('/home');
  res.render('registro', { error: null });
};

exports.doRegistro = async (req, res) => {
  try {
    const { username, password, confirmar } = req.body;
    if (password !== confirmar)
      return res.render('registro', { error: 'Las contraseñas no coinciden.' });
    if (password.length < 6)
      return res.render('registro', { error: 'La contraseña debe tener al menos 6 caracteres.' });
    const existe = await Usuario.findOne({ username });
    if (existe)
      return res.render('registro', { error: 'Ese nombre de usuario ya está en uso.' });
    await Usuario.create({ username, password, rol: 'usuario' });
    res.redirect('/login?registrado=1');
  } catch (err) {
    console.error(err);
    res.render('registro', { error: 'Error al crear la cuenta. Intenta de nuevo.' });
  }
};

exports.doLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const usuario = await Usuario.findOne({ username });
    if (!usuario)
      return res.render('login', { error: 'Usuario o contraseña incorrectos.' });
    const valido = await usuario.compararPassword(password);
    if (!valido)
      return res.render('login', { error: 'Usuario o contraseña incorrectos.' });
    req.session.user = { username: usuario.username, rol: usuario.rol };
    res.redirect('/home');
  } catch (err) {
    res.render('login', { error: 'Error interno, intenta de nuevo.' });
  }
};

exports.doLogout = (req, res) => {
  req.session.destroy(() => res.redirect('/'));
};