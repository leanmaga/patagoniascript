"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartStep, TitleText, TypingText } from "@/components/";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const GetStarted = () => (
  <section
    className={`${styles.paddings} relative bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden`}
  >
    {/* Efectos de fondo */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow" />
    </div>

    {/* Grid de fondo sutil */}
    <div className="absolute inset-0 opacity-5">
      <div className="h-full w-full bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>

    {/* Efectos de neón intermitente */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
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
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Líneas de neón que aparecen y desaparecen */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          style={{
            left: "0%",
            right: "0%",
            top: `${25 + i * 20}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1,
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
      className={`${styles.innerWidth} min-h-[100vh] flex flex-row gap-8 items-center justify-center content-center flex-wrap relative z-10`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`mr-8 ${styles.flexCenter}`}
      >
        <img
          src="/react-2.svg"
          alt="react-icon"
          className="max-w-[500px] w-[90%] h-[90%] object-contain"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-col justify-center items-center text-center content-center flex-wrap"
      >
        <TypingText title="| Tecnologías utilizadas " />

        <TitleText title={<>Potenciá tu negocio</>} />

        <div className="mt-[31px] flex flex-col items-center content-center flex-wrap max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartStep key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
