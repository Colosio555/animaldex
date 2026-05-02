const express = require('express');
const router = express.Router();
const controlador   = require('../controllers/controladorController');
const loginCtrl     = require('../controllers/loginController');
const panelCtrl     = require('../controllers/panelController');
const auth          = require('../middlewares/authMiddleware');
const { soloAdmin, usuarioOAdmin } = require('../middlewares/rolesMiddleware');

// ── Auth ──────────────────────────────────────────
router.get('/login',  loginCtrl.renderLogin);
router.post('/login', express.urlencoded({ extended: false }), loginCtrl.doLogin);
router.get('/logout', loginCtrl.doLogout);

// ── Modo invitado ─────────────────────────────────
router.get('/invitado', (req, res) => {
  req.session.user = { username: 'Invitado', rol: 'invitado' };
  res.redirect('/');
});

// ── Vistas principales ────────────────────────────
router.get('/',            auth, controlador.renderHome);
router.get('/animal/:id',  auth, controlador.renderDetalle);

// ── Panel de usuario (proponer animales) ──────────
router.get('/panel',  auth, usuarioOAdmin, panelCtrl.renderPanel);
router.post('/panel', auth, usuarioOAdmin, express.urlencoded({ extended: false }), panelCtrl.proponer);

// ── Panel de admin ────────────────────────────────
router.get('/admin',                    auth, soloAdmin, panelCtrl.renderAdmin);
router.post('/admin/aprobar/:id',       auth, soloAdmin, express.urlencoded({ extended: false }), panelCtrl.aprobar);
router.post('/admin/rechazar/:id',      auth, soloAdmin, express.urlencoded({ extended: false }), panelCtrl.rechazar);
router.post('/admin/usuarios',          auth, soloAdmin, express.urlencoded({ extended: false }), panelCtrl.crearUsuario);

module.exports = router;
