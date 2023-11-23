'use client'

import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';

import { socials } from '../constants';


const RedesSociales = () => {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.35 }}
    className='p-2 pt-8'
    >
        <div className="flex gap-8">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
    </motion.div>
    
  )
}

export default RedesSociales