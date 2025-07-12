// components/UnifiedBackground.jsx
"use client";

import { motion } from "framer-motion";

const UnifiedBackground = ({ children }) => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-black to-slate-900 min-h-screen">
      {/* Efectos de fondo unificados */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Círculos de neón con pulse */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow" />

        {/* Efectos adicionales para más profundidad */}
        <div
          className="absolute top-3/4 left-1/8 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2000ms" }}
        />
        <div
          className="absolute top-1/8 right-1/3 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3000ms" }}
        />
      </div>

      {/* Grid de fondo sutil */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Efectos de partículas mejorados */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Partículas que parpadean */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
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
              duration: 3 + Math.random() * 2, // Duración variable
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Líneas de neón que aparecen y desaparecen */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            style={{
              left: "0%",
              right: "0%",
              top: `${15 + i * 15}%`,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4 + Math.random(),
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Partículas flotantes más grandes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`large-particle-${i}`}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default UnifiedBackground;
