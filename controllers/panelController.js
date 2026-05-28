const AnimalPropuesto   = require('../models/animalPropuestoModel');
const Publicacion       = require('../models/publicacionModel');
const Usuario           = require('../models/usuarioModel');
const LoginBackground   = require('../models/loginBackgroundModel');
const AnimalModel       = require('../models/animalmodel');
const AnimalEdit        = require('../models/animalEditModel');

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
    const curiosidadesArr = (curiosidades || '').split('\n').map(c => c.trim()).filter(Boolean);
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
  const pendientes   = await AnimalPropuesto.find({ estado: 'pendiente' }).populate('propuestoPor', 'username');
  const historial    = await AnimalPropuesto.find({ estado: { $ne: 'pendiente' } })
    .populate('propuestoPor', 'username').populate('revisadoPor', 'username')
    .sort({ updatedAt: -1 }).limit(20);
  const usuarios     = await Usuario.find({}).select('username rol createdAt');
  const backgrounds  = await LoginBackground.find({}).populate('agregadaPor', 'username').sort({ createdAt: -1 });
  const catalogo      = await AnimalModel.getAllWithEdits();
  const catalogoEditable = AnimalModel.listAnimals(catalogo);

  res.render('adminPanel', {
    user: req.session.user,
    pendientes, historial, usuarios,
    backgrounds,
    catalogoEditable,
    query: req.query
  });
};

exports.aprobar = async (req, res) => {
  const admin  = await Usuario.findOne({ username: req.session.user.username });
  const animal = await AnimalPropuesto.findByIdAndUpdate(req.params.id,
    { estado: 'aprobado', revisadoPor: admin._id }, { new: true });
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
    estado: 'rechazado', revisadoPor: admin._id,
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

exports.actualizarAnimal = async (req, res) => {
  try {
    const {
      categoriaId, subtipoSlug, animalIdx,
      nombre, nombreCientifico, altura, peso, habitat,
      alimentacion, edadMaxima, comportamiento, curiosidades,
      conservacion, reino, filo, clase, orden, familia, imagen
    } = req.body;

    const idx = Number.parseInt(animalIdx, 10);
    const categoria = AnimalModel.getById(categoriaId);
    const subtipo = categoria && categoria.subtypes.find(s => AnimalModel.slugSubtype(s.name) === subtipoSlug);

    if (!categoria || !subtipo || !subtipo.animales || !subtipo.animales[idx]) {
      return res.redirect('/admin?animalError=1#catalogo');
    }

    const animalKey = AnimalModel.getAnimalKey(categoriaId, subtipoSlug, idx);
    const admin = await Usuario.findOne({ username: req.session.user.username });
    const imagenFinal = req.file ? `/uploads/${req.file.filename}` : (imagen || '').trim();
    const curiosidadesArr = (curiosidades || '')
      .split('\n')
      .map(c => c.trim())
      .filter(Boolean);

    const campos = {
      nombre: (nombre || '').trim(),
      nombreCientifico: (nombreCientifico || '').trim(),
      altura: (altura || '').trim(),
      peso: (peso || '').trim(),
      habitat: (habitat || '').trim(),
      alimentacion: (alimentacion || '').trim(),
      edadMaxima: (edadMaxima || '').trim(),
      comportamiento: (comportamiento || '').trim(),
      curiosidades: curiosidadesArr,
      conservacion: (conservacion || '').trim(),
      reino: (reino || '').trim(),
      filo: (filo || '').trim(),
      clase: (clase || '').trim(),
      orden: (orden || '').trim(),
      familia: (familia || '').trim(),
      imagen: imagenFinal
    };

    await AnimalEdit.findOneAndUpdate(
      { animalKey },
      {
        $set: {
          animalKey,
          categoriaId,
          subtipoSlug,
          animalIdx: idx,
          campos,
          actualizadoPor: admin ? admin._id : null
        }
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.redirect(`/admin?animalActualizado=1&animal=${encodeURIComponent(animalKey)}#catalogo`);
  } catch (err) {
    console.error(err);
    res.redirect('/admin?animalError=1#catalogo');
  }
};

// ── Publicaciones ─────────────────────────────────────────────
exports.publicar = async (req, res) => {
  try {
    const { titulo, contenido } = req.body;
    const imagen = req.file ? `/uploads/${req.file.filename}` : '';
    const autor  = await Usuario.findOne({ username: req.session.user.username });
    await Publicacion.create({ tipo: 'publicacion', titulo, contenido, autor: autor._id, imagen });
    res.redirect('/home?publicado=1');
  } catch (err) {
    console.error(err);
    res.redirect('/home?errorPublicacion=1');
  }
};

exports.toggleLike = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ username: req.session.user.username });
    const pub     = await Publicacion.findById(req.params.id);
    if (!pub) return res.redirect('/home');
    const yaLikeo = pub.likes.some(id => id.equals(usuario._id));
    if (yaLikeo) { pub.likes.pull(usuario._id); } else { pub.likes.push(usuario._id); }
    await pub.save();
    res.redirect('/home#pub-' + pub._id);
  } catch (err) {
    console.error(err);
    res.redirect('/home');
  }
};

exports.comentar = async (req, res) => {
  try {
    const { contenido } = req.body;
    const autor = await Usuario.findOne({ username: req.session.user.username });
    await Publicacion.findByIdAndUpdate(req.params.id, {
      $push: { comentarios: { contenido, autor: autor._id } }
    });
    res.redirect('/home#pub-' + req.params.id);
  } catch (err) {
    console.error(err);
    res.redirect('/home');
  }
};

// ── Gestión de fondos del login ───────────────────────────────
exports.agregarBackground = async (req, res) => {
  try {
    const { url, descripcion } = req.body;
    if (!url || !url.startsWith('http')) return res.redirect('/admin?bgError=url');
    const admin = await Usuario.findOne({ username: req.session.user.username });
    await LoginBackground.create({ url: url.trim(), descripcion: descripcion || '', agregadaPor: admin._id });
    res.redirect('/admin?bgAgregado=1');
  } catch (err) {
    console.error(err);
    res.redirect('/admin?bgError=1');
  }
};

exports.toggleBackground = async (req, res) => {
  try {
    const bg = await LoginBackground.findById(req.params.id);
    if (bg) { bg.activa = !bg.activa; await bg.save(); }
    res.redirect('/admin#fondos');
  } catch (err) {
    console.error(err);
    res.redirect('/admin');
  }
};

exports.eliminarBackground = async (req, res) => {
  try {
    await LoginBackground.findByIdAndDelete(req.params.id);
    res.redirect('/admin#fondos');
  } catch (err) {
    console.error(err);
    res.redirect('/admin');
  }
};
