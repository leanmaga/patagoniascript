"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

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

  return (
    <section className={`${styles.paddings} relative overflow-hidden`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={containerVariants}>
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            variants={itemVariants}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Testimonios
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Lo Que Dicen
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Nuestros Clientes
            </span>
          </motion.h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
        >
          {/* Decoración */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl" />
          <div className="absolute -top-4 -left-4 text-6xl text-cyan-400/20 font-serif">
            "
          </div>
          <div className="absolute -bottom-8 -right-4 text-6xl text-cyan-400/20 font-serif">
            "
          </div>

          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
              <span className="text-cyan-400 font-bold text-lg">AS</span>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white hover:text-cyan-400 transition-colors duration-300">
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

          <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                ⭐
              </span>
            ))}
            <span className="text-gray-300 text-sm ml-2">5.0 / 5.0</span>
          </div>

          <blockquote className="text-gray-300 leading-relaxed text-lg relative z-10">
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

          <div className="flex flex-wrap gap-2 mt-6">
            {["Landing Page", "E-commerce", "Responsive"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Más Testimonios
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
