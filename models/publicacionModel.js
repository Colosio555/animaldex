const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
  tipo: { type: String, enum: ['publicacion', 'animal_nuevo'], default: 'publicacion' },
  titulo: String,
  contenido: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  animalRef: { type: mongoose.Schema.Types.ObjectId, ref: 'AnimalPropuesto' },
  likes: { type: Number, default: 0 },
  imagen: String
}, { timestamps: true });

module.exports = mongoose.model('Publicacion', publicacionSchema);