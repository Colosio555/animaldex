const mongoose = require('mongoose');

const loginBackgroundSchema = new mongoose.Schema({
  url: { type: String, required: true },
  descripcion: { type: String, default: '' },
  activa: { type: Boolean, default: true },
  agregadaPor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
}, { timestamps: true });

module.exports = mongoose.model('LoginBackground', loginBackgroundSchema);