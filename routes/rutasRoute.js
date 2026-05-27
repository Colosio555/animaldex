const express = require('express');
const router  = express.Router();
const controlador = require('../controllers/controladorController');
const buscarCtrl  = require('../controllers/buscarController');
const loginCtrl   = require('../controllers/loginController');
const panelCtrl   = require('../controllers/panelController');
const auth        = require('../middlewares/authMiddleware');
const upload      = require('../middlewares/uploadMiddleware');
const { soloAdmin, usuarioOAdmin } = require('../middlewares/rolesMiddleware');

// ── Auth ──────────────────────────────────────────────────────
router.get('/',          loginCtrl.renderLanding);
router.get('/login',     loginCtrl.renderLogin);
router.post('/login',    express.urlencoded({ extended: false }), loginCtrl.doLogin);
router.get('/registro',  loginCtrl.renderRegistro);
router.post('/registro', express.urlencoded({ extended: false }), loginCtrl.doRegistro);
router.get('/logout',    loginCtrl.doLogout);
router.get('/invitado',  (req, res) => {
  req.session.user = { username: 'Invitado', rol: 'invitado' };
  res.redirect('/home');
});

// ── Vistas principales ────────────────────────────────────────
router.get('/home',                           auth, controlador.renderHome);
router.get('/explorar',                       auth, controlador.renderExplorar);
router.get('/acercade',                       auth, (req, res) => res.render('acercade', { user: req.session.user }));
router.get('/animal/:id',                     auth, controlador.renderCategoria);
router.get('/animal/:id/:subtipo',            auth, controlador.renderSubtipo);
router.get('/animal/:id/:subtipo/:animalIdx', auth, controlador.renderAnimal);

// ── Buscador ──────────────────────────────────────────────────
router.get('/buscar', auth, buscarCtrl.buscar);

// ── Publicaciones ─────────────────────────────────────────────
router.post('/publicar',     auth, usuarioOAdmin, upload.single('imagen'), panelCtrl.publicar);
router.post('/like/:id',     auth, express.urlencoded({ extended: false }), panelCtrl.toggleLike);
router.post('/comentar/:id', auth, express.urlencoded({ extended: false }), panelCtrl.comentar);

// ── Panel usuario ─────────────────────────────────────────────
router.get('/panel',  auth, usuarioOAdmin, panelCtrl.renderPanel);
router.post('/panel', auth, usuarioOAdmin, express.urlencoded({ extended: false }), panelCtrl.proponer);

// ── Panel admin ───────────────────────────────────────────────
router.get('/admin',               auth, soloAdmin, panelCtrl.renderAdmin);
router.post('/admin/aprobar/:id',  auth, soloAdmin, express.urlencoded({ extended: false }), panelCtrl.aprobar);
router.post('/admin/rechazar/:id', auth, soloAdmin, express.urlencoded({ extended: false }), panelCtrl.rechazar);
router.post('/admin/usuarios',     auth, soloAdmin, express.urlencoded({ extended: false }), panelCtrl.crearUsuario);

// ── Gestión de fondos del login (solo admin) ──────────────────
router.post('/admin/backgrounds/agregar',      auth, soloAdmin, express.urlencoded({ extended: false }), panelCtrl.agregarBackground);
router.post('/admin/backgrounds/toggle/:id',   auth, soloAdmin, express.urlencoded({ extended: false }), panelCtrl.toggleBackground);
router.post('/admin/backgrounds/eliminar/:id', auth, soloAdmin, express.urlencoded({ extended: false }), panelCtrl.eliminarBackground);

module.exports = router;
