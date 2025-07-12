"use client";

import React from "react";

const Feedback = () => {
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

  // Función para abrir LinkedIn
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/leandromagallanes/", "_blank");
  };

  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Testimonios
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Lo Que Dicen
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Nuestros Clientes
            </span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
          {/* Decoración */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl" />
          <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 text-4xl md:text-6xl text-cyan-400/20 font-serif">
            "
          </div>
          <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-4 text-4xl md:text-6xl text-cyan-400/20 font-serif">
            "
          </div>

          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 relative z-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
              <span className="text-cyan-400 font-bold text-base md:text-lg">
                AS
              </span>
            </div>
            <div>
              <h4 className="font-bold text-lg md:text-xl text-white hover:text-cyan-400 transition-colors duration-300">
                <a
                  href="https://leanmaga.github.io/Artesanias-Stitch/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  Artesanias Stitch
                </a>
              </h4>
              <p className="text-cyan-300 text-sm">Cliente PYME</p>
            </div>
          </div>

          <div className="flex items-center gap-1 mb-4 md:mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg md:text-xl">
                ⭐
              </span>
            ))}
            <span className="text-gray-300 text-sm ml-2">5.0 / 5.0</span>
          </div>

          <blockquote className="text-gray-300 leading-relaxed text-sm md:text-lg relative z-10">
            "Contratar a PatagoniaScript fue una decisión acertada. Su equipo
            entendió perfectamente mis necesidades como PYME. La landing page
            que crearon fue{" "}
            <span className="text-cyan-400 font-semibold">
              precisa, estéticamente agradable
            </span>{" "}
            y cumplió con todos mis requisitos técnicos. La comunicación fue
            fluida, y aprecio la{" "}
            <span className="text-cyan-400 font-semibold">
              transparencia y la puntualidad
            </span>{" "}
            en cada fase del proyecto. Recomiendo encarecidamente sus servicios
            a cualquier profesional que busque{" "}
            <span className="text-cyan-400 font-semibold">
              calidad y eficiencia
            </span>
            ."
          </blockquote>

          <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
            {["Landing Page", "E-commerce", "Responsive"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 md:px-3 md:py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA con LinkedIn */}
        <div className="text-center mt-12 md:mt-16">
          <button
            onClick={openLinkedIn}
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center gap-2 md:gap-3 mx-auto text-sm md:text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="hidden sm:inline">
              Ver Más Testimonios en LinkedIn
            </span>
            <span className="sm:hidden">Ver en LinkedIn</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
