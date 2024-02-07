'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';

import {  staggerContainer, fadeIn } from '../utils/motion';

const Insights = () => (

  <section id='work' className={`${styles.paddings} relative z-10`}>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} min-h-[100vh] flex flex-row gap-8 justify-center content-center flex-wrap `}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex flex-col justify-center items-center text-center content-center flex-wrap"
      >
        <TypingText title="| Our services"/>

        <TitleText title={<>Nuestros Servicios</>} />

        <div className="mt-[31px] grid xs:grid-cols-1 sm:grid-cols-1 grid-cols-3 gap-[24px] ">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>

      </motion.div>
      

    </motion.div>

  </section>
  
);

export default Insights;