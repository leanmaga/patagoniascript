"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import Image from "next/image";

const World = () => {
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

  return (
    <section
      className={`${styles.paddings} relative bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden min-h-screen`}
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow-world" />
      </div>

      {/* Grid de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Efectos de neón intermitente */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
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
        className={`${styles.innerWidth} mx-auto relative z-10`}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            variants={itemVariants}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Conectividad Global
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Personas en
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              El Mundo
            </span>
          </motion.h2>

          <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              En PatagoniaScript, creemos en el poder de la{" "}
              <span className="text-cyan-400 font-semibold">
                conectividad global
              </span>
              . Explora cómo nuestro equipo diverso y talentoso trabaja de la
              mano con clientes de todo el mundo. Cada proyecto es una{" "}
              <span className="text-cyan-400 font-semibold">
                colaboración internacional
              </span>
              , y cada línea de código es un paso hacia un{" "}
              <span className="text-cyan-400 font-semibold">
                mundo más interconectado
              </span>
              .
            </p>
          </motion.div>
        </motion.div>

        {/* Mapa interactivo - Más compacto */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative max-w-4xl mx-auto"
        >
          {/* Contenedor del mapa con efectos */}
          <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 overflow-hidden">
            {/* Efectos de fondo del contenedor */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl" />

            {/* Mapa */}
            <div className="relative z-10">
              <motion.div
                className="relative overflow-hidden rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  width={800}
                  height={400}
                  src="/map.png"
                  alt="Mapa mundial de PatagoniaScript"
                  className="w-full h-[300px] md:h-[400px] object-contain filter brightness-110 contrast-110"
                />

                {/* Overlay con efectos de conexión */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl" />
              </motion.div>
            </div>

            {/* Puntos de conexión animados */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Argentina */}
              <motion.div
                className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                style={{ left: "25%", top: "70%" }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Estados Unidos */}
              <motion.div
                className="absolute w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                style={{ left: "20%", top: "40%" }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              />

              {/* Europa */}
              <motion.div
                className="absolute w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
                style={{ left: "50%", top: "35%" }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut",
                }}
              />

              {/* Asia */}
              <motion.div
                className="absolute w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                style={{ left: "75%", top: "45%" }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
