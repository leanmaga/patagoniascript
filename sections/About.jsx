"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";

const About = () => {
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
      id="about"
      className={`${styles.yPaddings} relative bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden`}
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
        className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center relative z-10 min-h-[100vh] py-20`}
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center"
        >
          {/* Indicador con línea */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              Nuestra Historia
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          {/* Título principal */}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Nuestra
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Historia
            </span>
          </motion.h2>

          {/* Subtítulo destacado */}
          <motion.div className="relative mb-12" variants={itemVariants}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl rounded-2xl" />
            <blockquote className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 shadow-2xl">
              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                "En PatagoniaScript, fusionamos la{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                  pasión por la tecnología
                </span>{" "}
                con la inspiración de la Patagonia para construir{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                  experiencias web únicas
                </span>
                ."
              </motion.h3>

              {/* Comillas decorativas */}
              <div className="absolute -top-4 -left-4 text-6xl text-cyan-400/30 font-serif">
                "
              </div>
              <div className="absolute -bottom-8 -right-4 text-6xl text-cyan-400/30 font-serif">
                "
              </div>
            </blockquote>
          </motion.div>

          {/* Descripción principal */}
          <motion.div className="space-y-6 max-w-4xl" variants={itemVariants}>
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Somos un equipo apasionado por el diseño web, comprometidos a dar
              vida a tus ideas en el vasto mundo digital.
              <span className="text-cyan-400 font-semibold">
                {" "}
                Cada proyecto es una aventura
              </span>
              , y cada línea de código cuenta una historia.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Con sedes en la majestuosa{" "}
              <span className="text-cyan-400 font-semibold">Patagonia</span> y{" "}
              <span className="text-blue-400 font-semibold">Buenos Aires</span>,
              nuestra misión es conectar tu visión con el mundo a través de la
              <span className="text-cyan-400 font-semibold">
                {" "}
                magia de la web
              </span>
              .
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
