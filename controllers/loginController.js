const Usuario = require('../models/usuarioModel');

exports.renderLogin = (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render('login', { error: null });
};

exports.doLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const usuario = await Usuario.findOne({ username });
    if (!usuario) return res.render('login', { error: 'Usuario o contraseña incorrectos' });

    const valido = await usuario.compararPassword(password);
    if (!valido) return res.render('login', { error: 'Usuario o contraseña incorrectos' });

    req.session.user = { username: usuario.username, rol: usuario.rol };
    res.redirect('/');
  } catch (err) {
    res.render('login', { error: 'Error interno, intenta de nuevo' });
  }
};

exports.doLogout = (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
};