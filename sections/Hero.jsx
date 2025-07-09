"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";
import RedesSociales from "@/components/RedesSociales";

const Hero = () => (
  <section id="home" className="relative min-h-screen overflow-hidden">
    {/* Fondo azul gradiente */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />

    {/* Efectos luminosos */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow" />
    </div>

    {/* Grid de fondo sutil */}
    <div className="absolute inset-0 opacity-20">
      <div className="h-full w-full bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} hero mx-auto flex flex-col h-[100vh] relative z-10`}
    >
      <div className="flex flex-col justify-center items-center relative z-10 h-full">
        {/* Logo con efectos flotantes */}
        <motion.div
          variants={textVariant(1.2)}
          animate={{
            y: [-10, 10, -10],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-xl scale-110" />
          <img
            src="/logo.png"
            alt="hero_logo"
            className="w-[200px] h-[200px] object-contain relative z-10 drop-shadow-2xl"
          />
        </motion.div>

        {/* Título principal */}
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading} xs:leading-none sm:leading-none md:leading-none relative`}
        >
          <span className="relative z-10">PatagoniaScript</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl scale-110" />
        </motion.h1>

        {/* Subtítulo */}
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center p-8"
        >
          <h2 className={`${styles.heroSubtitle} pt-4 relative z-10`}>
            "Dónde la creatividad se une con la funcionalidad"
          </h2>
        </motion.div>

        {/* Botón de contacto mejorado */}
        <motion.div
          variants={textVariant(1.2)}
          className="py-8 flex flex-col justify-center items-center gap-6"
        >
          <motion.button
            type="button"
            className="group relative btn flex items-center h-fit py-4 px-8 rounded-[32px] gap-[12px] overflow-hidden shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Destello que se mueve de izquierda a derecha */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer" />

            <span className="text-[16px] text-white font-bold relative z-10">
              <a
                href="https://api.whatsapp.com/send?phone=5491127764823&text=Hola%20,te%20asesoramos%20por%20whatsapp%20gestiona%20tu%20compra%20por%20este%20canal."
                target="_blank"
                rel="noreferrer"
              >
                Contáctanos
              </a>
            </span>
          </motion.button>

          {/* Like de Facebook */}
          <motion.div
            className="opacity-90 hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="fb-like"
              data-href="https://www.patagoniascript.com"
              data-width="100%"
              data-layout=""
              data-action=""
              data-size=""
              data-share="true"
            ></div>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <RedesSociales className="text-[#7dd3fc]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
