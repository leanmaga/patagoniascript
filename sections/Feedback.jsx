'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import Image from 'next/image';

const Feedback = () => (
  <section className='p-4 text-center'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth}  w-full lg:max-w-[370px] xs:max-w-[100%] sm:max-w-[100%] sm:m-[0.5rem] flex justify-center flex-row xs:flex-col  sm:flex-col md:flex-col gap-6 sm:gap-0`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="sm:w-[100%] xs:w-[100%] w-[50%] content-center justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold text-[26px] p-4 sm:leading-[40.32px] leading-[36.32px] text-white">
            <a className='text-center hover:scale-150' href='https://leanmaga.github.io/Artesanias-Stitch/' target="_blank" rel="noreferrer">
              Artesanias Stitch
            </a>  
          </h4>
          {/*<p className="mt-[8px] font-normal sm:text-[16px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Experiencia Excepcional con el Servicio de PatagoniaScript
          </p>*/}
        </div>

        <p className="text-start mt-[24px] font-normal sm:text-[12px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
                “Contratar a PatagoniaScript fue una decisión acertada. Su equipo entendió perfectamente mis necesidades como PYME. 
                La landing page que crearon fue precisa, estéticamente agradable y cumplió con todos mis requisitos técnicos. 
                La comunicación fue fluida, y aprecio la transparencia y la puntualidad en cada fase del proyecto. Recomiendo 
                encarecidamente sus servicios a cualquier profesional que busque calidad y eficiencia.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="sm:w-[100%] xs:w-[100%] w-[50%] relative flex flex-wrap justify-center items-center xs:mt-4 sm:mt-4 md:mt-4"
      >
        <Image
          width={610}
          height={210}
          src="/cumbre02.jpg"
          alt="planet-09"
          className="max-h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="absolute -left-[10%] top-[3%] z-11"
        >
          <Image
            width={155}
            height={155}
            src="/react-2.svg"
            alt="stamp react"
            className=" object-contain xs:hidden sm:hidden md:hidden"
          />
        </motion.div>
      </motion.div>

    </motion.div>

    {/*<div className="w-[500px] flex justify-center content-center gradient-05">

      <div 
        className="fb-comments m-4 p-4 flex justify-center content-center " 
        data-href="https://www.patagoniascript.com" 
        data-width="100%" 
        data-numposts="5"
        data-mobile="true"
      >

      </div>
    
        </div>*/}
    

  </section>
);

export default Feedback;





