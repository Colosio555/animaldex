const AnimalModel = require('../models/animalmodel');

exports.renderExplorar = (req, res) => {
  const todas = AnimalModel.getAll();
  const todos = [];

  for (const [catKey, categoria] of Object.entries(todas)) {
    for (const subtipo of (categoria.subtypes || [])) {
      for (let idx = 0; idx < (subtipo.animales || []).length; idx++) {
        todos.push({
          animal:    subtipo.animales[idx],
          categoria: { id: catKey, name: categoria.name, icon: categoria.icon },
          subtipo:   { name: subtipo.name },
          url: `/animal/${catKey}/${subtipo.name.toLowerCase().replace(/\s+/g, '-')}/${idx}`
        });
      }
    }
  }

  for (let i = todos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [todos[i], todos[j]] = [todos[j], todos[i]];
  }

  res.render('explorar', { user: req.session.user, animales: todos });
};