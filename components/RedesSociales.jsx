'use client'

import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';

import { socials } from '../constants';
import Image from 'next/image';


const RedesSociales = () => {
  return (
    
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.35 }}
    className='p-2 pt-8   '
    >
      <div className="flex gap-8">
        {socials.map((social, index) => (

          <a key={index} className='hover:scale-150' href={social.link} target="_blank" rel="noreferrer">
            
              <Image
                width={24}
                height={24}
                key={social.name}
                src={social.url}
                alt={social.name}
                className="object-contain cursor-pointer"
              />
            
          </a>
          
        )) }
      </div>
    </motion.div>
    
  )
}

export default RedesSociales