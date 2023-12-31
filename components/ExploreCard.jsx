'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]' } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
      <img
      src={imgUrl}
      alt="project"
      className="absolute w-full h-full object-cover object-top rounded-[24px]"
      />
      {active !== id ? (
      <h3 className="font-semibold  text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
      ) : (
      <div className="absolute bottom-0  p-[1rem] flex justify-center flex-wrap items-center text-center w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] `}
        >
          <img
            src="/github.svg"
            alt="github"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <div className='pl-[2rem]'>
          <p className="font-normal text-[16px] leading-[20.16px] text-white ">
          Explorar el Sitio Web
        </p>
        <h2 className="xs:mt-[0.5rem] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        </div>
        
      </div>
    )}
  </motion.div>
  
);

export default ExploreCard;