'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';
import Image from 'next/image';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]' } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
      <Image
      width={1000}
      height={1000}
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
          className={`${styles.flexCenter} w-[50px] h-[50px] rounded-[24px] glassmorphism m-4 `}
        >
          <Image
            width={10}
            height={10}
            src="/github.svg"
            alt="github"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <div className='p-4'>
          <h2 className="xs:mt-[0.5rem] font-semibold sm:text-[20px] text-[24px] text-white">
            {title}
          </h2>
        </div>
        
      </div>
    )}
  </motion.div>
  
);

export default ExploreCard;