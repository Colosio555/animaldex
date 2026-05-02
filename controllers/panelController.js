const AnimalPropuesto = require('../models/animalPropuestoModel');
const Publicacion     = require('../models/publicacionModel');
const Usuario         = require('../models/usuarioModel');

const CATEGORIAS = ['mamiferos','aves','reptiles','anfibios','peces','artropodos','moluscos','equinodermos','anelidos'];

const SUBTYPES_MAP = {
  mamiferos:    ['Placentarios','Marsupiales','Monotremas'],
  aves:         ['Voladoras','No Voladoras','Acuáticas'],
  reptiles:     ['Escamosos','Testudines','Cocodrilianos'],
  anfibios:     ['Anuros','Urodelos','Ápodos'],
  peces:        ['Óseos','Cartilaginosos','Sin Mandíbula'],
  artropodos:   ['Insectos','Arácnidos','Crustáceos','Miriápodos'],
  moluscos:     ['Gasterópodos','Bivalvos','Cefalópodos'],
  equinodermos: ['Asteroideos','Equinoideos','Holoturoideos'],
  anelidos:     ['Oligoquetos','Poliquetos','Hirudíneos']
};

exports.renderPanel = (req, res) => {
  res.render('panel', {
    user: req.session.user,
    categorias: CATEGORIAS,
    subtypesMap: JSON.stringify(SUBTYPES_MAP),
    query: req.query
  });
};

exports.proponer = async (req, res) => {
  try {
    const {
      nombre, nombreCientifico, categoria, subtipo,
      altura, peso, habitat, alimentacion, edadMaxima,
      comportamiento, curiosidades, conservacion,
      reino, filo, clase, orden, familia, imagenUrl
    } = req.body;

    const curiosidadesArr = (curiosidades || '')
      .split('\n').map(c => c.trim()).filter(Boolean);

    const usuario = await Usuario.findOne({ username: req.session.user.username });

    await AnimalPropuesto.create({
      nombre, nombreCientifico, categoria, subtipo,
      altura, peso, habitat, alimentacion, edadMaxima,
      comportamiento, curiosidades: curiosidadesArr,
      conservacion, reino, filo, clase, orden, familia, imagenUrl,
      propuestoPor: usuario._id
    });

    res.redirect('/panel?exito=1');
  } catch (err) {
    console.error(err);
    res.redirect('/panel?error=1');
  }
};

exports.renderAdmin = async (req, res) => {
  const pendientes = await AnimalPropuesto.find({ estado: 'pendiente' })
    .populate('propuestoPor', 'username');
  const historial = await AnimalPropuesto.find({ estado: { $ne: 'pendiente' } })
    .populate('propuestoPor', 'username')
    .populate('revisadoPor', 'username')
    .sort({ updatedAt: -1 }).limit(20);
  const usuarios = await Usuario.find({}).select('username rol createdAt');
  res.render('adminPanel', {
    user: req.session.user,
    pendientes, historial, usuarios,
    query: req.query
  });
};

exports.aprobar = async (req, res) => {
  const admin  = await Usuario.findOne({ username: req.session.user.username });
  const animal = await AnimalPropuesto.findByIdAndUpdate(req.params.id,
    { estado: 'aprobado', revisadoPor: admin._id },
    { new: true }
  );
  await Publicacion.create({
    tipo: 'animal_nuevo',
    titulo: `Nuevo animal aprobado: ${animal.nombre}`,
    contenido: `${animal.nombreCientifico} — ${animal.categoria} / ${animal.subtipo}`,
    autor: admin._id,
    animalRef: animal._id,
    imagen: animal.imagenUrl || ''
  });
  res.redirect('/admin');
};

exports.rechazar = async (req, res) => {
  const { nota } = req.body;
  const admin = await Usuario.findOne({ username: req.session.user.username });
  await AnimalPropuesto.findByIdAndUpdate(req.params.id, {
    estado: 'rechazado',
    revisadoPor: admin._id,
    notaRevision: nota || 'Rechazado por el administrador'
  });
  res.redirect('/admin');
};

exports.crearUsuario = async (req, res) => {
  try {
    const { username, password, rol } = req.body;
    await Usuario.create({ username, password, rol });
    res.redirect('/admin?usuarioCreado=1');
  } catch (err) {
    console.error(err);
    res.redirect('/admin?errorUsuario=1');
  }
};

exports.publicar = async (req, res) => {
  try {
    const { titulo, contenido, imagen } = req.body;
    const autor = await Usuario.findOne({ username: req.session.user.username });
    await Publicacion.create({ tipo: 'publicacion', titulo, contenido, autor: autor._id, imagen });
    res.redirect('/home?publicado=1');
  } catch (err) {
    res.redirect('/home?errorPublicacion=1');
  }
};