const AnimalModel = require('../models/animalmodel');
const Publicacion  = require('../models/publicacionModel');

const VERTEBRATES   = ['mamiferos','aves','reptiles','anfibios','peces'];
const INVERTEBRATES = ['artropodos','moluscos','equinodermos','anelidos'];

exports.renderHome = async (req, res) => {
  const todos = await AnimalModel.getAllWithEdits();
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

exports.renderExplorar = async (req, res) => {
  const todas = await AnimalModel.getAllWithEdits();
  const lista = [];
  for (const [catKey, categoria] of Object.entries(todas)) {
    for (const subtipo of (categoria.subtypes || [])) {
      for (let idx = 0; idx < (subtipo.animales || []).length; idx++) {
        lista.push({
          animal:    subtipo.animales[idx],
          categoria: { id: catKey, name: categoria.name, icon: categoria.icon },
          subtipo:   { name: subtipo.name },
          url: `/animal/${catKey}/${subtipo.name.toLowerCase().replace(/\s+/g, '-')}/${idx}`
        });
      }
    }
  }
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  res.render('explorar', { user: req.session.user, animales: lista });
};

exports.renderCategoria = async (req, res) => {
  const categoria = await AnimalModel.getByIdWithEdits(req.params.id);
  if (!categoria) return res.redirect('/home');
  res.render('animales/categoria', { user: req.session.user, categoria });
};

exports.renderSubtipo = async (req, res) => {
  const categoria = await AnimalModel.getByIdWithEdits(req.params.id);
  if (!categoria) return res.redirect('/home');
  const subtipo = categoria.subtypes.find(
    s => s.name.toLowerCase().replace(/\s+/g,'-') === req.params.subtipo
  );
  if (!subtipo) return res.redirect(`/animal/${req.params.id}`);
  res.render('animales/subtipo', { user: req.session.user, categoria, subtipo });
};

exports.renderAnimal = async (req, res) => {
  const categoria = await AnimalModel.getByIdWithEdits(req.params.id);
  if (!categoria) return res.redirect('/home');
  const subtipo = categoria.subtypes.find(
    s => s.name.toLowerCase().replace(/\s+/g,'-') === req.params.subtipo
  );
  if (!subtipo) return res.redirect(`/animal/${req.params.id}`);
  const animal = subtipo.animales ? subtipo.animales[parseInt(req.params.animalIdx)] : null;
  if (!animal) return res.redirect(`/animal/${req.params.id}/${req.params.subtipo}`);
  res.render('animales/fichaAnimal', { user: req.session.user, categoria, subtipo, animal });
};

exports.renderDetalle = async (req, res) => {
  const animal = await AnimalModel.getByIdWithEdits(req.params.id);
  if (!animal) return res.redirect('/home');
  res.render('animales/detalleview', { user: req.session.user, category: animal });
};
