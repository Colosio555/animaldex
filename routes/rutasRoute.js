const express = require('express');
const router = express.Router();
const controlador = require('../controllers/controladorController');
const loginController = require('../controllers/loginController');
const auth = require('../middlewares/authMiddleware');

router.get('/login', loginController.renderLogin);
router.post('/login', express.urlencoded({ extended: false }), loginController.doLogin);
router.get('/logout', loginController.doLogout);

router.get('/', auth, controlador.renderHome);
router.get('/animal/:id', auth, controlador.renderDetalle);

module.exports = router;