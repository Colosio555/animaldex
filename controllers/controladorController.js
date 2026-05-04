const AnimalModel = require('../models/animalmodel');
const Publicacion  = require('../models/publicacionModel');

const VERTEBRATES   = ['mamiferos','aves','reptiles','anfibios','peces'];
const INVERTEBRATES = ['artropodos','moluscos','equinodermos','anelidos'];

exports.renderHome = async (req, res) => {
  const todos = AnimalModel.getAll();
  const hoyInicio = new Date(); hoyInicio.setHours(0,0,0,0);
  const hoyFin    = new Date(); hoyFin.setHours(23,59,59,999);
  const feed = await Publicacion.find({ createdAt: { $gte: hoyInicio, $lte: hoyFin } })
    .populate('autor','username rol')
    .populate('comentarios.autor','username')
    .sort({ createdAt: -1 }).limit(30);
  res.render('index', {
    user: req.session.user,
    vertebrados:   VERTEBRATES.map(k => todos[k]),
    invertebrados: INVERTEBRATES.map(k => todos[k]),
    feed, query: req.query
  });
};

// Nivel 2: página de categoría con sus subtipos
exports.renderCategoria = (req, res) => {
  const categoria = AnimalModel.getById(req.params.id);
  if (!categoria) return res.redirect('/home');
  res.render('animales/categoria', { user: req.session.user, categoria });
};

// Nivel 3: página de subtipo con sus animales
exports.renderSubtipo = (req, res) => {
  const categoria = AnimalModel.getById(req.params.id);
  if (!categoria) return res.redirect('/home');
  const subtipo = categoria.subtypes.find(
    s => s.name.toLowerCase().replace(/\s+/g,'-') === req.params.subtipo
  );
  if (!subtipo) return res.redirect(`/animal/${req.params.id}`);
  res.render('animales/subtipo', { user: req.session.user, categoria, subtipo });
};

// Nivel 4: ficha individual de animal
exports.renderAnimal = (req, res) => {
  const categoria = AnimalModel.getById(req.params.id);
  if (!categoria) return res.redirect('/home');
  const subtipo = categoria.subtypes.find(
    s => s.name.toLowerCase().replace(/\s+/g,'-') === req.params.subtipo
  );
  if (!subtipo) return res.redirect(`/animal/${req.params.id}`);
  const animal = subtipo.animales ? subtipo.animales[parseInt(req.params.animalIdx)] : null;
  if (!animal) return res.redirect(`/animal/${req.params.id}/${req.params.subtipo}`);
  res.render('animales/fichaAnimal', { user: req.session.user, categoria, subtipo, animal });
};

exports.renderDetalle = (req, res) => {
  const animal = AnimalModel.getById(req.params.id);
  if (!animal) return res.redirect('/home');
  res.render('animales/detalleview', { user: req.session.user, category: animal });
};