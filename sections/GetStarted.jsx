"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartStep, TitleText, TypingText } from "@/components/";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative overflow-hidden`}>
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
