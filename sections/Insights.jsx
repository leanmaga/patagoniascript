"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { insights } from "../constants";
import InsightCard from "@/components/InsightCard";

import { staggerContainer, fadeIn } from "../utils/motion";

const Insights = () => {
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
      id="work"
      className={`${styles.paddings} relative bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden`}
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
        <motion.div className="text-center mb-12" variants={containerVariants}>
          {/* Indicador con línea */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-4"
            variants={itemVariants}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Nuestros Servicios
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          {/* Título principal */}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Nuestros
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Servicios
            </span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ofrecemos soluciones digitales completas que transforman ideas en
            <span className="text-cyan-400 font-semibold">
              {" "}
              experiencias extraordinarias
            </span>
            que conectan, inspiran y generan resultados.
          </motion.p>
        </motion.div>

        {/* Grid de servicios - Responsive: 3 en desktop, 2 en tablet, 1 en mobile */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
        >
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-8" variants={itemVariants}>
          <motion.div
            className="inline-flex flex-col sm:flex-row gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Consulta Gratuita
            </motion.button>

            <motion.button
              className="px-8 py-3 border-2 border-cyan-400/50 rounded-xl text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Todos los Servicios
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Estadísticas de servicios */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-800"
          variants={containerVariants}
        >
          {[
            { number: "3", label: "Tipos de Servicios" },
            { number: "100%", label: "Personalización" },
            { number: "24/7", label: "Soporte Incluido" },
            { number: "∞", label: "Revisiones" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Insights;
