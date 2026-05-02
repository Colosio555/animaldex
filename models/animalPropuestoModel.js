const mongoose = require('mongoose');

const animalPropuestoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  nombreCientifico: { type: String, required: true },
  categoria: { type: String, required: true },
  subtipo: { type: String, required: true },
  altura: String,
  peso: String,
  habitat: String,
  alimentacion: String,
  edadMaxima: String,
  comportamiento: String,
  curiosidades: [String],
  conservacion: String,
  reino: String, filo: String, clase: String, orden: String, familia: String,
  imagenUrl: String,
  estado: { type: String, enum: ['pendiente', 'aprobado', 'rechazado'], default: 'pendiente' },
  propuestoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  revisadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  notaRevision: String
}, { timestamps: true });

module.exports = mongoose.model('AnimalPropuesto', animalPropuestoSchema);