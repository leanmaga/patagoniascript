"use client";

// Sección Explore Mejorada

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { exploreWorlds } from "../constants";
import { staggerContainer, textVariant } from "../utils/motion";
import { ExploreCard } from "@/components";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
      className={`${styles.paddings} relative overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900`}
      id="explore"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col relative z-10`}
      >
        {/* Header mejorado */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          {/* Indicador con línea */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            variants={itemVariants}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Nuestros Trabajos
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          {/* Título principal */}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Explora Nuestro
            </span>
            <br className="md:block hidden" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Trabajo
            </span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Cada proyecto es una historia única. Descubre cómo transformamos
            ideas en
            <span className="text-cyan-400 font-semibold">
              {" "}
              experiencias digitales extraordinarias
            </span>
            que conectan con las audiencias y generan resultados.
          </motion.p>
        </motion.div>

        {/* Grid de proyectos - Tamaño completo */}
        <motion.div
          className="flex flex-row xs:flex-col sm:flex-col w-full gap-5"
          variants={containerVariants}
        >
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <motion.div
            className="inline-flex flex-col sm:flex-row gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Todos los Proyectos
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-cyan-400/50 rounded-xl text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Presupuesto
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Estadísticas de proyectos */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-800"
          variants={containerVariants}
        >
          {[
            { number: "50+", label: "Proyectos Completados" },
            { number: "100%", label: "Clientes Satisfechos" },
            { number: "24/7", label: "Soporte Técnico" },
            { number: "5★", label: "Calificación Promedio" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Explore;
