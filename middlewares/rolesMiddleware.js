exports.soloAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.rol === 'admin') return next();
  res.status(403).render('error', { mensaje: 'Acceso restringido a administradores.' });
};

exports.usuarioOAdmin = (req, res, next) => {
  if (req.session.user && ['admin', 'usuario'].includes(req.session.user.rol)) return next();
  res.status(403).render('error', { mensaje: 'Debes iniciar sesión como usuario registrado.' });
};