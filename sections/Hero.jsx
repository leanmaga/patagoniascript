'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';
import RedesSociales from '@/components/RedesSociales';

const Hero = () => (

  
  <section className={styles.yPaddings} >
    
    <img
          src="/cumbre1.jpg"
          alt="hero_cover"
          className="w-full h-[100vh] object-cover z-1 absolute blur-sm"
    />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} hero mx-auto flex flex-col h-[100vh]`}
    >
      

      <div className="flex flex-col justify-center items-center relative z-10">
        <motion.h1 variants={textVariant(1.1)}>
        PatagoniaScript
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h2 className={`${styles.heroSubtitle} pt-4 `}>"Dónde la creatividad se une con la funcionalidad"</h2>
        </motion.div>

        <motion.div
          variants={textVariant(1.2)}
          className="py-8 flex flex-col justify-center items-center"
        >   

          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#ca8a04] rounded-[32px] gap-[12px]">
            <span className=" text-[16px] text-white font-bold">
            Contáctanos
            </span>
          </button>

          <RedesSociales className='text-[##7dd3fc]'/>

        </motion.div>

      </div>


      
    </motion.div>
  </section>
);

export default Hero;