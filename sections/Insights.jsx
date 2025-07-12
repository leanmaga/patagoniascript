"use client";

import React, { useState } from "react";

const Insights = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Mínima distancia para considerar un swipe válido
  const minSwipeDistance = 50;

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

  // Funciones para manejar el swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % packages.length);
    } else if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + packages.length) % packages.length);
    }
  };

  const getCardStyle = (index) => {
    const position = index - activeIndex;

    if (position === 0) {
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        zIndex: 20,
        opacity: 1,
      };
    } else if (position === -1) {
      return {
        transform: "translateX(-60%) scale(0.8) rotateY(25deg)",
        zIndex: 10,
        opacity: 0.7,
      };
    } else if (position === 1) {
      return {
        transform: "translateX(60%) scale(0.8) rotateY(-25deg)",
        zIndex: 10,
        opacity: 0.7,
      };
    } else {
      return {
        transform: "translateX(0%) scale(0.6)",
        zIndex: 1,
        opacity: 0,
      };
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden py-16 px-8">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Nuestros Paquetes
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Planes y
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Precios
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Elige el paquete perfecto para tu proyecto. Desde landing pages
            hasta e-commerce completos,
            <span className="text-cyan-400 font-semibold">
              {" "}
              tenemos la solución ideal
            </span>{" "}
            para hacer realidad tu visión digital.
          </p>
        </div>

        {/* Carousel 3D con Swipe */}
        <div
          className="relative w-full max-w-6xl mx-auto mb-12 select-none touch-pan-x"
          style={{
            perspective: "1200px",
            height: "600px",
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Tarjetas */}
          {packages.map((pkg, index) => {
            const isActive = index === activeIndex;
            const cardStyle = getCardStyle(index);

            return (
              <div
                key={pkg.id}
                className="absolute top-1/2 left-1/2 cursor-pointer"
                style={{
                  ...cardStyle,
                  width: "380px",
                  height: "550px",
                  marginLeft: "-190px",
                  marginTop: "-275px",
                  transformOrigin: "center center",
                  transformStyle: "preserve-3d",
                  transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                onClick={() => !isActive && setActiveIndex(index)}
                onTouchStart={(e) => e.stopPropagation()}
              >
                {/* Badge "Más Popular" */}
                {pkg.popular && isActive && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Más Popular
                    </span>
                  </div>
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
                  transition-all duration-700 flex flex-col overflow-hidden p-8
                  ${
                    isActive
                      ? "hover:shadow-cyan-500/30 hover:border-cyan-400/70"
                      : "hover:border-slate-600/60"
                  }
                `}
                >
                  {/* Header del paquete */}
                  <div className="text-center mb-6">
                    <h3
                      className={`${
                        isActive ? "text-2xl" : "text-lg"
                      } font-bold text-white mb-2`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-gray-400 ${
                        isActive ? "text-sm" : "text-xs"
                      } mb-4`}
                    >
                      {pkg.subtitle}
                    </p>
                    <div className="mb-4">
                      <span
                        className={`${
                          isActive ? "text-4xl" : "text-2xl"
                        } font-bold bg-gradient-to-r ${
                          pkg.color
                        } bg-clip-text text-transparent`}
                      >
                        {pkg.price}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">USD</span>
                    </div>
                  </div>

                  {/* Lista de características */}
                  <div className="flex-1 mb-6 overflow-y-auto">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
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
                              isActive ? "text-sm" : "text-xs"
                            } leading-relaxed`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botón CTA */}
                  <button
                    className={`
                    w-full rounded-lg font-semibold text-white
                    bg-gradient-to-r ${pkg.color}
                    shadow-lg transition-all duration-300
                    ${
                      isActive
                        ? "py-3 px-4 text-base hover:scale-105"
                        : "py-2 px-3 text-xs opacity-75"
                    }
                    transform
                  `}
                  >
                    {isActive ? "Elegir Plan" : "Ver Plan"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicadores de navegación */}
        <div className="text-center">
          {/* Indicador de swipe (solo en móvil) */}
          <div className="mb-4 md:hidden">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <span className="animate-pulse">👈</span>
              Desliza para cambiar
              <span className="animate-pulse">👉</span>
            </p>
          </div>

          {/* Puntos indicadores */}
          <div className="flex justify-center gap-3">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${
                    index === activeIndex
                      ? "bg-cyan-400 scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
