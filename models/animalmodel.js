/**
 * models/animalmodel.js
 * Base de conocimientos AnimaliaDex — enriquecida para estudiantes de biología
 */

const categoriesData = {

  // ─────────────────────────────────────────
  // VERTEBRADOS
  // ─────────────────────────────────────────

  mamiferos: {
    id: 'mamiferos',
    name: 'Mamíferos',
    icon: '🦁',
    headerIcon: '🐘',
    theme: 'bg-[#986435]',
    pattern: 'bg-zinc-900',
    subtypes: [
      {
        name: 'Placentarios',
        icon: '🦝',
        color: 'bg-[#717b88]',
        animales: [
          {
            nombre: 'León africano',
            nombreCientifico: 'Panthera leo',
            altura: '1.2 m (a la cruz)',
            peso: '150–250 kg',
            habitat: 'Sabanas y praderas del África subsahariana',
            alimentacion: 'Carnívoro — cebras, búfalos, ñus',
            edadMaxima: '16 años en libertad, hasta 26 en cautiverio',
            comportamiento: 'Vive en grupos sociales llamados "manadas". Las hembras son las principales cazadoras.',
            curiosidades: [
              'Es el único felino con dimorfismo sexual visible: los machos tienen melena.',
              'Su rugido puede escucharse a 8 km de distancia.',
              'Duerme hasta 20 horas al día.'
            ],
            conservacion: 'Vulnerable (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Mammalia', orden: 'Carnivora', familia: 'Felidae'
          },
          {
            nombre: 'Elefante africano',
            nombreCientifico: 'Loxodonta africana',
            altura: '3.3 m',
            peso: '4,000–7,000 kg',
            habitat: 'Sabanas, bosques y matorrales de África',
            alimentacion: 'Herbívoro — hierba, hojas, corteza, frutos',
            edadMaxima: '60–70 años',
            comportamiento: 'Matriarcal. Vive en manadas lideradas por la hembra más vieja. Alta inteligencia emocional.',
            curiosidades: [
              'El animal terrestre más grande del mundo.',
              'Usa la trompa para oler, comunicarse, beber y manipular objetos.',
              'Puede reconocerse a sí mismo en un espejo.'
            ],
            conservacion: 'Vulnerable (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Mammalia', orden: 'Proboscidea', familia: 'Elephantidae'
          },
          {
            nombre: 'Delfín mular',
            nombreCientifico: 'Tursiops truncatus',
            altura: '2.5–3.8 m de longitud',
            peso: '150–650 kg',
            habitat: 'Océanos templados y tropicales de todo el mundo',
            alimentacion: 'Carnívoro — peces, calamares, crustáceos',
            edadMaxima: '40–50 años',
            comportamiento: 'Altamente social. Se comunica mediante clics y silbidos. Usa ecolocalización para cazar.',
            curiosidades: [
              'Tiene un cerebro más grande proporcionalmente que el humano.',
              'Puede aprender lenguaje de signos simplificado.',
              'Duerme con un hemisferio cerebral a la vez.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Mammalia', orden: 'Artiodactyla', familia: 'Delphinidae'
          }
        ]
      },
      {
        name: 'Marsupiales',
        icon: '🦘',
        color: 'bg-[#f4bc83]',
        animales: [
          {
            nombre: 'Canguro rojo',
            nombreCientifico: 'Osphranter rufus',
            altura: '1.5 m (macho)',
            peso: '55–90 kg',
            habitat: 'Zonas áridas y semiáridas de Australia',
            alimentacion: 'Herbívoro — pastos y arbustos',
            edadMaxima: '22 años en cautiverio',
            comportamiento: 'Nocturno y crepuscular. Los machos compiten por hembras con "boxeo".',
            curiosidades: [
              'El marsupial más grande del mundo.',
              'La cría (joey) nace del tamaño de un cacahuate y termina de desarrollarse en la bolsa.',
              'Puede detener el desarrollo de un embrión si el ambiente es adverso.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Mammalia', orden: 'Diprotodontia', familia: 'Macropodidae'
          },
          {
            nombre: 'Koala',
            nombreCientifico: 'Phascolarctos cinereus',
            altura: '60–85 cm',
            peso: '4–15 kg',
            habitat: 'Bosques de eucaliptos de Australia',
            alimentacion: 'Herbívoro — exclusivamente hojas de eucalipto',
            edadMaxima: '18 años en libertad',
            comportamiento: 'Solitario y arborícola. Duerme hasta 22 horas diarias para conservar energía.',
            curiosidades: [
              'Las hojas de eucalipto son tóxicas para casi todos los animales.',
              'Sus huellas dactilares son casi idénticas a las humanas.',
              'No son osos; son marsupiales.'
            ],
            conservacion: 'Vulnerable (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Mammalia', orden: 'Diprotodontia', familia: 'Phascolarctidae'
          }
        ]
      },
      {
        name: 'Monotremas',
        icon: '🦆',
        color: 'bg-[#a37952]',
        animales: [
          {
            nombre: 'Ornitorrinco',
            nombreCientifico: 'Ornithorhynchus anatinus',
            altura: '38–60 cm de longitud',
            peso: '0.7–2.4 kg',
            habitat: 'Ríos y lagos del este de Australia y Tasmania',
            alimentacion: 'Carnívoro — larvas, gusanos, crustáceos acuáticos',
            edadMaxima: '17 años',
            comportamiento: 'Solitario y semiacuático. Caza bajo el agua guiándose por campos eléctricos.',
            curiosidades: [
              'Es uno de los pocos mamíferos ovíparos (pone huevos).',
              'Los machos tienen un espolón venenoso en las patas traseras.',
              'No tiene estómago: el esófago conecta directo al intestino.'
            ],
            conservacion: 'Casi amenazado (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Mammalia', orden: 'Monotremata', familia: 'Ornithorhynchidae'
          }
        ]
      }
    ]
  },

  aves: {
    id: 'aves',
    name: 'Aves',
    icon: '🦜',
    headerIcon: '🦅',
    theme: 'bg-sky-600',
    pattern: 'bg-slate-900',
    subtypes: [
      {
        name: 'Voladoras',
        icon: '🕊️',
        color: 'bg-sky-300',
        animales: [
          {
            nombre: 'Águila calva',
            nombreCientifico: 'Haliaeetus leucocephalus',
            altura: '71–96 cm',
            peso: '3–6.3 kg',
            habitat: 'Costas, ríos y lagos de América del Norte',
            alimentacion: 'Carnívora — principalmente peces, también mamíferos pequeños',
            edadMaxima: '28 años en libertad',
            comportamiento: 'Territorial. Construye los nidos más grandes de cualquier ave en Norteamérica.',
            curiosidades: [
              'Símbolo nacional de Estados Unidos.',
              'Puede ver 4–8 veces más nítido que un humano.',
              'Su llamado real es débil; el grito que se usa en películas es del busardo de cola roja.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Aves', orden: 'Accipitriformes', familia: 'Accipitridae'
          },
          {
            nombre: 'Colibrí gorjinegro',
            nombreCientifico: 'Archilochus alexandri',
            altura: '8–9 cm',
            peso: '2.8–3.5 g',
            habitat: 'Jardines, bosques y chaparrales del oeste de Norteamérica',
            alimentacion: 'Nectarívoro — néctar de flores e insectos pequeños',
            edadMaxima: '12 años',
            comportamiento: 'Solitario y territorial. Es el único pájaro que puede volar hacia atrás.',
            curiosidades: [
              'Bate las alas 50–80 veces por segundo.',
              'Su corazón late 1,200 veces por minuto en vuelo.',
              'Entra en torpor nocturno para ahorrar energía.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Aves', orden: 'Apodiformes', familia: 'Trochilidae'
          }
        ]
      },
      {
        name: 'No Voladoras',
        icon: '🐧',
        color: 'bg-slate-400',
        animales: [
          {
            nombre: 'Pingüino emperador',
            nombreCientifico: 'Aptenodytes forsteri',
            altura: '110–130 cm',
            peso: '22–45 kg',
            habitat: 'Antártida',
            alimentacion: 'Carnívoro — peces, calamares, kril',
            edadMaxima: '20 años en libertad',
            comportamiento: 'Altamente social. Los machos incuban el huevo sobre sus patas durante el invierno antártico.',
            curiosidades: [
              'El pingüino más grande del mundo.',
              'Puede bucear hasta 565 m de profundidad.',
              'Soporta temperaturas de -60 °C y vientos de 200 km/h.'
            ],
            conservacion: 'Casi amenazado (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Aves', orden: 'Sphenisciformes', familia: 'Spheniscidae'
          },
          {
            nombre: 'Avestruz',
            nombreCientifico: 'Struthio camelus',
            altura: '2.1–2.8 m',
            peso: '63–145 kg',
            habitat: 'Sabanas y desiertos de África',
            alimentacion: 'Omnívoro — plantas, semillas, insectos, lagartijas',
            edadMaxima: '40–45 años',
            comportamiento: 'Vive en grupos mixtos. El macho hace el nido y ambos padres incuban.',
            curiosidades: [
              'El ave más grande y pesada del mundo.',
              'Corre hasta 70 km/h — el animal bípedo más rápido.',
              'Sus ojos miden 5 cm de diámetro, los más grandes de cualquier vertebrado terrestre.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Aves', orden: 'Struthioniformes', familia: 'Struthionidae'
          }
        ]
      },
      {
        name: 'Acuáticas',
        icon: '🦆',
        color: 'bg-teal-400',
        animales: [
          {
            nombre: 'Flamenco común',
            nombreCientifico: 'Phoenicopterus roseus',
            altura: '1.2–1.45 m',
            peso: '2–4 kg',
            habitat: 'Lagos salinos y lagunas de África, Europa del sur y Asia',
            alimentacion: 'Filtrador — algas, crustáceos, larvas acuáticas',
            edadMaxima: '40 años',
            comportamiento: 'Gregario — vive en colonias de miles. Duerme parado en un solo pie.',
            curiosidades: [
              'Su color rosado viene de los pigmentos carotenoides de su dieta.',
              'Los polluelos nacen blancos y tardan 2 años en adquirir color.',
              'Filtra el agua con el pico invertido, como una cuchara.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Aves', orden: 'Phoenicopteriformes', familia: 'Phoenicopteridae'
          }
        ]
      }
    ]
  },

  reptiles: {
    id: 'reptiles',
    name: 'Reptiles',
    icon: '🐍',
    headerIcon: '🐊',
    theme: 'bg-emerald-700',
    pattern: 'bg-stone-900',
    subtypes: [
      {
        name: 'Escamosos',
        icon: '🦎',
        color: 'bg-emerald-400',
        animales: [
          {
            nombre: 'Dragón de Komodo',
            nombreCientifico: 'Varanus komodoensis',
            altura: '2.5–3 m de longitud',
            peso: '70–90 kg',
            habitat: 'Islas volcánicas de Indonesia (Komodo, Rinca, Flores)',
            alimentacion: 'Carnívoro — ciervos, jabalíes, búfalos de agua',
            edadMaxima: '30 años',
            comportamiento: 'Solitario y emboscador. Puede correr 20 km/h en distancias cortas.',
            curiosidades: [
              'El lagarto más grande del mundo.',
              'Su saliva contiene más de 50 bacterias mortales y veneno anticoagulante.',
              'Las hembras pueden reproducirse por partenogénesis (sin macho).'
            ],
            conservacion: 'En peligro (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Reptilia', orden: 'Squamata', familia: 'Varanidae'
          },
          {
            nombre: 'Anaconda verde',
            nombreCientifico: 'Eunectes murinus',
            altura: '5–8 m de longitud',
            peso: '30–250 kg',
            habitat: 'Selvas tropicales y pantanos de América del Sur',
            alimentacion: 'Carnívora — capibaras, caimanes, ciervos, aves acuáticas',
            edadMaxima: '30 años',
            comportamiento: 'Semiacuática. Constrictora — mata por asfixia, no por veneno.',
            curiosidades: [
              'La serpiente más pesada del mundo.',
              'Puede pasar más de un año sin comer tras una presa grande.',
              'Detecta el calor corporal de sus presas con fosas termorreceptoras.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Reptilia', orden: 'Squamata', familia: 'Boidae'
          }
        ]
      },
      {
        name: 'Testudines',
        icon: '🐢',
        color: 'bg-lime-500',
        animales: [
          {
            nombre: 'Tortuga gigante de Galápagos',
            nombreCientifico: 'Chelonoidis niger',
            altura: '1.5 m de longitud',
            peso: '180–300 kg',
            habitat: 'Islas Galápagos, Ecuador',
            alimentacion: 'Herbívora — cactus, pasto, hojas',
            edadMaxima: 'Más de 170 años',
            comportamiento: 'Solitaria y de movimiento lento. Puede sobrevivir un año sin agua ni comida.',
            curiosidades: [
              'El reptil más longevo del mundo.',
              'Inspiró a Darwin en su teoría de la evolución.',
              'Un individuo llamado "Solitario George" fue el último de su subespecie.'
            ],
            conservacion: 'Vulnerable (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Reptilia', orden: 'Testudines', familia: 'Testudinidae'
          }
        ]
      },
      {
        name: 'Cocodrilianos',
        icon: '🐊',
        color: 'bg-green-800',
        animales: [
          {
            nombre: 'Cocodrilo del Nilo',
            nombreCientifico: 'Crocodylus niloticus',
            altura: '3.5–6 m de longitud',
            peso: '225–750 kg',
            habitat: 'Ríos, lagos y humedales de África subsahariana',
            alimentacion: 'Carnívoro — peces, zebras, búfalos, hipopótamos jóvenes',
            edadMaxima: '70–80 años',
            comportamiento: 'Territorial y ambush predator. Sorprendentemente cuida a sus crías.',
            curiosidades: [
              'Tiene la mordida más fuerte del reino animal: 5,000 N.',
              'No puede masticar; traga trozos enteros.',
              'La temperatura del nido determina el sexo de las crías.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Reptilia', orden: 'Crocodilia', familia: 'Crocodylidae'
          }
        ]
      }
    ]
  },

  anfibios: {
    id: 'anfibios',
    name: 'Anfibios',
    icon: '🐸',
    headerIcon: '🐸',
    theme: 'bg-teal-600',
    pattern: 'bg-zinc-800',
    subtypes: [
      {
        name: 'Anuros',
        icon: '🐸',
        color: 'bg-teal-400',
        animales: [
          {
            nombre: 'Rana dardo dorada',
            nombreCientifico: 'Phyllobates terribilis',
            altura: '4–5 cm',
            peso: '3 g',
            habitat: 'Selvas tropicales del Pacífico colombiano',
            alimentacion: 'Insectívora — hormigas, ácaros, termitas',
            edadMaxima: '10–15 años',
            comportamiento: 'Diurna y territorial. El macho cuida los huevos y transporta los renacuajos.',
            curiosidades: [
              'El animal más venenoso del mundo: su piel contiene batracotoxina.',
              'Un ejemplar tiene suficiente toxina para matar a 10 personas.',
              'En cautiverio, pierde la toxicidad al cambiar su dieta.'
            ],
            conservacion: 'En peligro (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Amphibia', orden: 'Anura', familia: 'Dendrobatidae'
          },
          {
            nombre: 'Rana toro americana',
            nombreCientifico: 'Lithobates catesbeianus',
            altura: '9–20 cm',
            peso: '500 g',
            habitat: 'Lagos, estanques y ríos lentos de América del Norte',
            alimentacion: 'Carnívora — insectos, peces, serpientes, incluso ratones',
            edadMaxima: '16 años',
            comportamiento: 'Solitaria y muy territorial. Su bramido se escucha a 1 km.',
            curiosidades: [
              'La rana más grande de América del Norte.',
              'Es una especie invasora que amenaza ecosistemas en Europa y Asia.',
              'Puede saltar hasta 2 metros.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Amphibia', orden: 'Anura', familia: 'Ranidae'
          }
        ]
      },
      {
        name: 'Urodelos',
        icon: '🦎',
        color: 'bg-cyan-600',
        animales: [
          {
            nombre: 'Ajolote mexicano',
            nombreCientifico: 'Ambystoma mexicanum',
            altura: '23–30 cm',
            peso: '60–100 g',
            habitat: 'Lagos de Xochimilco, Ciudad de México (endémico)',
            alimentacion: 'Carnívoro — gusanos, insectos, peces pequeños, crustáceos',
            edadMaxima: '15 años',
            comportamiento: 'Neoténico — mantiene características larvales toda su vida (branquias externas).',
            curiosidades: [
              'Puede regenerar extremidades, corazón, pulmones y partes del cerebro.',
              'Es un símbolo cultural azteca (Xolotl, dios del rayo).',
              'En estado crítico de extinción: quedan menos de 1,000 en vida silvestre.'
            ],
            conservacion: 'En peligro crítico (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Amphibia', orden: 'Urodela', familia: 'Ambystomatidae'
          }
        ]
      },
      {
        name: 'Ápodos',
        icon: '🪱',
        color: 'bg-stone-500',
        animales: [
          {
            nombre: 'Cecilia de Thompson',
            nombreCientifico: 'Caecilia thompsoni',
            altura: 'hasta 150 cm de longitud',
            peso: 'aprox. 1 kg',
            habitat: 'Suelos húmedos y ríos de Colombia',
            alimentacion: 'Carnívora — lombrices, larvas e insectos subterráneos',
            edadMaxima: 'desconocida (~13 años estimados)',
            comportamiento: 'Subterránea y fosorail. Sin extremidades ni cintura pélvica visible.',
            curiosidades: [
              'La cecilia más larga conocida.',
              'Tienen pequeños tentáculos sensoriales entre ojos y nariz.',
              'Algunas especies dan leche a sus crías raspando la piel materna.'
            ],
            conservacion: 'Datos insuficientes (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Amphibia', orden: 'Gymnophiona', familia: 'Caeciliidae'
          }
        ]
      }
    ]
  },

  peces: {
    id: 'peces',
    name: 'Peces',
    icon: '🦈',
    headerIcon: '🦈',
    theme: 'bg-blue-700',
    pattern: 'bg-slate-900',
    subtypes: [
      {
        name: 'Óseos',
        icon: '🐠',
        color: 'bg-blue-400',
        animales: [
          {
            nombre: 'Pez payaso',
            nombreCientifico: 'Amphiprion ocellaris',
            altura: '8–11 cm',
            peso: '8–10 g',
            habitat: 'Arrecifes de coral del océano Índico y Pacífico',
            alimentacion: 'Omnívoro — algas, zooplancton, restos de la anémona',
            edadMaxima: '6–10 años',
            comportamiento: 'Vive en simbiosis con anémonas. Protege la anémona; la anémona lo protege a él.',
            curiosidades: [
              'Todos los peces payaso nacen machos; el dominante se vuelve hembra.',
              'Son inmunes al veneno de las anémonas gracias a una capa de mucosa especial.',
              'La película "Buscando a Nemo" disparó su demanda como mascota, amenazando la especie.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Actinopterygii', orden: 'Perciformes', familia: 'Pomacentridae'
          },
          {
            nombre: 'Piraña roja',
            nombreCientifico: 'Pygocentrus nattereri',
            altura: '30–33 cm',
            peso: '1.8–3.5 kg',
            habitat: 'Ríos y lagunas de la cuenca del Amazonas',
            alimentacion: 'Omnívora — peces, insectos, semillas, carroña',
            edadMaxima: '10 años',
            comportamiento: 'Gregaria — caza en cardúmenes. Muy tímida con humanos en realidad.',
            curiosidades: [
              'Sus dientes tienen la misma dureza que el acero.',
              'Un cardumen puede esqueletizar un animal grande en minutos.',
              'Son más activas en época seca cuando el alimento escasea.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Actinopterygii', orden: 'Characiformes', familia: 'Serrasalmidae'
          }
        ]
      },
      {
        name: 'Cartilaginosos',
        icon: '🦈',
        color: 'bg-slate-400',
        animales: [
          {
            nombre: 'Gran tiburón blanco',
            nombreCientifico: 'Carcharodon carcharias',
            altura: '4.5–6 m de longitud',
            peso: '680–1,100 kg',
            habitat: 'Aguas costeras templadas y frías de todos los océanos',
            alimentacion: 'Carnívoro — focas, leones marinos, delfines, otros peces',
            edadMaxima: '70 años',
            comportamiento: 'Solitario y migratorio. Recorre miles de km entre temporadas.',
            curiosidades: [
              'Puede detectar una gota de sangre en 100 litros de agua.',
              'Tiene 6 sentidos: incluye la electrorrecepción (detecta campos eléctricos).',
              'No tiene vejiga natatoria; debe nadar constantemente para no hundirse.'
            ],
            conservacion: 'Vulnerable (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Chondrichthyes', orden: 'Lamniformes', familia: 'Lamnidae'
          }
        ]
      },
      {
        name: 'Sin Mandíbula',
        icon: '🐟',
        color: 'bg-indigo-300',
        animales: [
          {
            nombre: 'Lamprea de mar',
            nombreCientifico: 'Petromyzon marinus',
            altura: '60–120 cm de longitud',
            peso: '200–500 g',
            habitat: 'Ríos del Atlántico Norte y mar abierto',
            alimentacion: 'Parásita — se adhiere a peces y se alimenta de su sangre',
            edadMaxima: '8 años',
            comportamiento: 'Migratoria. Nace en ríos, pasa años en el mar y regresa a desovar.',
            curiosidades: [
              'Es uno de los vertebrados más primitivos que existen, sin cambios en 360 millones de años.',
              'No tiene mandíbula — usa una ventosa con dientes córneos.',
              'La larva (ammocoete) vive enterrada en el lodo hasta 7 años.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Chordata', clase: 'Petromyzontida', orden: 'Petromyzontiformes', familia: 'Petromyzontidae'
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────
  // INVERTEBRADOS
  // ─────────────────────────────────────────

  artropodos: {
    id: 'artropodos',
    name: 'Artrópodos',
    icon: '🕷️',
    headerIcon: '🦂',
    theme: 'bg-orange-700',
    pattern: 'bg-stone-900',
    subtypes: [
      {
        name: 'Insectos',
        icon: '🐝',
        color: 'bg-yellow-400',
        animales: [
          {
            nombre: 'Abeja melífera',
            nombreCientifico: 'Apis mellifera',
            altura: '1.5 cm',
            peso: '0.1 g',
            habitat: 'Todos los continentes excepto la Antártida',
            alimentacion: 'Polen y néctar de flores',
            edadMaxima: '6 semanas (obrera), 5 años (reina)',
            comportamiento: 'Eusocial — colonias de hasta 60,000 individuos con división de castas.',
            curiosidades: [
              'Poliniza el 70% de los cultivos que consume la humanidad.',
              'Comunica la ubicación del alimento con la "danza de la abeja".',
              'Una abeja produce 1/12 de cucharadita de miel en toda su vida.'
            ],
            conservacion: 'En declive global por pesticidas y pérdida de habitat',
            reino: 'Animalia', filo: 'Arthropoda', clase: 'Insecta', orden: 'Hymenoptera', familia: 'Apidae'
          },
          {
            nombre: 'Mariposa monarca',
            nombreCientifico: 'Danaus plexippus',
            altura: '8.9–10.2 cm de envergadura',
            peso: '0.27 g',
            habitat: 'América del Norte (migra a México en invierno)',
            alimentacion: 'Néctar de flores (adulto); hojas de algodoncillo (larva)',
            edadMaxima: '2–6 semanas (generaciones verano), 8 meses (generación migratoria)',
            comportamiento: 'Migratoria — recorre hasta 4,500 km hacia los bosques de Michoacán, México.',
            curiosidades: [
              'La mariposa migratoria más famosa del mundo.',
              'Se orienta usando una brújula solar y campo magnético terrestre.',
              'El algodoncillo que come la vuelve tóxica para depredadores.'
            ],
            conservacion: 'En peligro (UICN)',
            reino: 'Animalia', filo: 'Arthropoda', clase: 'Insecta', orden: 'Lepidoptera', familia: 'Nymphalidae'
          }
        ]
      },
      {
        name: 'Arácnidos',
        icon: '🕷️',
        color: 'bg-stone-600',
        animales: [
          {
            nombre: 'Tarántula roja de Eslovaquia',
            nombreCientifico: 'Brachypelma hamorii',
            altura: '13–15 cm de envergadura',
            peso: '15–25 g',
            habitat: 'Zonas áridas y semiáridas del occidente de México',
            alimentacion: 'Carnívora — grillos, cucarachas, ratones pequeños',
            edadMaxima: '30 años (hembra), 10 años (macho)',
            comportamiento: 'Nocturna y solitaria. Lanza pelos urticantes como defensa.',
            curiosidades: [
              'A pesar de su aspecto, su veneno es menos potente que el de una abeja.',
              'Las hembras son de las arañas más longevas del mundo.',
              'Muda de exoesqueleto durante toda su vida.'
            ],
            conservacion: 'Casi amenazado (UICN)',
            reino: 'Animalia', filo: 'Arthropoda', clase: 'Arachnida', orden: 'Araneae', familia: 'Theraphosidae'
          }
        ]
      },
      {
        name: 'Crustáceos',
        icon: '🦀',
        color: 'bg-red-400',
        animales: [
          {
            nombre: 'Cangrejo de herradura',
            nombreCientifico: 'Limulus polyphemus',
            altura: '30–60 cm',
            peso: '3–5 kg',
            habitat: 'Costa Atlántica de América del Norte',
            alimentacion: 'Omnívoro — gusanos, moluscos, algas',
            edadMaxima: '20 años',
            comportamiento: 'Migra masivamente a las playas cada primavera para reproducirse.',
            curiosidades: [
              'Su sangre azul coagula al contacto con bacterias — vital para testear vacunas.',
              'Ha sobrevivido sin cambios morfológicos por 450 millones de años.',
              'No es un cangrejo verdadero; es pariente de las arañas y escorpiones.'
            ],
            conservacion: 'Vulnerable (UICN)',
            reino: 'Animalia', filo: 'Arthropoda', clase: 'Merostomata', orden: 'Xiphosura', familia: 'Limulidae'
          }
        ]
      },
      {
        name: 'Miriápodos',
        icon: '🐛',
        color: 'bg-orange-400',
        animales: [
          {
            nombre: 'Milpiés gigante africano',
            nombreCientifico: 'Archispirostreptus gigas',
            altura: '30–38 cm de longitud',
            peso: '30–60 g',
            habitat: 'Bosques tropicales del este y sur de África',
            alimentacion: 'Detritívoro — hojas en descomposición, madera podrida',
            edadMaxima: '7 años',
            comportamiento: 'Nocturno. Se enrolla en bola cuando se siente amenazado.',
            curiosidades: [
              'El miriápodo más grande del mundo.',
              'A pesar de llamarse milpiés, tiene entre 300 y 400 patas.',
              'Segrega cianuro de hidrógeno como defensa química.'
            ],
            conservacion: 'No evaluado (UICN)',
            reino: 'Animalia', filo: 'Arthropoda', clase: 'Diplopoda', orden: 'Spirostreptida', familia: 'Spirostreptidae'
          }
        ]
      }
    ]
  },

  moluscos: {
    id: 'moluscos',
    name: 'Moluscos',
    icon: '🐙',
    headerIcon: '🐙',
    theme: 'bg-fuchsia-800',
    pattern: 'bg-zinc-900',
    subtypes: [
      {
        name: 'Gasterópodos',
        icon: '🐌',
        color: 'bg-pink-400',
        animales: [
          {
            nombre: 'Caracol gigante africano',
            nombreCientifico: 'Lissachatina fulica',
            altura: '20 cm de longitud de concha',
            peso: '32 g',
            habitat: 'Bosques tropicales de África oriental; invasor en Asia y América',
            alimentacion: 'Herbívoro — más de 500 especies vegetales, yeso y cal de muros',
            edadMaxima: '9 años',
            comportamiento: 'Nocturno y solitario. Hermafrodita — puede fecundarse a sí mismo.',
            curiosidades: [
              'Una de las peores especies invasoras del mundo.',
              'Puede transmitir meningitis eosinofílica a humanos.',
              'Tiene 14,000 dientes microscópicos en la rádula.'
            ],
            conservacion: 'Plaga invasora',
            reino: 'Animalia', filo: 'Mollusca', clase: 'Gastropoda', orden: 'Stylommatophora', familia: 'Achatinidae'
          }
        ]
      },
      {
        name: 'Bivalvos',
        icon: '🦪',
        color: 'bg-slate-300',
        animales: [
          {
            nombre: 'Almeja gigante',
            nombreCientifico: 'Tridacna gigas',
            altura: '120 cm de longitud',
            peso: 'hasta 250 kg',
            habitat: 'Arrecifes de coral del Indo-Pacífico',
            alimentacion: 'Filtradora — fitoplancton; también fotosintética por algas simbióticas',
            edadMaxima: 'más de 100 años',
            comportamiento: 'Completamente sedentaria de adulta. Se ancla al sustrato coralino.',
            curiosidades: [
              'El molusco bivalvo más grande del mundo.',
              'Las algas que viven en sus tejidos (zooxantelas) producen hasta el 70% de sus nutrientes.',
              'Sus perlas son las más grandes del mundo, sin valor comercial por falta de lustre.'
            ],
            conservacion: 'Vulnerable (UICN)',
            reino: 'Animalia', filo: 'Mollusca', clase: 'Bivalvia', orden: 'Cardiida', familia: 'Cardiidae'
          }
        ]
      },
      {
        name: 'Cefalópodos',
        icon: '🦑',
        color: 'bg-purple-500',
        animales: [
          {
            nombre: 'Pulpo común',
            nombreCientifico: 'Octopus vulgaris',
            altura: '60–90 cm (con tentáculos)',
            peso: '3–10 kg',
            habitat: 'Todos los océanos del mundo, fondos rocosos y arrecifes',
            alimentacion: 'Carnívoro — cangrejos, mejillones, peces pequeños',
            edadMaxima: '1–2 años',
            comportamiento: 'Solitario y altamente inteligente. Usa herramientas y resuelve laberintos.',
            curiosidades: [
              'Tiene 3 corazones, sangre azul y 9 cerebros (uno central + uno por tentáculo).',
              'Puede cambiar color y textura de piel en menos de un segundo.',
              'Las hembras mueren poco después de que eclosionan sus huevos.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Mollusca', clase: 'Cephalopoda', orden: 'Octopoda', familia: 'Octopodidae'
          }
        ]
      }
    ]
  },

  equinodermos: {
    id: 'equinodermos',
    name: 'Equinodermos',
    icon: '⭐',
    headerIcon: '🌟',
    theme: 'bg-rose-600',
    pattern: 'bg-slate-900',
    subtypes: [
      {
        name: 'Asteroideos',
        icon: '⭐',
        color: 'bg-orange-300',
        animales: [
          {
            nombre: 'Estrella de mar común',
            nombreCientifico: 'Asterias rubens',
            altura: '10–30 cm de diámetro',
            peso: '5–100 g',
            habitat: 'Fondos rocosos del Atlántico Norte y Mar del Norte',
            alimentacion: 'Carnívora — mejillones, ostras, percebes',
            edadMaxima: '34 años',
            comportamiento: 'Solitaria y lenta. Evierte el estómago para digerir presas externamente.',
            curiosidades: [
              'Puede regenerar brazos perdidos — e incluso un brazo puede regenerar un cuerpo completo.',
              'No tiene sangre: usa agua de mar como sistema circulatorio.',
              'Tiene cientos de pies ambulacrales con ventosas bajo cada brazo.'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Echinodermata', clase: 'Asteroidea', orden: 'Forcipulatida', familia: 'Asteriidae'
          }
        ]
      },
      {
        name: 'Equinoideos',
        icon: '🐡',
        color: 'bg-rose-400',
        animales: [
          {
            nombre: 'Erizo de mar rojo',
            nombreCientifico: 'Mesocentrotus franciscanus',
            altura: '19 cm de diámetro',
            peso: '500 g',
            habitat: 'Costas rocosas del Pacífico Norte',
            alimentacion: 'Herbívoro — kelp, algas',
            edadMaxima: 'más de 200 años',
            comportamiento: 'Gregario. Se desplaza con pies ambulacrales y sus propias espinas.',
            curiosidades: [
              'Uno de los animales más longevos del planeta.',
              'Su aparato masticador se llama "linterna de Aristóteles" — con 5 dientes.',
              'No muestra signos de envejecimiento biológico (senescencia negligible).'
            ],
            conservacion: 'Preocupación menor (UICN)',
            reino: 'Animalia', filo: 'Echinodermata', clase: 'Echinoidea', orden: 'Camerodonata', familia: 'Strongylocentrotidae'
          }
        ]
      },
      {
        name: 'Holoturoideos',
        icon: '🥒',
        color: 'bg-green-500',
        animales: [
          {
            nombre: 'Pepino de mar gigante',
            nombreCientifico: 'Holothuria fuscogilva',
            altura: '30–50 cm de longitud',
            peso: '500 g – 1.5 kg',
            habitat: 'Fondos arenosos y arrecifes del Indo-Pacífico',
            alimentacion: 'Detritívoro — sedimento orgánico y microorganismos',
            edadMaxima: '5–10 años',
            comportamiento: 'Lento y sedentario. Cuando se siente amenazado expulsa sus vísceras.',
            curiosidades: [
              'Puede expulsar y regenerar sus órganos internos completos.',
              'Es un "reciclador" del ecosistema marino — limpia el fondo.',
              'Su cuerpo puede volverse rígido o completamente líquido a voluntad.'
            ],
            conservacion: 'Vulnerable (UICN)',
            reino: 'Animalia', filo: 'Echinodermata', clase: 'Holothuroidea', orden: 'Aspidochirotida', familia: 'Holothuriidae'
          }
        ]
      }
    ]
  },

  anelidos: {
    id: 'anelidos',
    name: 'Anélidos',
    icon: '🪱',
    headerIcon: '🪱',
    theme: 'bg-stone-600',
    pattern: 'bg-zinc-900',
    subtypes: [
      {
        name: 'Oligoquetos',
        icon: '🪱',
        color: 'bg-orange-200',
        animales: [
          {
            nombre: 'Lombriz de tierra gigante de Gippsland',
            nombreCientifico: 'Megascolides australis',
            altura: 'hasta 3 m de longitud',
            peso: '200 g',
            habitat: 'Suelos arcillosos húmedos de Victoria, Australia',
            alimentacion: 'Detritívora — materia orgánica del suelo',
            edadMaxima: '5 años',
            comportamiento: 'Subterránea. Al moverse produce un sonido de gorgoteo audible desde la superficie.',
            curiosidades: [
              'La lombriz más grande del mundo.',
              'Puede tardar hasta 5 años en alcanzar su tamaño máximo.',
              'Su mucus mantiene húmedos sus túneles, esenciales para otros organismos del suelo.'
            ],
            conservacion: 'Vulnerable (UICN)',
            reino: 'Animalia', filo: 'Annelida', clase: 'Clitellata', orden: 'Opisthopora', familia: 'Megascolecidae'
          }
        ]
      },
      {
        name: 'Poliquetos',
        icon: '🐛',
        color: 'bg-emerald-300',
        animales: [
          {
            nombre: 'Gusano de fuego',
            nombreCientifico: 'Hermodice carunculata',
            altura: '30 cm de longitud',
            peso: '10–15 g',
            habitat: 'Arrecifes de coral del Atlántico tropical y Mediterráneo',
            alimentacion: 'Carnívoro — corales, esponjas, anémonas',
            edadMaxima: 'desconocida',
            comportamiento: 'Lento pero agresivo. Al tocarlo, las setas blancas se clavan en la piel.',
            curiosidades: [
              'Sus setas (quetas) blancas son huecas y se rompen al contacto, causando ardor intenso.',
              'Es uno de los pocos depredadores de corales de fuego.',
              'Puede regenerar segmentos corporales dañados.'
            ],
            conservacion: 'No evaluado (UICN)',
            reino: 'Animalia', filo: 'Annelida', clase: 'Polychaeta', orden: 'Phyllodocida', familia: 'Amphinomidae'
          }
        ]
      },
      {
        name: 'Hirudíneos',
        icon: '🩸',
        color: 'bg-red-800',
        animales: [
          {
            nombre: 'Sanguijuela medicinal',
            nombreCientifico: 'Hirudo medicinalis',
            altura: '10–20 cm',
            peso: '1.5 g (hasta 15 g tras alimentarse)',
            habitat: 'Estanques y ríos de aguas limpias de Europa y Asia',
            alimentacion: 'Hematófaga — sangre de vertebrados',
            edadMaxima: '20 años',
            comportamiento: 'Solitaria. Puede pasar meses sin alimentarse tras una comida abundante.',
            curiosidades: [
              'Usada en medicina moderna para mejorar circulación sanguínea post-cirugía.',
              'Su saliva contiene hirudina, el anticoagulante natural más potente conocido.',
              'Tiene 10 estómagos para almacenar sangre.'
            ],
            conservacion: 'Vulnerable (UICN)',
            reino: 'Animalia', filo: 'Annelida', clase: 'Clitellata', orden: 'Hirudinida', familia: 'Hirudinidae'
          }
        ]
      }
    ]
  }
};

module.exports = {
  getAll: () => categoriesData,
  getById: (id) => categoriesData[id]
};