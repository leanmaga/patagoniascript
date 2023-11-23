'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { footerVariants } from '../utils/motion';
import RedesSociales from './RedesSociales';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            PatagoniaScript
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 PatagoniaScript. All rights reserved.
          </p>

          <RedesSociales/>

          
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;