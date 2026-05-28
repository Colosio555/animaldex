const mongoose = require('mongoose');

const camposEditablesSchema = new mongoose.Schema({
  nombre: String,
  nombreCientifico: String,
  altura: String,
  peso: String,
  habitat: String,
  alimentacion: String,
  edadMaxima: String,
  comportamiento: String,
  curiosidades: [String],
  conservacion: String,
  reino: String,
  filo: String,
  clase: String,
  orden: String,
  familia: String,
  imagen: String
}, { _id: false });

const animalEditSchema = new mongoose.Schema({
  animalKey: { type: String, required: true, unique: true },
  categoriaId: { type: String, required: true },
  subtipoSlug: { type: String, required: true },
  animalIdx: { type: Number, required: true },
  campos: { type: camposEditablesSchema, default: () => ({}) },
  actualizadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
}, { timestamps: true });

module.exports = mongoose.model('AnimalEdit', animalEditSchema);
