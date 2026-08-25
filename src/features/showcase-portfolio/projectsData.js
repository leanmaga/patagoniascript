export const projects = [
  {
    id: "world-1",
    imgUrl: "/haize.png",
    title: "Haize — Men's Fashion Store",
    subtitle:
      "E-commerce de indumentaria masculina con gestión de variantes, autenticación de usuarios y pasarela de pago en producción.",
    desafio_tecnico:
      "Sincronización de autenticación entre Clerk y MongoDB, manejo de variantes de producto (talle/color) y separación de entornos staging/producción.",
    solucion_clave:
      "Next.js App Router, Zustand para carrito persistente, MongoDB + Cloudinary para catálogo, Clerk con webhook sync y Mercado Pago API en producción.",
    tags: [
      "E-commerce",
      "Next.js",
      "MongoDB",
      "Mercado Pago API",
      "Zustand",
      "Clerk",
      "Cloudinary",
    ],
    url: "https://haize.com.ar/",
  },
  {
    id: "world-2",
    imgUrl: "/prestamosapp.png",
    title: "PréstamosApp",
    subtitle:
      "Plataforma Full-Stack para gestión de préstamos, clientes y cálculo de estadísticas financieras (TIR y Mora).",
    desafio_tecnico:
      "Arquitectura escalable para datos sensibles de clientes y cálculos financieros complejos en tiempo real.",
    solucion_clave:
      "Next.js con SSR para carga optimizada, Supabase como capa de persistencia y autenticación, y lógica de negocio centralizada para cálculo de indicadores financieros.",
    tags: ["Next.js", "Tailwind", "Finanzas", "Supabase", "Full-Stack"],
    url: "https://creditapp-seven.vercel.app/",
  },
  {
    id: "world-3",
    imgUrl: "/indumentariasoffy.png",
    title: "IndumentariaSoffy",
    subtitle:
      "Tienda online de moda femenina con flujo de compra completo, pasarela de pago y gestión de inventario.",
    desafio_tecnico:
      "Checkout robusto con integración de pasarela de pago y experiencia de usuario fluida en el flujo de compra.",
    solucion_clave:
      "React con Context API para estado global, integración en Sandbox de Mercado Pago y filtros de producto optimizados para conversión.",
    tags: ["E-commerce", "React", "Estilo", "Mercado Pago API", "Inventario"],
    url: "https://indumentariasoffy.vercel.app/",
  },
  {
    id: "world-4",
    imgUrl: "/solcampestre.png",
    title: "Sol Campestre",
    subtitle:
      "E-commerce B2C con gestión de stock, sincronización de pedidos y pago real integrado, orientado a productos rurales.",
    desafio_tecnico:
      "Flujo B2C con stock sincronizado, pago con Mercado Pago en producción y tiempo de carga inicial optimizado.",
    solucion_clave:
      "Integración completa de la API de Mercado Pago, optimización de performance hasta 1.8s de carga inicial y gestión de pedidos en tiempo real.",
    tags: [
      "E-commerce",
      "Mercado Pago API",
      "Métricas",
      "Producción",
      "Performance",
    ],
    url: "https://www.solcampestre.com/",
  },
  {
    id: "world-5",
    imgUrl: "/invitacion.png",
    title: "Invitaciones Virtuales",
    subtitle:
      "Invitaciones digitales animadas e interactivas con confirmación de asistencia (RSVP) en tiempo real.",
    desafio_tecnico:
      "Experiencia de usuario interactiva con animaciones fluidas y gestión eficiente de respuestas de invitados.",
    solucion_clave:
      "Next.js, animaciones con CSS/JS, galería de fotos en Cloudinary y Supabase para registrar respuestas RSVP en tiempo real.",
    tags: [
      "Eventos",
      "Next.js",
      "Tailwind",
      "Interactividad",
      "Supabase",
      "RSVP",
      "Cloudinary",
    ],
    url: "https://invitacion-zahira.vercel.app/",
  },
  {
    id: "world-6",
    imgUrl: "/balanceapp.png",
    title: "BalanceApp",
    subtitle:
      "Herramienta de finanzas personales para organizar ingresos, egresos y visualizar presupuestos por categoría.",
    desafio_tecnico:
      "Lógica de presupuestos mensuales y representación visual de datos financieros de forma clara y accesible.",
    solucion_clave:
      "Next.js con Recharts/Nivo para gráficos interactivos y motor de presupuestos que calcula el gasto restante por categoría en tiempo real.",
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
    id: "world-7",
    imgUrl: "/globdeco.png",
    title: "Glob Deco",
    subtitle:
      "Landing page de servicios de decoración con galería filtrable y performance optimizada para Core Web Vitals.",
    desafio_tecnico:
      "Mantener un rendimiento óptimo (Core Web Vitals) con una galería de imágenes de alta calidad.",
    solucion_clave:
      "Optimización de imágenes en WebP, galería filtrable por tipo de evento en JavaScript puro y medición activa de métricas LCP/CLS.",
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
    id: "world-8",
    imgUrl: "/stitch.jpg",
    title: "Artesanías Stitch",
    subtitle:
      "Catálogo interactivo con personalizador de productos y sistema de cotización directo desde la plataforma.",
    desafio_tecnico:
      "Convertir una página estática en una herramienta de marketing que capture leads de manera efectiva.",
    solucion_clave:
      "Landing Page optimizada con React para el personalizador de producto e integración de formulario a Formspree/Lambda para captura de consultas.",
    tags: [
      "Artesanías",
      "Landing Page",
      "Creatividad",
      "UX/UI",
      "Formspree",
      "Three.js",
    ],
    url: "#",
  },
];
