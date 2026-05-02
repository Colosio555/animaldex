const Usuario = require('../models/usuarioModel');

exports.renderLanding = (req, res) => {
  if (req.session.user) return res.redirect('/home');
  res.render('landing');
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