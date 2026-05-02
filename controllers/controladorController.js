const AnimalModel = require('../models/animalmodel');

const VERTEBRATES = ['mamiferos', 'aves', 'reptiles', 'anfibios', 'peces'];
const INVERTEBRATES = ['artropodos', 'moluscos', 'equinodermos', 'anelidos'];

exports.renderHome = (req, res) => {
    const todos = AnimalModel.getAll();
    res.render('index', {
        vertebrados: VERTEBRATES.map(key => todos[key]),
        invertebrados: INVERTEBRATES.map(key => todos[key])
    });
};

exports.renderDetalle = (req, res) => {
    const animal = AnimalModel.getById(req.params.id);
    if (!animal) return res.redirect('/');
    res.render('animales/detalleview', { category: animal });
};