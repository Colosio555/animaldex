/**
 * models/animalmodel.js
 * Base de conocimientos AnimaliaDex — con descripciones de subtipos
 */

const categoriesData = {

  mamiferos: {
    id: 'mamiferos', name: 'Mamíferos', icon: '🦁', headerIcon: '🐘',
    theme: 'bg-[#986435]', pattern: 'bg-zinc-900',
    descripcion: 'Los mamíferos son vertebrados de sangre caliente que se caracterizan por amamantar a sus crías, tener pelo o pelaje y respirar mediante pulmones.',
    imagen: 'https://i.pinimg.com/736x/32/40/95/3240952750609002e41171b717f3d238.jpg',
    subtypes: [
      {
        name: 'Placentarios', icon: '🦁', color: 'bg-[#717b88]',
        imagen: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80',
        descripcion: 'Son el grupo más diverso de mamíferos. Sus crías se desarrollan en el útero materno a través de una placenta que les proporciona nutrición. Incluyen desde ratones hasta ballenas.',
        animales: [
          { nombre: 'León africano', nombreCientifico: 'Panthera leo', altura: '1.2 m', peso: '150–250 kg', habitat: 'Sabanas del África subsahariana', alimentacion: 'Carnívoro — cebras, búfalos, ñus', edadMaxima: '16 años en libertad', comportamiento: 'Vive en manadas. Las hembras son las principales cazadoras.', curiosidades: ['Su rugido se escucha a 8 km.','Duerme hasta 20 horas al día.','Único felino con dimorfismo sexual visible.'], conservacion: 'Vulnerable (UICN)', reino:'Animalia', filo:'Chordata', clase:'Mammalia', orden:'Carnivora', familia:'Felidae', imagen:'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&q=80' },
          { nombre: 'Elefante africano', nombreCientifico: 'Loxodonta africana', altura: '3.3 m', peso: '4,000–7,000 kg', habitat: 'Sabanas y bosques de África', alimentacion: 'Herbívoro — hierba, hojas, corteza', edadMaxima: '60–70 años', comportamiento: 'Matriarcal. Alta inteligencia emocional.', curiosidades: ['Animal terrestre más grande del mundo.','Puede reconocerse en un espejo.','Usa la trompa para comunicarse.'], conservacion: 'Vulnerable (UICN)', reino:'Animalia', filo:'Chordata', clase:'Mammalia', orden:'Proboscidea', familia:'Elephantidae', imagen:'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&q=80' },
          { nombre: 'Delfín mular', nombreCientifico: 'Tursiops truncatus', altura: '2.5–3.8 m', peso: '150–650 kg', habitat: 'Océanos templados y tropicales', alimentacion: 'Carnívoro — peces, calamares', edadMaxima: '40–50 años', comportamiento: 'Altamente social. Usa ecolocalización para cazar.', curiosidades: ['Duerme con un hemisferio a la vez.','Puede aprender lenguaje de signos.','Cerebro más grande que el humano proporcionalmente.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Chordata', clase:'Mammalia', orden:'Artiodactyla', familia:'Delphinidae', imagen:'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=800&q=80' }
        ]
      },
      {
        name: 'Marsupiales', icon: '🦘', color: 'bg-[#f4bc83]',
        imagen: 'https://i1-e.pinimg.com/736x/9c/87/d5/9c87d5ac4ce043ab29b14caf509d7c00.jpg',
        descripcion: 'Los marsupiales dan a luz crías en etapa muy temprana de desarrollo. Las crías completan su desarrollo dentro de una bolsa o marsupio en el vientre de la madre.',
        animales: [
          { nombre: 'Canguro rojo', nombreCientifico: 'Osphranter rufus', altura: '1.5 m', peso: '55–90 kg', habitat: 'Zonas áridas de Australia', alimentacion: 'Herbívoro — pastos y arbustos', edadMaxima: '22 años', comportamiento: 'Los machos compiten con "boxeo".', curiosidades: ['El marsupial más grande del mundo.','Puede detener el desarrollo de un embrión.','La cría nace del tamaño de un cacahuate.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Chordata', clase:'Mammalia', orden:'Diprotodontia', familia:'Macropodidae', imagen:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
          { nombre: 'Koala', nombreCientifico: 'Phascolarctos cinereus', altura: '60–85 cm', peso: '4–15 kg', habitat: 'Bosques de eucaliptos de Australia', alimentacion: 'Herbívoro — hojas de eucalipto', edadMaxima: '18 años', comportamiento: 'Solitario. Duerme hasta 22 horas.', curiosidades: ['Las hojas de eucalipto son tóxicas para casi todos.','Sus huellas son casi idénticas a las humanas.','No son osos.'], conservacion: 'Vulnerable (UICN)', reino:'Animalia', filo:'Chordata', clase:'Mammalia', orden:'Diprotodontia', familia:'Phascolarctidae', imagen:'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=800&q=80' }
        ]
      },
      {
        name: 'Monotremas', icon: '🦆', color: 'bg-[#a37952]',
        imagen: 'https://i1-e.pinimg.com/1200x/26/15/43/261543baf8ec732080eaf4e503fbede4.jpg',
        descripcion: 'Los monotremas son los únicos mamíferos que ponen huevos. Son considerados los mamíferos más primitivos. Solo existen 5 especies vivas en el mundo.',
        animales: [
          { nombre: 'Ornitorrinco', nombreCientifico: 'Ornithorhynchus anatinus', altura: '38–60 cm', peso: '0.7–2.4 kg', habitat: 'Ríos y lagos del este de Australia', alimentacion: 'Carnívoro — larvas, gusanos, crustáceos', edadMaxima: '17 años', comportamiento: 'Solitario y semiacuático. Detecta campos eléctricos.', curiosidades: ['Pone huevos siendo mamífero.','Los machos tienen espolón venenoso.','No tiene estómago.'], conservacion: 'Casi amenazado (UICN)', reino:'Animalia', filo:'Chordata', clase:'Mammalia', orden:'Monotremata', familia:'Ornithorhynchidae', imagen:'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=800&q=80' }
        ]
      }
    ]
  },

  aves: {
    id: 'aves', name: 'Aves', icon: '🦜', headerIcon: '🦅',
    theme: 'bg-sky-600', pattern: 'bg-slate-900',
    descripcion: 'Las aves son vertebrados de sangre caliente cuyo cuerpo está cubierto de plumas. Se reproducen poniendo huevos y la mayoría posee la capacidad de volar.',
    imagen: 'https://i1-e.pinimg.com/1200x/a0/8a/a9/a08aa9e6630c2048c1f6342dda158a4a.jpg',
    subtypes: [
      {
        name: 'Voladoras', icon: '🕊️', color: 'bg-sky-300',
        imagen: 'https://i1-e.pinimg.com/1200x/e9/64/68/e96468835cbd089c74dd46c36f6d8d17.jpg',
        descripcion: 'La gran mayoría de las aves pertenecen a este grupo. Poseen alas funcionales, huesos huecos y musculatura pectoral potente adaptada para el vuelo.',
        animales: [
          { nombre: 'Águila calva', nombreCientifico: 'Haliaeetus leucocephalus', altura: '71–96 cm', peso: '3–6.3 kg', habitat: 'Costas y ríos de América del Norte', alimentacion: 'Carnívora — principalmente peces', edadMaxima: '28 años', comportamiento: 'Territorial. Construye los nidos más grandes de Norteamérica.', curiosidades: ['Símbolo nacional de EE.UU.','Ve 4–8 veces más nítido que un humano.','Su llamado real es débil.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Chordata', clase:'Aves', orden:'Accipitriformes', familia:'Accipitridae', imagen:'https://images.unsplash.com/photo-1611689342806-0863700a1c20?w=800&q=80' },
          { nombre: 'Colibrí gorjinegro', nombreCientifico: 'Archilochus alexandri', altura: '8–9 cm', peso: '2.8–3.5 g', habitat: 'Jardines y bosques del oeste de Norteamérica', alimentacion: 'Nectarívoro — néctar e insectos', edadMaxima: '12 años', comportamiento: 'Solitario y territorial. Único pájaro que vuela hacia atrás.', curiosidades: ['Bate las alas 50–80 veces por segundo.','Corazón late 1,200 veces por minuto.','Entra en torpor nocturno.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Chordata', clase:'Aves', orden:'Apodiformes', familia:'Trochilidae', imagen:'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80' }
        ]
      },
      {
        name: 'No Voladoras', icon: '🐧', color: 'bg-slate-400',
        imagen: 'https://i1-e.pinimg.com/1200x/dc/22/e7/dc22e72f0d0c2d63136b4f94a74b7611.jpg',
        descripcion: 'Aves que perdieron la capacidad de volar a lo largo de la evolución. Sus alas se adaptaron para nadar, correr o simplemente se redujeron. Son generalmente más grandes.',
        animales: [
          { nombre: 'Pingüino emperador', nombreCientifico: 'Aptenodytes forsteri', altura: '110–130 cm', peso: '22–45 kg', habitat: 'Antártida', alimentacion: 'Carnívoro — peces, calamares, kril', edadMaxima: '20 años', comportamiento: 'Los machos incuban el huevo en invierno antártico.', curiosidades: ['Bucea hasta 565 m.','Soporta -60°C.','El pingüino más grande del mundo.'], conservacion: 'Casi amenazado (UICN)', reino:'Animalia', filo:'Chordata', clase:'Aves', orden:'Sphenisciformes', familia:'Spheniscidae', imagen:'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=800&q=80' },
          { nombre: 'Avestruz', nombreCientifico: 'Struthio camelus', altura: '2.1–2.8 m', peso: '63–145 kg', habitat: 'Sabanas y desiertos de África', alimentacion: 'Omnívoro — plantas, insectos, lagartijas', edadMaxima: '40–45 años', comportamiento: 'Corre hasta 70 km/h.', curiosidades: ['El ave más grande del mundo.','Sus ojos miden 5 cm — los más grandes de vertebrado terrestre.','Bípedo más rápido del planeta.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Chordata', clase:'Aves', orden:'Struthioniformes', familia:'Struthionidae', imagen:'https://images.unsplash.com/photo-1508190963171-9f372b937bc3?w=800&q=80' }
        ]
      },
      {
        name: 'Acuáticas', icon: '🦆', color: 'bg-teal-400',
        imagen: 'https://i1-e.pinimg.com/736x/87/3e/cf/873ecfbf84061cf5b1f048fea7c99c04.jpg',
        descripcion: 'Aves adaptadas a vivir en o cerca del agua. Tienen patas palmeadas, plumaje impermeable y picos especializados para filtrar o atrapar presas en el agua.',
        animales: [
          { nombre: 'Flamenco común', nombreCientifico: 'Phoenicopterus roseus', altura: '1.2–1.45 m', peso: '2–4 kg', habitat: 'Lagos salinos de África, Europa del sur y Asia', alimentacion: 'Filtrador — algas y crustáceos', edadMaxima: '40 años', comportamiento: 'Gregario. Duerme parado en un solo pie.', curiosidades: ['Su color viene de su dieta.','Los polluelos nacen blancos.','Filtra el agua con el pico invertido.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Chordata', clase:'Aves', orden:'Phoenicopteriformes', familia:'Phoenicopteridae', imagen:'https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=800&q=80' }
        ]
      }
    ]
  },

  reptiles: {
    id: 'reptiles', name: 'Reptiles', icon: '🐍', headerIcon: '🐊',
    theme: 'bg-emerald-700', pattern: 'bg-stone-900',
    descripcion: 'Los reptiles son vertebrados de sangre fría con cuerpo cubierto de escamas. Respiran por pulmones y la mayoría se reproduce poniendo huevos.',
    imagen: 'https://i.pinimg.com/736x/45/bf/f2/45bff221e32b3f762e297c82440ffb7c.jpg',
    subtypes: [
      {
        name: 'Escamosos', icon: '🦎', color: 'bg-emerald-400',
        imagen: 'https://i1-e.pinimg.com/1200x/b1/71/e4/b171e4b05209abb5aecadf6768bba9a7.jpg',
        descripcion: 'El orden más diverso de reptiles. Incluye lagartos y serpientes. Se caracterizan por sus escamas queratinizadas y la muda periódica de piel.',
        animales: [
          { nombre: 'Dragón de Komodo', nombreCientifico: 'Varanus komodoensis', altura: '2.5–3 m', peso: '70–90 kg', habitat: 'Islas de Indonesia', alimentacion: 'Carnívoro — ciervos, jabalíes', edadMaxima: '30 años', comportamiento: 'Solitario y emboscador.', curiosidades: ['El lagarto más grande del mundo.','Su saliva contiene veneno anticoagulante.','Las hembras pueden reproducirse sin macho.'], conservacion: 'En peligro (UICN)', reino:'Animalia', filo:'Chordata', clase:'Reptilia', orden:'Squamata', familia:'Varanidae', imagen:'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&q=80' },
          { nombre: 'Anaconda verde', nombreCientifico: 'Eunectes murinus', altura: '5–8 m', peso: '30–250 kg', habitat: 'Selvas y pantanos de América del Sur', alimentacion: 'Carnívora — capibaras, caimanes', edadMaxima: '30 años', comportamiento: 'Semiacuática. Constrictora.', curiosidades: ['La serpiente más pesada del mundo.','Puede pasar un año sin comer.','Detecta calor con fosas termorreceptoras.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Chordata', clase:'Reptilia', orden:'Squamata', familia:'Boidae', imagen:'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=800&q=80' }
        ]
      },
      {
        name: 'Testudines', icon: '🐢', color: 'bg-lime-500',
        imagen: 'https://i1-e.pinimg.com/1200x/fb/21/a0/fb21a0f3586a8b3cbfc5248748f16263.jpg',
        descripcion: 'Las tortugas son reptiles con un caparazón óseo que protege su cuerpo. Son uno de los grupos de vertebrados más antiguos, con más de 220 millones de años de historia.',
        animales: [
          { nombre: 'Tortuga gigante de Galápagos', nombreCientifico: 'Chelonoidis niger', altura: '1.5 m', peso: '180–300 kg', habitat: 'Islas Galápagos, Ecuador', alimentacion: 'Herbívora — cactus, pasto', edadMaxima: 'Más de 170 años', comportamiento: 'Solitaria. Puede sobrevivir un año sin agua.', curiosidades: ['El reptil más longevo del mundo.','Inspiró a Darwin.','El último de su subespecie fue "Solitario George".'], conservacion: 'Vulnerable (UICN)', reino:'Animalia', filo:'Chordata', clase:'Reptilia', orden:'Testudines', familia:'Testudinidae', imagen:'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80' }
        ]
      },
      {
        name: 'Cocodrilianos', icon: '🐊', color: 'bg-green-800',
        imagen: 'https://i1-e.pinimg.com/1200x/34/75/b6/3475b66cacee9fce89a04522d4fe3869.jpg',
        descripcion: 'Los cocodrilianos son los reptiles más grandes del mundo. Son considerados los reptiles más evolucionados y tienen un corazón de cuatro cámaras similar al de los mamíferos.',
        animales: [
          { nombre: 'Cocodrilo del Nilo', nombreCientifico: 'Crocodylus niloticus', altura: '3.5–6 m', peso: '225–750 kg', habitat: 'Ríos y lagos de África subsahariana', alimentacion: 'Carnívoro — peces, cebras, búfalos', edadMaxima: '70–80 años', comportamiento: 'Territorial. Cuida a sus crías sorprendentemente.', curiosidades: ['Mordida más fuerte del reino animal: 5,000 N.','No puede masticar, traga entero.','La temperatura del nido determina el sexo.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Chordata', clase:'Reptilia', orden:'Crocodilia', familia:'Crocodylidae', imagen:'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80' }
        ]
      }
    ]
  },

  anfibios: {
    id: 'anfibios', name: 'Anfibios', icon: '🐸', headerIcon: '🐸',
    theme: 'bg-teal-600', pattern: 'bg-zinc-800',
    descripcion: 'Los anfibios son vertebrados que viven tanto en el agua como en la tierra. Su piel es húmeda y permeable, y la mayoría tiene una metamorfosis de larva acuática a adulto terrestre.',
    imagen: 'https://i.pinimg.com/736x/9b/f5/c4/9bf5c4d5fdc51568fa9436bb41bb7b6b.jpg',
    subtypes: [
      {
        name: 'Anuros', icon: '🐸', color: 'bg-teal-400',
        imagen: 'https://i1-e.pinimg.com/1200x/1a/45/e9/1a45e96dda687c313c7774fe2f41d651.jpg',
        descripcion: 'Las ranas y sapos. Sin cola en estado adulto. Son los anfibios más diversos y abundantes. Muchas especies tienen piel colorida como señal de peligro.',
        animales: [
          { nombre: 'Rana dardo dorada', nombreCientifico: 'Phyllobates terribilis', altura: '4–5 cm', peso: '3 g', habitat: 'Selvas del Pacífico colombiano', alimentacion: 'Insectívora — hormigas, ácaros', edadMaxima: '10–15 años', comportamiento: 'Diurna y territorial.', curiosidades: ['El animal más venenoso del mundo.','Un ejemplar puede matar a 10 personas.','En cautiverio pierde su toxicidad.'], conservacion: 'En peligro (UICN)', reino:'Animalia', filo:'Chordata', clase:'Amphibia', orden:'Anura', familia:'Dendrobatidae', imagen:'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=800&q=80' }
        ]
      },
      {
        name: 'Urodelos', icon: '🦎', color: 'bg-cyan-600',
        imagen: 'https://i1-e.pinimg.com/1200x/5b/4e/51/5b4e5192c3a3e2dfb56a72e4b797bf0a.jpg',
        descripcion: 'Las salamandras y tritones. Conservan la cola durante toda su vida. Algunos mantienen características larvales incluso en la etapa adulta (neotenia).',
        animales: [
          { nombre: 'Ajolote mexicano', nombreCientifico: 'Ambystoma mexicanum', altura: '23–30 cm', peso: '60–100 g', habitat: 'Lagos de Xochimilco, Ciudad de México', alimentacion: 'Carnívoro — gusanos, insectos, peces pequeños', edadMaxima: '15 años', comportamiento: 'Neoténico — mantiene branquias externas toda la vida.', curiosidades: ['Puede regenerar extremidades y partes del cerebro.','Símbolo cultural azteca.','Menos de 1,000 en vida silvestre.'], conservacion: 'En peligro crítico (UICN)', reino:'Animalia', filo:'Chordata', clase:'Amphibia', orden:'Urodela', familia:'Ambystomatidae', imagen:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' }
        ]
      },
      {
        name: 'Ápodos', icon: '🪱', color: 'bg-stone-500',
        imagen: 'https://i1-e.pinimg.com/1200x/2e/af/89/2eaf89eadcbd331150745c8bbcd1d574.jpg',
        descripcion: 'Las cecilias. Anfibios sin extremidades ni cola visible. Viven enterrados en suelos húmedos o en ríos. Son los anfibios menos conocidos por su estilo de vida subterráneo.',
        animales: [
          { nombre: 'Cecilia de Thompson', nombreCientifico: 'Caecilia thompsoni', altura: 'hasta 150 cm', peso: 'aprox. 1 kg', habitat: 'Suelos húmedos de Colombia', alimentacion: 'Carnívora — lombrices y larvas', edadMaxima: '~13 años', comportamiento: 'Subterránea y fosorial.', curiosidades: ['La cecilia más larga conocida.','Tienen tentáculos sensoriales.','Algunas dan leche raspando su propia piel.'], conservacion: 'Datos insuficientes (UICN)', reino:'Animalia', filo:'Chordata', clase:'Amphibia', orden:'Gymnophiona', familia:'Caeciliidae', imagen:'https://images.unsplash.com/photo-1535083783855-ded51a9b5041?w=800&q=80' }
        ]
      }
    ]
  },

  peces: {
    id: 'peces', name: 'Peces', icon: '🦈', headerIcon: '🦈',
    theme: 'bg-blue-700', pattern: 'bg-slate-900',
    descripcion: 'Los peces son vertebrados acuáticos que respiran mediante branquias. Son el grupo más diverso de vertebrados con más de 33,000 especies conocidas.',
    imagen: 'https://i1-e.pinimg.com/1200x/c3/be/6a/c3be6a4caafee9d54fe15e60859f1f6d.jpg',
    subtypes: [
      {
        name: 'Óseos', icon: '🐠', color: 'bg-blue-400',
        imagen: 'https://i1-e.pinimg.com/1200x/ea/22/d5/ea22d5f645fb3bbf2630cc78c033a0a1.jpg',
        descripcion: 'Los peces óseos constituyen más del 95% de todas las especies de peces. Se distinguen por tener un esqueleto calcificado y una vejiga natatoria para controlar la flotación.',
        animales: [
          { nombre: 'Pez payaso', nombreCientifico: 'Amphiprion ocellaris', altura: '8–11 cm', peso: '8–10 g', habitat: 'Arrecifes de coral del Indo-Pacífico', alimentacion: 'Omnívoro — algas y zooplancton', edadMaxima: '6–10 años', comportamiento: 'Vive en simbiosis con anémonas.', curiosidades: ['Todos nacen machos; el dominante se vuelve hembra.','Inmunes al veneno de las anémonas.','Nemo disparó su demanda como mascota.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Chordata', clase:'Actinopterygii', orden:'Perciformes', familia:'Pomacentridae', imagen:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80' }
        ]
      },
      {
        name: 'Cartilaginosos', icon: '🦈', color: 'bg-slate-400',
        imagen: 'https://i1-e.pinimg.com/1200x/d0/25/9f/d0259fc86cecb0ce097c00b0c8ae6775.jpg',
        descripcion: 'Tiburones, rayas y quimeras. Su esqueleto es de cartílago, no de hueso. No tienen vejiga natatoria, por lo que deben nadar constantemente para no hundirse.',
        animales: [
          { nombre: 'Gran tiburón blanco', nombreCientifico: 'Carcharodon carcharias', altura: '4.5–6 m', peso: '680–1,100 kg', habitat: 'Aguas costeras templadas de todos los océanos', alimentacion: 'Carnívoro — focas, leones marinos', edadMaxima: '70 años', comportamiento: 'Solitario y migratorio.', curiosidades: ['Detecta una gota de sangre en 100 litros.','Tiene 6 sentidos incluyendo electrorrecepción.','Debe nadar constantemente.'], conservacion: 'Vulnerable (UICN)', reino:'Animalia', filo:'Chordata', clase:'Chondrichthyes', orden:'Lamniformes', familia:'Lamnidae', imagen:'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=800&q=80' }
        ]
      },
      {
        name: 'Sin Mandíbula', icon: '🐟', color: 'bg-indigo-300',
        imagen: 'https://i1-e.pinimg.com/736x/11/ac/20/11ac206d1f97578b55043cdf5aa06962.jpg',
        descripcion: 'Los agnatos o peces sin mandíbula son los vertebrados más primitivos. En lugar de mandíbula tienen una ventosa circular con dientes córneos para adherirse a sus presas.',
        animales: [
          { nombre: 'Lamprea de mar', nombreCientifico: 'Petromyzon marinus', altura: '60–120 cm', peso: '200–500 g', habitat: 'Ríos del Atlántico Norte y mar abierto', alimentacion: 'Parásita — sangre de peces', edadMaxima: '8 años', comportamiento: 'Migratoria. Nace en ríos, vive en el mar y regresa a desovar.', curiosidades: ['Sin cambios morfológicos en 360 millones de años.','No tiene mandíbula — usa ventosa con dientes.','La larva vive enterrada hasta 7 años.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Chordata', clase:'Petromyzontida', orden:'Petromyzontiformes', familia:'Petromyzontidae', imagen:'https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?w=800&q=80' }
        ]
      }
    ]
  },

  artropodos: {
    id: 'artropodos', name: 'Artrópodos', icon: '🕷️', headerIcon: '🦂',
    theme: 'bg-orange-700', pattern: 'bg-stone-900',
    descripcion: 'Los artrópodos son el filo animal más diverso del planeta. Se caracterizan por su exoesqueleto quitinoso, cuerpo segmentado y apéndices articulados.',
    imagen: 'https://i.pinimg.com/736x/39/8b/44/398b44161c8577651cfb7b0afc334100.jpg',
    subtypes: [
      {
        name: 'Insectos', icon: '🐝', color: 'bg-yellow-400',
        imagen: 'https://i1-e.pinimg.com/1200x/1c/a4/01/1ca401b59c22e76c63ec4ea4e7297a0d.jpg',
        descripcion: 'Los insectos son el grupo animal más numeroso de la Tierra. Tienen 3 pares de patas, 3 regiones corporales y la mayoría posee alas en estado adulto.',
        animales: [
          { nombre: 'Abeja melífera', nombreCientifico: 'Apis mellifera', altura: '1.5 cm', peso: '0.1 g', habitat: 'Todos los continentes excepto la Antártida', alimentacion: 'Polen y néctar', edadMaxima: '6 semanas (obrera), 5 años (reina)', comportamiento: 'Eusocial — colonias de hasta 60,000 individuos.', curiosidades: ['Poliniza el 70% de los cultivos humanos.','Comunica ubicación de alimento con danza.','Produce 1/12 de cucharadita de miel en su vida.'], conservacion: 'En declive global', reino:'Animalia', filo:'Arthropoda', clase:'Insecta', orden:'Hymenoptera', familia:'Apidae', imagen:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' }
        ]
      },
      {
        name: 'Arácnidos', icon: '🕷️', color: 'bg-stone-600',
        imagen: 'https://i1-e.pinimg.com/1200x/89/1f/57/891f571a37e74559d7ce9d41ccdd57e4.jpg',
        descripcion: 'Arañas, escorpiones, ácaros y garrapatas. Tienen 4 pares de patas y 2 regiones corporales. Son principalmente depredadores y muchos producen veneno o seda.',
        animales: [
          { nombre: 'Tarántula roja de México', nombreCientifico: 'Brachypelma hamorii', altura: '13–15 cm envergadura', peso: '15–25 g', habitat: 'Zonas áridas del occidente de México', alimentacion: 'Carnívora — grillos, ratones pequeños', edadMaxima: '30 años (hembra)', comportamiento: 'Nocturna y solitaria. Lanza pelos urticantes.', curiosidades: ['Su veneno es menos potente que el de una abeja.','Las hembras son de las arañas más longevas.','Muda de exoesqueleto toda su vida.'], conservacion: 'Casi amenazado (UICN)', reino:'Animalia', filo:'Arthropoda', clase:'Arachnida', orden:'Araneae', familia:'Theraphosidae', imagen:'https://images.unsplash.com/photo-1563681353614-958ceac74baa?w=800&q=80' }
        ]
      },
      {
        name: 'Crustáceos', icon: '🦀', color: 'bg-red-400',
        imagen: 'https://i.pinimg.com/736x/bc/82/7e/bc827e1742e5162dbf51bb479d60aa85.jpg',
        descripcion: 'Cangrejos, langostas, camarones y percebes. La mayoría son acuáticos. Tienen dos pares de antenas y el cuerpo cubierto por un caparazón calcificado.',
        animales: [
          { nombre: 'Cangrejo de herradura', nombreCientifico: 'Limulus polyphemus', altura: '30–60 cm', peso: '3–5 kg', habitat: 'Costa Atlántica de América del Norte', alimentacion: 'Omnívoro — gusanos, moluscos', edadMaxima: '20 años', comportamiento: 'Migra masivamente en primavera para reproducirse.', curiosidades: ['Su sangre azul es vital para testear vacunas.','450 millones de años sin cambios morfológicos.','No es un cangrejo verdadero — pariente de las arañas.'], conservacion: 'Vulnerable (UICN)', reino:'Animalia', filo:'Arthropoda', clase:'Merostomata', orden:'Xiphosura', familia:'Limulidae', imagen:'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=800&q=80' }
        ]
      },
      {
        name: 'Miriápodos', icon: '🐛', color: 'bg-orange-400',
        imagen: 'https://i1-e.pinimg.com/1200x/15/47/94/1547949948547cb94af8783a19841903.jpg',
        descripcion: 'Ciempiés y milpiés. Se caracterizan por tener un cuerpo alargado con muchos segmentos, cada uno con uno o dos pares de patas. Habitan en suelos húmedos y hojarasca.',
        animales: [
          { nombre: 'Milpiés gigante africano', nombreCientifico: 'Archispirostreptus gigas', altura: '30–38 cm', peso: '30–60 g', habitat: 'Bosques tropicales del este y sur de África', alimentacion: 'Detritívoro — hojas en descomposición', edadMaxima: '7 años', comportamiento: 'Nocturno. Se enrolla en bola al sentirse amenazado.', curiosidades: ['El miriápodo más grande del mundo.','Tiene entre 300 y 400 patas.','Segrega cianuro de hidrógeno como defensa.'], conservacion: 'No evaluado (UICN)', reino:'Animalia', filo:'Arthropoda', clase:'Diplopoda', orden:'Spirostreptida', familia:'Spirostreptidae', imagen:'https://images.unsplash.com/photo-1559767949-0faa5c7e9992?w=800&q=80' }
        ]
      }
    ]
  },

  moluscos: {
    id: 'moluscos', name: 'Moluscos', icon: '🐙', headerIcon: '🐙',
    theme: 'bg-fuchsia-800', pattern: 'bg-zinc-900',
    descripcion: 'Los moluscos son uno de los filos más diversos del reino animal. Tienen cuerpo blando, generalmente protegido por una concha calcárea, y un pie muscular para desplazarse.',
    imagen: 'https://i.pinimg.com/736x/a0/e5/7e/a0e57e0a2fa5fabd84b6cf0ef7e8681d.jpg',
    subtypes: [
      {
        name: 'Gasterópodos', icon: '🐌', color: 'bg-pink-400',
        imagen: 'https://i1-e.pinimg.com/736x/99/7e/75/997e7550c0e9ca5494f250101a56e7a6.jpg',
        descripcion: 'El grupo más diverso de moluscos. Incluye caracoles y babosas. Se desplazan sobre un pie muscular y la mayoría tiene una concha en espiral. Son los únicos moluscos terrestres.',
        animales: [
          { nombre: 'Caracol gigante africano', nombreCientifico: 'Lissachatina fulica', altura: '20 cm concha', peso: '32 g', habitat: 'Bosques tropicales de África oriental', alimentacion: 'Herbívoro — más de 500 especies vegetales', edadMaxima: '9 años', comportamiento: 'Nocturno. Hermafrodita.', curiosidades: ['Una de las peores especies invasoras del mundo.','Puede transmitir meningitis.','Tiene 14,000 dientes microscópicos.'], conservacion: 'Plaga invasora', reino:'Animalia', filo:'Mollusca', clase:'Gastropoda', orden:'Stylommatophora', familia:'Achatinidae', imagen:'https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=800&q=80' }
        ]
      },
      {
        name: 'Bivalvos', icon: '🦪', color: 'bg-slate-300',
        imagen: 'https://i.pinimg.com/736x/d5/b3/52/d5b352da07b63ccce8daeaacf6c6c5d2.jpg',
        descripcion: 'Mejillones, almejas, ostras y vieiras. Tienen dos valvas que protegen su cuerpo blando. Son filtradores que purifican el agua y son fundamentales en los ecosistemas acuáticos.',
        animales: [
          { nombre: 'Almeja gigante', nombreCientifico: 'Tridacna gigas', altura: '120 cm', peso: 'hasta 250 kg', habitat: 'Arrecifes de coral del Indo-Pacífico', alimentacion: 'Filtradora y fotosintética por algas simbióticas', edadMaxima: 'más de 100 años', comportamiento: 'Completamente sedentaria de adulta.', curiosidades: ['El molusco bivalvo más grande del mundo.','Las algas producen hasta 70% de sus nutrientes.','Sus perlas son las más grandes del mundo.'], conservacion: 'Vulnerable (UICN)', reino:'Animalia', filo:'Mollusca', clase:'Bivalvia', orden:'Cardiida', familia:'Cardiidae', imagen:'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=800&q=80' }
        ]
      },
      {
        name: 'Cefalópodos', icon: '🦑', color: 'bg-purple-500',
        imagen: 'https://i1-e.pinimg.com/1200x/c6/94/6b/c6946b2bc93524354031287413cd980c.jpg',
        descripcion: 'Pulpos, calamares y nautilus. Los cefalópodos más inteligentes del reino animal invertebrado. Tienen tentáculos con ventosas, pueden cambiar de color y tienen sistemas nerviosos complejos.',
        animales: [
          { nombre: 'Pulpo común', nombreCientifico: 'Octopus vulgaris', altura: '60–90 cm', peso: '3–10 kg', habitat: 'Todos los océanos, fondos rocosos', alimentacion: 'Carnívoro — cangrejos, mejillones', edadMaxima: '1–2 años', comportamiento: 'Solitario. Usa herramientas y resuelve laberintos.', curiosidades: ['3 corazones, sangre azul y 9 cerebros.','Cambia color y textura en menos de un segundo.','Las hembras mueren al eclosionar los huevos.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Mollusca', clase:'Cephalopoda', orden:'Octopoda', familia:'Octopodidae', imagen:'https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?w=800&q=80' }
        ]
      }
    ]
  },

  equinodermos: {
    id: 'equinodermos', name: 'Equinodermos', icon: '⭐', headerIcon: '🌟',
    theme: 'bg-rose-600', pattern: 'bg-slate-900',
    descripcion: 'Los equinodermos son exclusivamente marinos. Se caracterizan por su simetría radial pentámera (5 partes), su endoesqueleto calcáreo y su sistema vascular acuífero único.',
    imagen: 'https://i1-e.pinimg.com/1200x/40/6c/3a/406c3a0f3c582e12cbe2b0b9b2c886b2.jpg',
    subtypes: [
      {
        name: 'Asteroideos', icon: '⭐', color: 'bg-orange-300',
        imagen: 'https://i1-e.pinimg.com/1200x/64/05/1d/64051deb97e35fd3ac9638ba03106434.jpg',
        descripcion: 'Las estrellas de mar. Tienen generalmente 5 brazos y se mueven mediante pies ambulacrales con ventosas. Son depredadores activos capaces de evertir su estómago.',
        animales: [
          { nombre: 'Estrella de mar común', nombreCientifico: 'Asterias rubens', altura: '10–30 cm diámetro', peso: '5–100 g', habitat: 'Fondos rocosos del Atlántico Norte', alimentacion: 'Carnívora — mejillones, ostras', edadMaxima: '34 años', comportamiento: 'Solitaria. Evierte el estómago para digerir externamente.', curiosidades: ['Puede regenerar brazos completos.','Usa agua de mar como sistema circulatorio.','Cientos de pies ambulacrales con ventosas.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Echinodermata', clase:'Asteroidea', orden:'Forcipulatida', familia:'Asteriidae', imagen:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80' }
        ]
      },
      {
        name: 'Equinoideos', icon: '🐡', color: 'bg-rose-400',
        imagen: 'https://i1-e.pinimg.com/1200x/44/d1/f5/44d1f5aae2ec264155b18a6de6480174.jpg',
        descripcion: 'Los erizos de mar y los dólares de arena. Tienen un caparazón esférico cubierto de espinas móviles. Son herbívoros que raspan algas con su aparato masticador de 5 piezas.',
        animales: [
          { nombre: 'Erizo de mar rojo', nombreCientifico: 'Mesocentrotus franciscanus', altura: '19 cm diámetro', peso: '500 g', habitat: 'Costas rocosas del Pacífico Norte', alimentacion: 'Herbívoro — kelp, algas', edadMaxima: 'más de 200 años', comportamiento: 'Gregario. Se desplaza con pies ambulacrales.', curiosidades: ['Uno de los animales más longevos del planeta.','Su aparato masticador se llama "linterna de Aristóteles".','No muestra signos de envejecimiento biológico.'], conservacion: 'Preocupación menor (UICN)', reino:'Animalia', filo:'Echinodermata', clase:'Echinoidea', orden:'Camerodonata', familia:'Strongylocentrotidae', imagen:'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=800&q=80' }
        ]
      },
      {
        name: 'Holoturoideos', icon: '🥒', color: 'bg-green-500',
        imagen: 'https://i1-e.pinimg.com/736x/79/d7/6a/79d76afe7707f47cd723ebf21762d41c.jpg',
        descripcion: 'Los pepinos de mar. Tienen cuerpo alargado y blando, sin espinas visibles. Son detritívoros que filtran el sedimento marino y juegan un papel clave en el reciclaje de nutrientes.',
        animales: [
          { nombre: 'Pepino de mar gigante', nombreCientifico: 'Holothuria fuscogilva', altura: '30–50 cm', peso: '500 g–1.5 kg', habitat: 'Fondos arenosos del Indo-Pacífico', alimentacion: 'Detritívoro — sedimento orgánico', edadMaxima: '5–10 años', comportamiento: 'Lento. Expulsa sus vísceras al sentirse amenazado.', curiosidades: ['Puede regenerar órganos internos completos.','Es el "reciclador" del ecosistema marino.','Su cuerpo puede volverse rígido o líquido.'], conservacion: 'Vulnerable (UICN)', reino:'Animalia', filo:'Echinodermata', clase:'Holothuroidea', orden:'Aspidochirotida', familia:'Holothuriidae', imagen:'https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=800&q=80' }
        ]
      }
    ]
  },

  anelidos: {
    id: 'anelidos', name: 'Anélidos', icon: '🪱', headerIcon: '🪱',
    theme: 'bg-stone-600', pattern: 'bg-zinc-900',
    descripcion: 'Los anélidos son gusanos segmentados. Su cuerpo está dividido en anillos o metámeros repetidos. Habitan en suelos, agua dulce y mar. Son fundamentales para la fertilidad del suelo.',
    imagen: 'https://i.pinimg.com/736x/a1/88/0b/a1880bee2a0e348f6a43ee553d013685.jpg',
    subtypes: [
      {
        name: 'Oligoquetos', icon: '🪱', color: 'bg-orange-200',
        imagen: 'https://i.pinimg.com/736x/4b/2b/df/4b2bdf6a549762a41b376e0838efe5bb.jpg',
        descripcion: 'Las lombrices de tierra. Viven en suelos húmedos y son esenciales para la fertilidad agrícola. Al desplazarse airean y fertilizan el suelo con sus excrementos.',
        animales: [
          { nombre: 'Lombriz gigante de Gippsland', nombreCientifico: 'Megascolides australis', altura: 'hasta 3 m', peso: '200 g', habitat: 'Suelos arcillosos de Victoria, Australia', alimentacion: 'Detritívora — materia orgánica del suelo', edadMaxima: '5 años', comportamiento: 'Subterránea. Produce sonido de gorgoteo audible desde la superficie.', curiosidades: ['La lombriz más grande del mundo.','Tarda hasta 5 años en alcanzar su tamaño.','Su mucus mantiene húmedos sus túneles.'], conservacion: 'Vulnerable (UICN)', reino:'Animalia', filo:'Annelida', clase:'Clitellata', orden:'Opisthopora', familia:'Megascolecidae', imagen:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80' }
        ]
      },
      {
        name: 'Poliquetos', icon: '🐛', color: 'bg-emerald-300',
        imagen: 'https://i1-e.pinimg.com/736x/a0/fe/cc/a0fecc92d1ea74f0436ebcd80bfae70c.jpg',
        descripcion: 'Gusanos marinos con múltiples cerdas o quetas en cada segmento. Son el grupo más diverso de anélidos. Algunos son sedentarios y construyen tubos; otros son depredadores activos.',
        animales: [
          { nombre: 'Gusano de fuego', nombreCientifico: 'Hermodice carunculata', altura: '30 cm', peso: '10–15 g', habitat: 'Arrecifes del Atlántico tropical y Mediterráneo', alimentacion: 'Carnívoro — corales, esponjas, anémonas', edadMaxima: 'desconocida', comportamiento: 'Lento pero agresivo. Sus setas se clavan al tocarlo.', curiosidades: ['Sus setas huecas causan ardor intenso al romperse.','Uno de los pocos depredadores de corales de fuego.','Puede regenerar segmentos dañados.'], conservacion: 'No evaluado (UICN)', reino:'Animalia', filo:'Annelida', clase:'Polychaeta', orden:'Phyllodocida', familia:'Amphinomidae', imagen:'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=800&q=80' }
        ]
      },
      {
        name: 'Hirudíneos', icon: '🩸', color: 'bg-red-800',
        imagen: 'https://i1-e.pinimg.com/1200x/72/98/f6/7298f624802b4ea319b0c96c9eb63ed3.jpg',
        descripcion: 'Las sanguijuelas. Sin cerdas. Tienen una ventosa anterior y otra posterior para anclarse. La mayoría son ectoparásitos que se alimentan de sangre, aunque algunas son depredadoras.',
        animales: [
          { nombre: 'Sanguijuela medicinal', nombreCientifico: 'Hirudo medicinalis', altura: '10–20 cm', peso: '1.5 g', habitat: 'Estanques y ríos limpios de Europa y Asia', alimentacion: 'Hematófaga — sangre de vertebrados', edadMaxima: '20 años', comportamiento: 'Solitaria. Puede pasar meses sin alimentarse.', curiosidades: ['Usada en medicina moderna post-cirugía.','Su saliva contiene el anticoagulante natural más potente.','Tiene 10 estómagos para almacenar sangre.'], conservacion: 'Vulnerable (UICN)', reino:'Animalia', filo:'Annelida', clase:'Clitellata', orden:'Hirudinida', familia:'Hirudinidae', imagen:'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=800&q=80' }
        ]
      }
    ]
  }
};

module.exports = {
  getAll: () => categoriesData,
  getById: (id) => categoriesData[id],
  getSubtype: (categoriaId, subtypeName) => {
    const cat = categoriesData[categoriaId];
    if (!cat) return null;
    return cat.subtypes.find(s => s.name.toLowerCase() === subtypeName.toLowerCase());
  }
};