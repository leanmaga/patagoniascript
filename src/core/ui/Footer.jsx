"use client";

import { motion } from "framer-motion";
import styles from "@/core/styles";
import { textVariant, footerVariants } from "@/core/utils/motion";
import { useLanguage } from "@/core/i18n/context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative h-[20vh] sm-h-[40vh]  md:h-[40vh] `}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col">
          <div className="mb-[25px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center text-center content-center justify-between flex-wrap gap-4">
            <div className="flex items-center text-center content-center justify-between flex-wrap gap-4">
              <motion.img
                variants={textVariant(1.2)}
                src="/logowhite.png"
                alt="hero_logo"
                className="w-[50px] h-[50px] object-contain"
              ></motion.img>

              <h4 className="font-extrabold text-[24px] text-white">
                PatagoniaScript
              </h4>
            </div>

            <p className="font-normal text-[14px] text-white opacity-50">
              {t("footer.rights", { year })}
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
