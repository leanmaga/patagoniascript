const whatsappNumber = "5491127764823";

const waLink = (packageName, cta, lang) => {
  const message =
    lang === "en"
      ? `Hi! I'm interested in the *${packageName}* plan — "${cta}". Could you share more details? Thanks!`
      : `¡Hola! 👋 Estoy interesado en el plan *${packageName}* — "${cta}". ¿Me podés dar más información? ¡Gracias!`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const basePackagesEs = [
  {
    id: 1,
    name: "Presencia Digital",
    subtitle: "Ideal para emprendedores que arrancan",
    price: "$120.000",
    badge: null,
    color: "from-emerald-500 to-teal-600",
    popular: false,
    pitch: "Tu negocio en internet en menos de 2 semanas.",
    features: [
      "Landing Page profesional (hasta 5 secciones)",
      "Diseño mobile-first y responsive",
      "Formulario de contacto funcional",
      "Optimización de velocidad (Core Web Vitals)",
      "Integración con WhatsApp Business",
      "3 rondas de revisión incluidas",
      "Entrega en Vercel o dominio propio",
    ],
    cta: "Quiero mi sitio web",
  },
  {
    id: 2,
    name: "Pyme Digital",
    subtitle: "Para negocios que quieren vender más",
    price: "$280.000",
    badge: "Más elegido",
    color: "from-blue-500 to-indigo-600",
    popular: true,
    pitch: "Un sistema completo para gestionar y hacer crecer tu negocio.",
    features: [
      "Sitio web o tienda online completa (hasta 8 vistas)",
      "Panel de administración a medida",
      "Integración de base de datos y backend",
      "Pasarela de pago (Mercado Pago)",
      "Analytics y métricas de negocio",
      "5 sprints de desarrollo + QA",
      "Consultoría de estrategia digital (2 hs)",
    ],
    cta: "Quiero hacer crecer mi negocio",
  },
  {
    id: 3,
    name: "Proyecto a Medida",
    subtitle: "Para empresas con requerimientos específicos",
    price: "COTIZAR",
    badge: null,
    color: "from-violet-500 to-purple-700",
    popular: false,
    pitch: "Desarrollamos exactamente lo que tu empresa necesita.",
    features: [
      "E-commerce o plataforma SAAS compleja",
      "Integraciones con ERPs y sistemas externos",
      "Arquitectura escalable y modular",
      "Sistemas de usuarios y roles avanzados",
      "Dashboard con métricas de negocio (BI)",
      "Consultoría de arquitectura de software",
      "Soporte técnico prioritario incluido",
    ],
    cta: "Agendar una consultoría gratis",
  },
];

const basePackagesEn = [
  {
    id: 1,
    name: "Digital Presence",
    subtitle: "Ideal for entrepreneurs getting started",
    price: "$120.000",
    badge: null,
    color: "from-emerald-500 to-teal-600",
    popular: false,
    pitch: "Your business online in under two weeks.",
    features: [
      "Professional landing page (up to 5 sections)",
      "Mobile-first responsive design",
      "Working contact form",
      "Speed optimization (Core Web Vitals)",
      "WhatsApp Business integration",
      "3 revision rounds included",
      "Delivery on Vercel or your own domain",
    ],
    cta: "I want my website",
  },
  {
    id: 2,
    name: "SMB Digital",
    subtitle: "For businesses that want to sell more",
    price: "$280.000",
    badge: "Most popular",
    color: "from-blue-500 to-indigo-600",
    popular: true,
    pitch: "A complete system to manage and grow your business.",
    features: [
      "Full website or online store (up to 8 views)",
      "Custom admin panel",
      "Database and backend integration",
      "Payment gateway (Mercado Pago)",
      "Analytics and business metrics",
      "5 development sprints + QA",
      "Digital strategy consulting (2 hours)",
    ],
    cta: "I want to grow my business",
  },
  {
    id: 3,
    name: "Custom project",
    subtitle: "For companies with specific requirements",
    price: "GET A QUOTE",
    badge: null,
    color: "from-violet-500 to-purple-700",
    popular: false,
    pitch: "We build exactly what your company needs.",
    features: [
      "Complex e-commerce or SaaS platform",
      "Integrations with ERPs and external systems",
      "Scalable modular architecture",
      "Advanced user and role systems",
      "Business metrics dashboard (BI)",
      "Software architecture consulting",
      "Priority technical support included",
    ],
    cta: "Book a free consultation",
  },
];

function attachWa(packages, lang) {
  return packages.map((p) => ({
    ...p,
    waUrl: waLink(p.name, p.cta, lang),
  }));
}

export const plansByLocale = {
  es: attachWa(basePackagesEs, "es"),
  en: attachWa(basePackagesEn, "en"),
};
