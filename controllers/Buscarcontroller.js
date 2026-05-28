const AnimalModel = require('../models/animalmodel');

// ── Utilidades fuzzy ──────────────────────────────────────────

// Distancia de Levenshtein (para errores tipográficos)
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

// Normaliza texto: minúsculas, sin tildes, sin puntuación extra
function normalize(str) {
  return (str || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Score de relevancia de un animal frente a la query
function scoreAnimal(animal, categoria, subtipo, queryNorm, queryWords) {
  const fields = [
    { text: animal.nombre,           weight: 10 },
    { text: animal.nombreCientifico, weight: 8  },
    { text: animal.alimentacion,     weight: 7  },
    { text: animal.habitat,          weight: 5  },
    { text: animal.comportamiento,   weight: 4  },
    { text: animal.conservacion,     weight: 3  },
    { text: categoria.name,          weight: 4  },
    { text: subtipo.name,            weight: 4  },
    { text: (animal.curiosidades || []).join(' '), weight: 2 }
  ];

  let score = 0;

  for (const { text, weight } of fields) {
    const norm = normalize(text);
    if (!norm) continue;

    // Coincidencia exacta de la query completa
    if (norm.includes(queryNorm)) {
      score += weight * 10;
      continue;
    }

    // Coincidencia por palabras individuales
    let wordMatches = 0;
    for (const word of queryWords) {
      if (word.length < 3) continue;
      if (norm.includes(word)) {
        wordMatches++;
      } else {
        // Fuzzy: busca en cada token del campo
        const tokens = norm.split(' ');
        for (const token of tokens) {
          if (token.length < 3) continue;
          const maxLen = Math.max(word.length, token.length);
          const dist = levenshtein(word, token);
          // Tolera 1 error en palabras cortas, 2 en largas
          const tolerance = word.length <= 5 ? 1 : 2;
          if (dist <= tolerance) {
            wordMatches += 0.6;
            break;
          }
        }
      }
    }
    if (wordMatches > 0) {
      score += weight * wordMatches * 3;
    }
  }

  return score;
}

// ── Controlador principal ─────────────────────────────────────
exports.buscar = async (req, res) => {
  const q = (req.query.q || '').trim();

  if (!q) {
    return res.render('buscar', {
      user: req.session.user,
      query: q,
      resultados: [],
      sin_query: true
    });
  }

  const queryNorm  = normalize(q);
  const queryWords = queryNorm.split(' ').filter(w => w.length >= 2);
  const todas      = await AnimalModel.getAllWithEdits();
  const resultados = [];

  for (const [catKey, categoria] of Object.entries(todas)) {
    for (const subtipo of (categoria.subtypes || [])) {
      for (let idx = 0; idx < (subtipo.animales || []).length; idx++) {
        const animal = subtipo.animales[idx];
        const score  = scoreAnimal(animal, categoria, subtipo, queryNorm, queryWords);
        if (score > 0) {
          resultados.push({
            score,
            animal,
            categoria: { id: catKey, name: categoria.name, icon: categoria.icon },
            subtipo:   { name: subtipo.name },
            // URL directa a la ficha
            url: `/animal/${catKey}/${subtipo.name.toLowerCase().replace(/\s+/g, '-')}/${idx}`
          });
        }
      }
    }
  }

  // Ordenar por relevancia descendente, limitar a 20
  resultados.sort((a, b) => b.score - a.score);
  const top = resultados.slice(0, 20);

  res.render('buscar', {
    user: req.session.user,
    query: q,
    resultados: top,
    sin_query: false
  });
};
