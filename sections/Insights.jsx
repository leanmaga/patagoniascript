"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Insights = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Índice de la tarjeta activa (centro)

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

  const rotateToCard = (index) => {
    setActiveIndex(index);
  };

  const getCardStyle = (index) => {
    const isActive = index === activeIndex;
    const isLeft =
      index === (activeIndex - 1 + packages.length) % packages.length;
    const isRight = index === (activeIndex + 1) % packages.length;

    if (isActive) {
      return {
        // Centro - Tarjeta principal
        transform: "translateX(-50%) scale(1)",
        zIndex: 20,
        opacity: 1,
        left: "50%",
        filter: "brightness(1)",
      };
    } else if (isLeft) {
      return {
        // Izquierda - Responsive positioning
        transform: "translateX(-50%) scale(0.75) rotateY(20deg)",
        zIndex: 10,
        opacity: 0.6,
        left: "clamp(25%, 30%, 32%)", // Más centrado
        filter: "brightness(0.7)",
      };
    } else if (isRight) {
      return {
        // Derecha - Responsive positioning
        transform: "translateX(-50%) scale(0.75) rotateY(-20deg)",
        zIndex: 10,
        opacity: 0.6,
        left: "clamp(68%, 70%, 75%)", // Más centrado
        filter: "brightness(0.7)",
      };
    } else {
      return {
        // Ocultas
        transform: "translateX(-50%) scale(0.5)",
        zIndex: 1,
        opacity: 0,
        left: "50%",
        filter: "brightness(0.5)",
      };
    }
  };

  return (
    <section
      id="work"
      className="relative bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Grid de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem]" />
      </div>

      {/* Efectos de neón intermitente */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
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
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-7xl mx-auto flex flex-col relative z-10"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <div className="w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-xs sm:text-sm">
              Nuestros Paquetes
            </span>
            <div className="w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
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
            className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4"
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

        {/* Carousel de tarjetas con rotación 3D */}
        <motion.div
          className="relative w-full max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12"
          style={{
            perspective: "1200px",
            height: "550px", // Altura fija
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variants={containerVariants}
        >
          {packages.map((pkg, index) => {
            const cardStyle = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={pkg.id}
                className="absolute cursor-pointer"
                style={{
                  ...cardStyle,
                  transform: `${cardStyle.transform}`,
                  transformOrigin: "center center",
                  transformStyle: "preserve-3d",
                  transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  width: "clamp(280px, 30vw, 380px)", // Responsive width
                  height: "clamp(450px, 45vh, 500px)", // Responsive height
                  top: "50%",
                  marginTop: "clamp(-225px, -22.5vh, -250px)", // Centrado vertical perfecto
                }}
                onClick={() => !isActive && rotateToCard(index)}
                variants={itemVariants}
                whileHover={
                  !isActive
                    ? {
                        scale: isActive ? 1 : 0.8,
                        filter: "brightness(0.9)",
                      }
                    : {}
                }
              >
                {/* Badge "Más Popular" */}
                {pkg.popular && isActive && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Más Popular
                    </span>
                  </motion.div>
                )}

                <div
                  className={`
                  relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl 
                  border ${
                    pkg.popular && isActive
                      ? "border-cyan-400/60"
                      : "border-slate-700/50"
                  } 
                  rounded-xl shadow-2xl 
                  transition-all duration-700 flex flex-col overflow-hidden
                  ${
                    isActive
                      ? "hover:shadow-cyan-500/30 hover:border-cyan-400/70"
                      : "hover:border-slate-600/60"
                  }
                `}
                  style={{
                    padding: isActive
                      ? "clamp(20px, 2.5vw, 32px)"
                      : "clamp(16px, 2vw, 24px)",
                  }}
                >
                  {/* Efecto de fondo */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      pkg.color
                    }/10 rounded-xl opacity-0 transition-opacity duration-500 ${
                      isActive ? "group-hover:opacity-100" : ""
                    }`}
                  />

                  {/* Header del paquete */}
                  <div className="relative z-10 text-center mb-4 flex-shrink-0">
                    <h3
                      className={`${
                        isActive
                          ? "text-lg sm:text-xl lg:text-2xl"
                          : "text-base sm:text-lg"
                      } font-bold text-white mb-2 transition-all duration-300`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-gray-400 ${
                        isActive ? "group-hover:text-white" : ""
                      } ${
                        isActive ? "text-sm" : "text-xs"
                      } mb-3 transition-colors duration-300`}
                    >
                      {pkg.subtitle}
                    </p>

                    {/* Precio */}
                    <div className="mb-3">
                      <span
                        className={`${
                          isActive
                            ? "text-2xl sm:text-3xl lg:text-4xl"
                            : "text-xl sm:text-2xl"
                        } font-bold bg-gradient-to-r ${
                          pkg.color
                        } bg-clip-text text-transparent transition-all duration-300`}
                      >
                        {pkg.price}
                      </span>
                      <span
                        className={`text-gray-400 ${
                          isActive ? "text-sm" : "text-xs"
                        } ml-1`}
                      >
                        USD
                      </span>
                    </div>
                  </div>

                  {/* Lista de características */}
                  <div className="relative z-10 flex-1 mb-4 overflow-y-auto invisible-scrollbar">
                    <ul className={`space-y-${isActive ? "2" : "1"} pr-2`}>
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: isActive ? 0.1 + 0.05 * featureIndex : 0,
                          }}
                        >
                          <div
                            className={`${
                              isActive ? "w-3 h-3" : "w-2.5 h-2.5"
                            } rounded-full bg-gradient-to-r ${
                              pkg.color
                            } flex items-center justify-center flex-shrink-0 mt-1`}
                          >
                            <svg
                              className={`${
                                isActive ? "w-2 h-2" : "w-1.5 h-1.5"
                              } text-white`}
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
                          <span
                            className={`text-gray-300 ${
                              isActive ? "text-xs sm:text-sm" : "text-xs"
                            } leading-relaxed transition-all duration-300`}
                          >
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Botón CTA */}
                  <div className="relative z-10 mt-auto flex-shrink-0">
                    <motion.button
                      className={`
                        w-full rounded-lg font-semibold text-white
                        bg-gradient-to-r ${pkg.color}
                        shadow-lg transition-all duration-300
                        ${
                          isActive
                            ? "py-3 px-4 text-sm sm:text-base hover:shadow-xl hover:scale-105"
                            : "py-2 px-3 text-xs opacity-75"
                        }
                        transform
                      `}
                      whileHover={isActive ? { y: -2 } : {}}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isActive ? "Elegir Plan" : "Ver Plan"}
                    </motion.button>
                  </div>

                  {/* Decoración */}
                  <div
                    className={`absolute top-3 right-3 ${
                      isActive ? "w-8 h-8" : "w-6 h-6"
                    } bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-lg transition-transform duration-500 ${
                      isActive ? "group-hover:scale-150" : "scale-75"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Indicadores de navegación */}
        <motion.div
          className="flex justify-center gap-3 mb-6"
          variants={containerVariants}
        >
          {packages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => rotateToCard(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${
                  index === activeIndex
                    ? "bg-cyan-400 scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
                }
              `}
              whileHover={{ scale: index === activeIndex ? 1.25 : 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        /* Scrollbar Invisible/Sutil */
        :global(.invisible-scrollbar) {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }

        :global(.invisible-scrollbar::-webkit-scrollbar) {
          width: 4px;
        }

        :global(.invisible-scrollbar::-webkit-scrollbar-track) {
          background: transparent;
        }

        :global(.invisible-scrollbar::-webkit-scrollbar-thumb) {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        :global(.invisible-scrollbar::-webkit-scrollbar-thumb:hover) {
          background: rgba(6, 182, 212, 0.3);
        }

        :global(.invisible-scrollbar::-webkit-scrollbar-corner) {
          background: transparent;
        }

        /* Alternativa para Firefox */
        @supports (scrollbar-width: none) {
          :global(.invisible-scrollbar) {
            scrollbar-width: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Insights;
