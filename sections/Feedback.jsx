'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

import { NewFeatures, TitleText, TypingText } from '../components';

import { ContactForm } from '../components';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} min-h-[100vh] flex flex-row gap-8 justify-center content-center flex-wrap`}
      >   
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex flex-col justify-center items-center text-center content-center flex-wrap"
        >
          <TypingText title="| Feedbacks" />

          <TitleText title={<>Nuestros clientes</>} />
          
          <div>
            
            <motion.div
              variants={fadeIn('right', 'tween', 0.2, 1)}
              className="flex-[0.5] lg:max-w-[370px] flex gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
            >
              <div className="feedback-gradient" />

              <div>
                <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
                  Artesanias Stitch 
                </h4>
                <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
                  Experiencia Excepcional con el Servicio de PatagoniaScript
                </p>
              </div>
              
              <p className="mt-[24px] font-normal sm:text-[18px] text-[12px] sm:leading-[45.6px] leading-[39.6px] text-white">
              “Contratar a PatagoniaScript fue una decisión acertada. Su equipo entendió perfectamente mis necesidades como ingeniero. La landing page que crearon fue precisa, estéticamente agradable y cumplió con todos mis requisitos técnicos. La comunicación fue fluida, y aprecio la transparencia y la puntualidad en cada fase del proyecto. Recomiendo encarecidamente sus servicios a cualquier profesional que busque calidad y eficiencia.”
              </p>

              <motion.div
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className="relative flex-1 flex justify-center items-center"
            >
              <img
                src="/cumbre02.jpg"
                alt="planet-09"
                className="max-w-[500px] w-full h-auto object-cover rounded-[40px]"
              />

              <motion.div
                variants={zoomIn(0.4, 1)}
                className="lg:block hidden absolute -left-[10%] top-[3%]"
              >
                <img
                  src="/react-2.svg"
                  alt="stamp"
                  className="w-[155px] h-[155px] object-contain"
                />
              </motion.div>
              </motion.div>


            </motion.div>

                
          </div>

          <ContactForm/>


        </motion.div>

        
    </motion.div>
  </section>
);

export default Feedback;