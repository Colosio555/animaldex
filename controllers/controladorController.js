const AnimalModel = require('../models/animalmodel');
const Publicacion = require('../models/publicacionModel');

const VERTEBRATES   = ['mamiferos', 'aves', 'reptiles', 'anfibios', 'peces'];
const INVERTEBRATES = ['artropodos', 'moluscos', 'equinodermos', 'anelidos'];

exports.renderHome = async (req, res) => {
  const todos = AnimalModel.getAll();
  const feed  = await Publicacion.find({})
    .populate('autor', 'username rol')
    .sort({ createdAt: -1 })
    .limit(20);
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
  res.render('animales/detalleview', {
    user: req.session.user,
    category: animal
  });
};