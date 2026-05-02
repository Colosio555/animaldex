require('dotenv').config();
const mongoose = require('mongoose');
const Usuario = require('../models/usuarioModel');

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Conectado a MongoDB...');

  await Usuario.deleteMany({});

  await Usuario.create({
    username: 'admin',
    password: 'animalia123',
    rol: 'admin'
  });

  console.log('✅ Usuario admin creado correctamente.');
  process.exit();
};

seed();