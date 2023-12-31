'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col justify-center content-center items-center text-center gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="w-full h-[250px] rounded-[32px] object-cover"
    />

    <div className="w-full flex justify-between items-center">

      <div className=" flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[36px] text-[26px] text-white">
         {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

     

    </div>
  </motion.div>
  
);

export default InsightCard;