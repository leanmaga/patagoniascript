export const projects = [
  {
    id: "world-1",
    imgUrl: "/prestamosapp.png",
    title: "PréstamosApp",
    subtitle:
      "Plataforma Full-Stack para gestión de préstamos, clientes y cálculo de estadísticas financieras (TIR y Mora).",
    desafio_tecnico:
      "Implementación de una arquitectura escalable para datos sensibles de clientes y cálculos financieros complejos.",
    solucion_clave:
      "Next.js (SSR), Supabase para persistencia de datos y autenticación (CRUD).",
    tags: ["Next.js", "Tailwind", "Finanzas", "Supabase", "Full-Stack"],
    url: "https://creditapp-seven.vercel.app/",
  },
  {
    id: "world-2",
    imgUrl: "/indumentariasoffy.png",
    title: "IndumentariaSoffy",
    subtitle:
      "Tienda online de moda femenina con flujo de compra completo, pasarela de pago y gestión de inventario.",
    desafio_tecnico:
      "Desarrollo de un checkout robusto y la integración de una pasarela de pago para una experiencia de usuario fluida.",
    solucion_clave:
      "React, estado gestionado con Context, integración en modo Sandbox de Mercado Pago y optimización de filtros de producto.",
    tags: ["E-commerce", "React", "Estilo", "Mercado Pago API", "Inventario"],
    url: "https://indumentariasoffy.vercel.app/",
  },
  {
    id: "world-3",
    imgUrl: "/solcampestre.png",
    title: "Sol Campestre (Real World E-commerce)",
    subtitle:
      "E-commerce B2C con gestión de stock, sincronización de pedidos y pasarela de pago real, enfocado en productos rurales.",
    desafio_tecnico:
      "Implementación de un flujo de E-commerce B2C con gestión de stock sincronizada y pago con Mercado Pago a través de la API.",
    solucion_clave:
      "Plataforma de E-commerce con integración completa de la API de Mercado Pago y optimización del tiempo de carga inicial a 1.8s.",
    tags: [
      "E-commerce",
      "Comercio Electronico",
      "Mercado Pago API",
      "Métricas",
      "Producción",
    ],
    url: "https://www.solcampestre.com/",
  },
  {
    id: "world-4",
    imgUrl: "/invitacion.png",
    title: "Invitaciones virtuales",
    subtitle:
      "Invitaciones digitales animadas, interactivas y con funcionalidad de Confirmación de Asistencia (RSVP).",
    desafio_tecnico:
      "Crear una experiencia de usuario interactiva y gestionar las respuestas de los invitados de manera eficiente.",
    solucion_clave:
      "Next js, CSS y JavaScript para animaciones, galeria de fotos en Cloudinary y una integración simple con Supabase para registrar las respuestas de RSVP.",
    tags: [
      "Eventos",
      "Next js",
      "Tailwind",
      "Interactividad",
      "Supabase",
      "RSVP",
      "Cloudinary",
    ],
    url: "https://invitacion-zahira.vercel.app/",
  },
  {
    id: "world-5",
    imgUrl: "/balanceapp.png",
    title: "BalanceApp",
    subtitle:
      "Herramienta para organizar ingresos y egresos personales, incluyendo lógica de presupuestos y visualización de balances.",
    desafio_tecnico:
      "Implementar lógica de presupuestos mensuales y representar datos financieros de forma clara y accesible.",
    solucion_clave:
      "Next.js, uso de librería de gráficos (Recharts/Nivo) y una función de Presupuestos que calcula el gasto restante por categoría.",
    tags: [
      "Finanzas",
      "Visualización",
      "Next.js",
      "Recharts",
      "Lógica de Negocio",
    ],
    url: "https://mybalancesapp.vercel.app/",
  },
  {
    id: "world-6",
    imgUrl: "/globdeco.png",
    title: "Glob Deco",
    subtitle:
      "Landing Page de servicios de decoración, enfocada en la optimización de rendimiento y galería filtrable.",
    desafio_tecnico:
      "Asegurar un rendimiento (Core Web Vitals) óptimo a pesar de incluir una galería de imágenes de alta calidad.",
    solucion_clave:
      "Optimización de imágenes (WebP), galería filtrable por tipo de evento (JavaScript) y medición de métricas LCP/CLS.",
    tags: [
      "Eventos",
      "Decoración",
      "Landing Page",
      "Optimización Web",
      "UX/UI",
    ],
    url: "https://glob-deco.vercel.app/",
  },
  {
    id: "world-7",
    imgUrl: "/stitch.jpg",
    title: "Artesanías Stitch",
    subtitle:
      "Catálogo interactivo con personalizador de productos y sistema de cotización directo a backend.",
    desafio_tecnico:
      "Convertir una página estática en una herramienta de marketing que capture clientes potenciales (leads).",
    solucion_clave:
      "Landing Page optimizada, uso de React para un 'Personalizador de Producto' simple y formulario integrado a Formspree/Lambda.",
    tags: [
      "Artesanías",
      "Landing Page",
      "Creatividad",
      "UX/UI",
      "Formspree",
      "Three.js",
    ],
    url: "#", // Agregá la URL real si la tenés
  },
];

export const startingFeatures = [
  {
    imgUrl: "/next-js.svg",
    title: "Next.js",
    subtitle:
      "Aceleramos el tiempo de carga y mejoramos el SEO mediante Server-Side Rendering (SSR) y Static Generation, ofreciendo la mejor performance.",
  },
  {
    imgUrl: "/js.svg",
    title: "JavaScript (Moderno)",
    subtitle:
      "Añadimos interactividad de vanguardia y garantizamos la funcionalidad dinámica con las últimas especificaciones de ECMAScript.",
  },
  {
    imgUrl: "/firebase.svg",
    title: "Firebase/Firestore",
    subtitle:
      "Implementamos soluciones de backend y base de datos NoSQL en tiempo real para una escalabilidad rápida y autenticación robusta (BaaS).",
  },
];

export const newFeatures = [
  {
    imgUrl: "/tailwind.svg",
    title: "Diseño con Tailwind CSS",
    subtitle:
      "Creamos interfaces elegantes, modernas y totalmente responsivas a través de un enfoque de utilidad-first, asegurando una experiencia visual premium en cualquier dispositivo.",
  },
  {
    imgUrl: "/mailchimp.svg",
    title: "Integración de Marketing (Ej. MailChimp)",
    subtitle:
      "Conectamos tus aplicaciones con herramientas de email marketing para automatizar campañas, capturar leads y fomentar la retención de clientes de manera efectiva.",
  },
];
