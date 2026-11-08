export type Note = {
  slug: string;
  tag: "Herramientas" | "Notas" | "Bitácora";
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: string[];
};

export const notes: Note[] = [
  {
    slug: "herramientas-que-uso-a-diario",
    tag: "Herramientas",
    title: "Las pocas herramientas que de verdad uso cada día",
    excerpt:
      "Probé decenas de apps de productividad. Me quedé con cuatro. Esta es la lista honesta, sin enlaces de afiliado ni promesas mágicas.",
    date: "2 nov 2026",
    readingTime: "5 min",
    body: [
      "Durante meses caí en la trampa de pensar que la herramienta correcta iba a resolver mi falta de constancia. Instalaba, configuraba, me emocionaba dos días y volvía al caos. El problema nunca fue la app.",
      "Hoy uso muy poco: un editor de notas sencillo para pensar, un calendario para proteger mis horas de trabajo profundo, una lista de tareas que reviso cada mañana y una carpeta compartida donde vive todo lo que publico.",
      "Lo que aprendí es que menos herramientas significa menos decisiones. Y menos decisiones significa más energía para lo que importa: crear, publicar y aprender del resultado.",
      "No te digo que copies mi lista. Te sugiero algo más incómodo: elimina la mitad de lo que tienes instalado y observa qué echas de menos de verdad.",
    ],
  },
  {
    slug: "aprender-en-publico",
    tag: "Notas",
    title: "Aprender en público da miedo, y por eso lo hago",
    excerpt:
      "Publicar algo que todavía no domino es incómodo. Pero cada vez que lo hago, alguien me corrige, me enseña o me dice que le sirvió.",
    date: "24 oct 2026",
    readingTime: "4 min",
    body: [
      "Hay una voz que me dice que espere. Que todavía no sé lo suficiente, que otros lo explican mejor, que no tengo autoridad para hablar de esto. La conozco bien.",
      "Decidí escribir de todas formas. No como experto, sino como alguien que va dos pasos por delante de quien empieza hoy, y muchos pasos por detrás de quien ya llegó.",
      "Aprender en público me obliga a ordenar lo que pienso. Me expone a errores, sí, pero también a conversaciones que nunca habría tenido si me hubiese quedado callado.",
      "Si estás esperando sentirte listo para compartir lo que haces, te cuento un secreto: ese momento no llega. Se construye publicando.",
    ],
  },
  {
    slug: "primer-mes-en-remoto",
    tag: "Bitácora",
    title: "Primer mes trabajando en remoto: lo que nadie me contó",
    excerpt:
      "La libertad de horarios suena increíble hasta que te das cuenta de que nadie va a poner límites por ti. Notas sinceras de las primeras semanas.",
    date: "15 oct 2026",
    readingTime: "6 min",
    body: [
      "La primera semana trabajé más horas que nunca y terminé con la sensación de no haber hecho nada. Saltaba de una tarea a otra, contestaba mensajes al instante y comía frente a la pantalla.",
      "La segunda semana probé lo contrario: horarios fijos, una alarma para parar y una caminata obligatoria después de almorzar. Mejoró todo, incluso lo que produje.",
      "Lo que nadie me contó es que trabajar en remoto es, sobre todo, un ejercicio de autoconocimiento. Tienes que descubrir a qué hora piensas mejor, qué te distrae y cuándo necesitas hablar con alguien.",
      "Sigo ajustando. Esta bitácora es precisamente para eso: dejar registro de lo que funciona, de lo que no, y de lo que todavía no entiendo.",
    ],
  },
];

export type Project = {
  name: string;
  status: "En curso" | "En pausa" | "Terminado";
  year: string;
  description: string;
};

export const projects: Project[] = [
  {
    name: "Esta bitácora",
    status: "En curso",
    year: "2026",
    description:
      "Un espacio propio para escribir cada semana sobre lo que pruebo en digital. Sin algoritmo de por medio, solo el proceso.",
  },
  {
    name: "Plantillas para creadores remotos",
    status: "En curso",
    year: "2026",
    description:
      "Un pequeño sistema de notas y planificación que uso a diario y que estoy puliendo para compartirlo gratis.",
  },
  {
    name: "Reto de 30 días publicando",
    status: "Terminado",
    year: "2026",
    description:
      "Publiqué algo cada día durante un mes. Salieron piezas buenas, otras olvidables y muchas lecciones sobre constancia.",
  },
  {
    name: "Newsletter quincenal",
    status: "En pausa",
    year: "2026",
    description:
      "Una carta corta cada dos semanas con lo mejor que encontré. La pausé para volver con algo más cuidado.",
  },
];

export const contactEmail = "hola@juaxtianmoar.com";
