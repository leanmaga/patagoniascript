'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

import {  TitleText, TypingText } from '../components';

const Hero = () => (

  <section id='about' className={`${styles.yPaddings} `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center align-center max-w-[80vh] min-h-[100vh]`}
    >

      <div className="flex justify-center items-center flex-col relative z-10">
      
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-col justify-center items-center"
        >
          
        <TypingText title="| Our History" textStyles="text-center" />
          <TitleText
          title={<>Nuestra Historia <br className="md:block hidden" /></>}
          textStyles="text-center"
          />
          <h2 className={styles.heroSubtitle}>"En PatagoniaScript, fusionamos la pasión por la tecnología con la inspiración de la Patagonia para construir experiencias web únicas." </h2>
          <p className={styles.heroP}> "Somos un equipo apasionado por el diseño web, 
            comprometidos a dar vida a tus ideas en el vasto mundo digital. 
            Cada proyecto es una aventura, y cada línea de código cuenta una historia. 
            Con sedes en la majestuosa Patagonia y Buenos Aires, nuestra misión es conectar tu 
            visión con el mundo a través de la magia de la web."</p>
        </motion.div>
      </div>

    </motion.div>
  </section>

);

export default Hero;