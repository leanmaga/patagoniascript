'use client';

import { motion } from 'framer-motion';
import cumbre from "@/public/cumbre1.jpg"
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';
import RedesSociales from '@/components/RedesSociales';
import Image from 'next/image'

const Hero = () => (
  
    <section id='home'  >
    
    <Image
      alt="Mountains"
      src={cumbre}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
      className="z-1 absolute blur-sm"    
    />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} hero mx-auto flex flex-col h-[100vh]`}
    >
      

      <div className="flex flex-col justify-center items-center relative z-10 ">
        <motion.img 
        variants={textVariant(1.2)}
        src="/logo.png"
        alt="hero_logo"
        className="w-[200px] h-[200px] object-contain"
        >
        </motion.img>
      


        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} xs:leading-none sm:leading-none md:leading-none`}>
          PatagoniaScript
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center p-8"
        >
          <h2 className={`${styles.heroSubtitle} pt-4 `}>"Dónde la creatividad se une con la funcionalidad"</h2>
        </motion.div>

        <motion.div
          variants={textVariant(1.2)}
          className="py-8 flex flex-col justify-center items-center"
        >   

          <button 
            type="button" 
            className="btn flex items-center h-fit py-4 px-6  rounded-[32px] gap-[12px]"
          >
            
            <span className=" text-[16px] text-white font-bold">
              <a href='https://api.whatsapp.com/send?phone=5491127764823&text=Hola%20,te%20asesoramos%20por%20whatsapp%20gestiona%20tu%20compra%20por%20este%20canal.' target="_blank" rel="noreferrer">
                Contáctanos
              </a>
            </span>
            
          </button>
          
          <div className="fb-like" data-href="https://www.patagoniascript.com" data-width="100%" data-layout="" data-action="" data-size="" data-share="true"></div>
          
          <RedesSociales className='text-[##7dd3fc]'/>

        </motion.div>

      </div>


      
    </motion.div>
    </section>
  
  
);

export default Hero;