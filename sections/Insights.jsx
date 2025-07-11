"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const Insights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const packages = [
    {
      id: 1,
      name: "Paquete Básico",
      subtitle: "Perfecto para emprendedores",
      price: "$299",
      duration: "5-7 días",
      color: "from-green-500 to-emerald-500",
      popular: false,
      features: [
        "Landing Page responsiva",
        "Hasta 5 secciones",
        "Formulario de contacto",
        "Optimización SEO básica",
        "2 revisiones incluidas",
        "Hosting gratis 3 meses",
      ],
    },
    {
      id: 2,
      name: "Paquete Profesional",
      subtitle: "Ideal para pequeñas empresas",
      price: "$599",
      duration: "10-14 días",
      color: "from-cyan-500 to-blue-500",
      popular: true,
      features: [
        "Sitio web completo (hasta 8 páginas)",
        "Panel de administración",
        "Blog integrado",
        "Optimización SEO avanzada",
        "Integración redes sociales",
        "Analytics configurado",
        "5 revisiones incluidas",
        "Hosting gratis 6 meses",
      ],
    },
    {
      id: 3,
      name: "Paquete Premium",
      subtitle: "Para proyectos complejos",
      price: "$999",
      duration: "21-30 días",
      color: "from-purple-500 to-pink-500",
      popular: false,
      features: [
        "E-commerce completo",
        "Gestión de productos",
        "Pasarela de pagos",
        "Sistema de usuarios",
        "Dashboard administrativo",
        "SEO y Marketing digital",
        "Revisiones ilimitadas",
        "Hosting gratis 1 año",
        "Soporte técnico 3 meses",
      ],
    },
  ];

  return (
    <section
      id="work"
      className={`${styles.paddings} relative bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden`}
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Grid de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Efectos de neón intermitente */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [-20, -40, -20],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col relative z-10`}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            variants={itemVariants}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Nuestros Paquetes
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Planes y
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Precios
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Elige el paquete perfecto para tu proyecto. Desde landing pages
            hasta e-commerce completos,
            <span className="text-cyan-400 font-semibold">
              {" "}
              tenemos la solución ideal
            </span>{" "}
            para hacer realidad tu visión digital.
          </motion.p>
        </motion.div>

        {/* Paquetes de servicios - Versión compacta */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`
                relative group
                ${pkg.popular ? "md:scale-105 z-10" : ""}
                transition-all duration-500
              `}
              variants={itemVariants}
              whileHover={{ y: -5, scale: pkg.popular ? 1.05 : 1.02 }}
            >
              {/* Badge "Más Popular" */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Más Popular
                  </span>
                </div>
              )}

              <div
                className={`
                relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl 
                border ${
                  pkg.popular ? "border-cyan-400/50" : "border-slate-700/50"
                } 
                rounded-xl p-5 shadow-xl 
                hover:shadow-cyan-500/20 transition-all duration-500
                group-hover:border-cyan-400/40
              `}
              >
                {/* Efecto de fondo */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.color}/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Header del paquete */}
                <div className="relative z-10 text-center mb-5">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-4">{pkg.subtitle}</p>

                  {/* Precio */}
                  <div className="mb-3">
                    <span
                      className={`text-2xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-gray-400 text-sm ml-1">USD</span>
                  </div>

                  {/* Duración */}
                  <div
                    className={`inline-flex items-center px-2 py-1 rounded-full bg-gradient-to-r ${pkg.color}/20 border border-current/30`}
                  >
                    <span
                      className={`text-xs font-medium bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}
                    >
                      🚀 {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Lista de características */}
                <div className="relative z-10 mb-5">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * featureIndex }}
                      >
                        <div
                          className={`w-3 h-3 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <svg
                            className="w-2 h-2 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-xs leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Botón CTA */}
                <div className="relative z-10">
                  <motion.button
                    className={`
                      w-full py-3 px-4 rounded-lg font-semibold text-white text-sm
                      bg-gradient-to-r ${pkg.color}
                      shadow-lg hover:shadow-xl transition-all duration-300
                      hover:scale-105 transform
                    `}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Elegir Plan
                  </motion.button>
                </div>

                {/* Decoración */}
                <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Garantía y beneficios adicionales - Versión compacta */}
        <motion.div
          className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-xl border border-slate-700/50 mb-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mb-3 border border-green-400/30">
                <span className="text-lg">✅</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">
                Garantía 30 días
              </h4>
              <p className="text-gray-400 text-xs">
                Si no estás satisfecho, te devolvemos tu dinero
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-3 border border-blue-400/30">
                <span className="text-lg">🚀</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">
                Entrega rápida
              </h4>
              <p className="text-gray-400 text-xs">
                Cumplimos con los tiempos prometidos
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-3 border border-purple-400/30">
                <span className="text-lg">💬</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">
                Soporte incluido
              </h4>
              <p className="text-gray-400 text-xs">
                Asistencia técnica durante todo el proceso
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center" variants={itemVariants}>
          <motion.div
            className="inline-flex flex-col sm:flex-row gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Consulta Gratuita
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-cyan-400/50 rounded-xl text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Comparar Paquetes
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Insights;

// CSS para animación personalizada (añadir a tu globals.css si no lo tienes)
/*
@keyframes spin-slow {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
*/
