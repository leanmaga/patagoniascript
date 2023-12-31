'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';


const WhatsNew = () => (

  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} min-h-[100vh] flex flex-row gap-8  justify-center content-center flex-wrap  `}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex flex-col justify-center items-center text-center content-center flex-wrap"
      >
        <TypingText title="| Whats new?" />

        <TitleText title={<>Explora las Últimas Novedades</>} />

        <div className="mt-[31px] flex flex-col items-center content-center flex-wrap max-w-[370px] gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>

      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`ml-8 ${styles.flexCenter}`}
      >

        <img
          src="/tailwind.svg"
          alt="tailwind-svg"
          className="max-w-[500px] w-[90%] h-[90%] object-contain"
        /> 

          

      </motion.div>


    </motion.div>
  </section>
  
);

export default WhatsNew;