const AnimalModel = require('../models/animalmodel');
const Publicacion = require('../models/publicacionModel');

const VERTEBRATES   = ['mamiferos', 'aves', 'reptiles', 'anfibios', 'peces'];
const INVERTEBRATES = ['artropodos', 'moluscos', 'equinodermos', 'anelidos'];

exports.renderHome = async (req, res) => {
  const todos = AnimalModel.getAll();

  const hoyInicio = new Date();
  hoyInicio.setHours(0, 0, 0, 0);
  const hoyFin = new Date();
  hoyFin.setHours(23, 59, 59, 999);

  const feed = await Publicacion.find({
    createdAt: { $gte: hoyInicio, $lte: hoyFin }
  })
    .populate('autor', 'username rol')
    .populate('comentarios.autor', 'username')
    .sort({ createdAt: -1 })
    .limit(30);

  res.render('index', {
    user: req.session.user,
    vertebrados:   VERTEBRATES.map(key => todos[key]),
    invertebrados: INVERTEBRATES.map(key => todos[key]),
    feed,
    query: req.query
  });
};

exports.renderDetalle = (req, res) => {
  const animal = AnimalModel.getById(req.params.id);
  if (!animal) return res.redirect('/home');
  res.render('animales/detalleview', { user: req.session.user, category: animal });
};