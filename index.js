const express = require('express');
const path = require('path');
const session = require('express-session');
const connectDB = require('./config/db');
const rutas = require('./routes/rutasRoute');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'animalia-secret-dev',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 8 } // 8 horas
}));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rutas);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Servidor en línea en: http://localhost:${PORT}`);
});