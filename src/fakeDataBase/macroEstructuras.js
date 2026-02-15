export const macroEstructuras = [
    {
     Construccion: 'Hospital',
     Modificadores: '+x energía máxima por nivel del edificio (5 ➤ 10 ➤ 20 ➤ 35 ➤ 50)',
    },
    {
     Construccion: '',
     Modificadores: '+1% de probabilidad aumentada de recibir botiquín al subir de nivel la cuenta.',
    },
    {
     Construccion: 'Zona Industrial',
     Modificadores: '+5% de producción de fábrica por nivel del edificio.',
    },
    {
     Construccion: '',
     Modificadores: '–10% de la contaminación actual por nivel del edificio.',
    },
    {
     Construccion: 'Campos de Producción',
     Modificadores: '+5% de producción de materias primas por nivel del edificio.',
    },
    {
     Construccion: '',
     Modificadores: '-1% de oro necesario para que aparezca un NPC (cada nivel reduce el oro necesario en 1%).',
    },
    {
     Construccion: 'Base Militar',
     Modificadores: 'En nivel 1: +3% de bonificación de daño a la defensa de la región',
    },
    {
     Construccion: '',
     Modificadores: '+3% de bonificación de ataque al atacar regiones fronterizas',
    },
    {
     Construccion: '',
     Modificadores: 'En nivel 2: +5% de bonificación de precisión al defender la región',
    },
    {
     Construccion: '',
     Modificadores: '+3% de bonificación de precisión al atacar regiones fronterizas',
    },
    {
     Construccion: '',
     Modificadores: 'En nivel 3: +5% de producción de armas en empresas ubicadas en la región',
    },
    {
     Construccion: '',
     Modificadores: 'En nivel 4: Elimina la penalización de -10% por falta de conexión con la capital',
    },
    {
     Construccion: '',
     Modificadores: '+3% de bonificación de ataque al atacar regiones fronterizas (se acumula con la bonificación del nivel 1)',
    },
    {
     Construccion: '',
     Modificadores: 'En nivel 5: Permite el lanzamiento de bomba atómica (reduce 1 nivel de 2 edificios aleatorios en la región objetivo) → Costo de la bomba atómica: 30 g + 800 petróleo + 300 titanio + 200 hierro + 48 h desde la creación hasta que esté lista',
    },
];

export const costeYBeneficios = [
    {nivel: 1,
     'Puntos Progreso': 600,
     'Regalo Top Constructores': 'Oro 01, Banco 3'
    },
    {nivel: 2,
     'Puntos Progreso': 15000,
     'Regalo Top Constructores': 'Oro 03, Banco 3'
    },
    {nivel: 3,
     'Puntos Progreso': 27000,
     'Regalo Top Constructores': 'Oro 06, Banco 6'
    },
    {nivel: 4,
     'Puntos Progreso': 53000,
     'Regalo Top Constructores': 'Oro 12, Banco 6'
    },
    {nivel: 5,
     'Puntos Progreso': 75000,
     'Regalo Top Constructores': 'Oro 24, Banco 9'
    },
]

export const tablaAportes = [
    {Tipo: 'Hierro',
     Aporte : '0.5'
    },
    {Tipo: 'Trigo',
     Aporte : '0.5'
    },
    {Tipo: 'Titanio',
     Aporte : '0.5'
    },
    {Tipo: 'Petroleo',
     Aporte : '0.5'
    },
    {Tipo: 'Rifles',
     Aporte : '2 ➤ 4 ➤ 06 ➤ 08 ➤ 10'
    },
    {Tipo: 'Arepas',
     Aporte : '3 ➤ 6 ➤ 09 ➤ 12 ➤ 15'
    },
    {Tipo: 'Aviones',
     Aporte : '4 ➤ 8 ➤ 12 ➤ 16 ➤ 20'
    },
    {Tipo: 'Boletos',
     Aporte : '4 ➤ 8 ➤ 12 ➤ 16 ➤ 20'
    },
]

export const rangosConstruccion = [
  {
    Rango: 1,
    Titulo: "Worker             ",
    'Aporte Total': 0,
    Multiplicador: 1.0
  },
  {
    Rango: 2,
    Titulo: "Mason             ",
    'Aporte Total': 9000,
    Multiplicador: 1.1
  },
  {
    Rango: 3,
    Titulo: "Ironworker             ",
    'Aporte Total': 25000,
    Multiplicador: 1.2
  },
  {
    Rango: 4,
    Titulo: "Equipement Operator             ",
    'Aporte Total': 55000,
    Multiplicador: 1.3
  },
  {
    Rango: 5,
    Titulo: "Surveyor             ",
    'Aporte Total': 110000,
    Multiplicador: 1.4
  },
  {
    Rango: 6,
    Titulo: "Engineer             ",
    'Aporte Total': 250000,
    Multiplicador: 1.5
  },
  {
    Rango: 7,
    Titulo: "Safety Manager",
    'Aporte Total': 500000,
    Multiplicador: 1.6
  },
  {
    Rango: 8,
    Titulo: "Superintendent             ",
    'Aporte Total': 900000,
    Multiplicador: 1.7
  },
  {
    Rango: 9,
    Titulo: "Construction Manager",
    'Aporte Total': 1300000,
    Multiplicador: 1.8
  },
  {
    Rango: 10,
    Titulo: "Inspector             ",
    'Aporte Total': 2000000,
    Multiplicador: 1.9
  },
  {
    Rango: 11,
    Titulo: "Architect             ",
    'Aporte Total': 3000000,
    Multiplicador: 2.0
  }
]
