const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  contenido: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
}, { timestamps: true });

const publicacionSchema = new mongoose.Schema({
  tipo: { type: String, enum: ['publicacion', 'animal_nuevo'], default: 'publicacion' },
  titulo: String,
  contenido: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  animalRef: { type: mongoose.Schema.Types.ObjectId, ref: 'AnimalPropuesto' },
  imagen: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
  comentarios: [comentarioSchema]
}, { timestamps: true });

module.exports = mongoose.model('Publicacion', publicacionSchema);