"use client";

import React, { useState, useEffect } from "react";

const Insights = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Mínima distancia para considerar un swipe válido
  const minSwipeDistance = 50;

  // Número de WhatsApp
  const whatsappNumber = "5491127764823";

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

  // Función para generar el enlace de WhatsApp con mensaje personalizado
  const generateWhatsAppLink = (packageName, price) => {
    const message = `¡Hola! 👋 Estoy interesado en el *${packageName}* (${price}). Me gustaría obtener más información sobre este plan. ¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  // Función para abrir WhatsApp
  const openWhatsApp = (packageName, price) => {
    const whatsappLink = generateWhatsAppLink(packageName, price);
    window.open(whatsappLink, "_blank");
  };

  // Funciones de navegación
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % packages.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  // Funciones para manejar el swipe mejoradas
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart && Math.abs(touchStart - e.targetTouches[0].clientX) > 10) {
      setIsDragging(true);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    // Reset dragging state after a short delay
    setTimeout(() => setIsDragging(false), 100);
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
    <section className="relative overflow-hidden py-20 px-4" id="explore">
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
          className="relative w-full max-w-6xl mx-auto mb-12 select-none"
          style={{
            perspective: "1200px",
            height: "600px",
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Botones de navegación - Solo en desktop */}
          <button
            onClick={goToPrevious}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-30 
                       bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-sm
                       text-white p-2 rounded-full shadow-lg
                       transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100
                       hidden xl:flex items-center justify-center"
            aria-label="Tarjeta anterior"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-30
                       bg-slate-800/60 hover:bg-slate-700/80 backdrop-blur-sm
                       text-white p-2 rounded-full shadow-lg
                       transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100
                       hidden xl:flex items-center justify-center"
            aria-label="Siguiente tarjeta"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

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
                  pointerEvents: isDragging ? "none" : "auto",
                }}
                onClick={() =>
                  !isActive && !isDragging && setActiveIndex(index)
                }
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

                  {/* Botón CTA con WhatsApp */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isActive) {
                        openWhatsApp(pkg.name, pkg.price);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                    className={`
                    w-full rounded-lg font-semibold text-white
                    bg-gradient-to-r ${pkg.color}
                    shadow-lg transition-all duration-300
                    ${
                      isActive
                        ? "py-3 px-4 text-base hover:scale-105 hover:shadow-xl"
                        : "py-2 px-3 text-xs opacity-75"
                    }
                    transform flex items-center justify-center gap-2
                  `}
                  >
                    {isActive && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.403" />
                      </svg>
                    )}
                    {isActive ? "Contactar por WhatsApp" : "Ver Plan"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicadores de navegación */}
        <div className="text-center">
          {/* Indicador de swipe - Solo en móvil/tablet */}
          <div className="mb-4 block xl:hidden">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <span className="animate-pulse">👈</span>
              Desliza para cambiar
              <span className="animate-pulse">👉</span>
            </p>
          </div>

          {/* Indicador de teclado - Solo en desktop */}
          <div className="mb-4 hidden xl:block">
            <p className="text-gray-500 text-xs">
              Usa las flechas del teclado ← → para navegar
            </p>
          </div>

          {/* Puntos indicadores - Funcionan en todos los dispositivos */}
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
                aria-label={`Ir al paquete ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
