'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleTextPeople, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />

      <TitleTextPeople
        title={(
          <>"En PatagoniaScript, creemos en el poder de la conectividad global. 
          Explora cómo nuestro equipo diverso y talentoso trabaja de la mano con 
          clientes de todo el mundo. Cada proyecto es una colaboración internacional, 
          y cada línea de código es un paso hacia un mundo más interconectado."
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[120px] h-[120px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.jpg" alt="people" className="w-full h-full rounded-full  bg-auto" />
        </div>

        <div className="absolute top-10 left-20 w-[120px] h-[120px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.jpg" alt="people" className="w-full h-full rounded-full  bg-auto" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[120px] h-[120px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.jpg" alt="people" className="w-full h-full rounded-full bg-auto " />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;