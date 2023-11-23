'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartStep, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/react-2.svg"
          alt="react-icon"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Tecnologías utilizadas " />
        <TitleText title={<>Potenciá tu negocio</>} />

        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">

        {startingFeatures.map((feature) => (
            <StartStep key={feature.title} {...feature} />
          ))}

        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;