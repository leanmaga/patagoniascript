"use client";

import { motion } from "framer-motion";
import styles from "@/core/styles";
import { staggerContainer } from "@/core/utils/motion";
import { useLanguage } from "@/core/i18n/context/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "+20", label: t("about.stat1") },
    { value: "2 sem", label: t("about.stat2") },
    { value: "100%", label: t("about.stat3") },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="about" className={`${styles.yPaddings} relative`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center relative z-10 min-h-[100vh] py-20`}
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center"
        >
          {/* Indicador */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              {t("about.label")}
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          {/* Título */}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              {t("about.titleGrow")}
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t("about.titleBusiness")}
            </span>
          </motion.h2>

          {/* Quote */}
          <motion.div className="relative mb-12" variants={itemVariants}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl rounded-2xl" />
            <blockquote className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8 shadow-2xl">
              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                {t("about.quoteBefore")}{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                  {t("about.quoteHighlight1")}
                </span>{" "}
                {t("about.quoteMid")}{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                  {t("about.quoteHighlight2")}
                </span>
              </motion.h3>
              <div className="absolute -top-4 -left-4 text-6xl text-cyan-400/30 font-serif">
                "
              </div>
              <div className="absolute -bottom-8 -right-4 text-6xl text-cyan-400/30 font-serif">
                "
              </div>
            </blockquote>
          </motion.div>

          {/* Descripción */}
          <motion.div
            className="space-y-6 max-w-4xl mb-14"
            variants={itemVariants}
          >
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {t("about.p1a")}{" "}
              <span className="text-cyan-400 font-semibold">
                {t("about.brand")}
              </span>{" "}
              {t("about.p1b")}{" "}
              <span className="text-cyan-400 font-semibold">
                {t("about.p1c")}
              </span>
              {t("about.p1d")}
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {t("about.p2a")}{" "}
              <span className="text-cyan-400 font-semibold">
                {t("about.city")}
              </span>
              {t("about.p2b")}{" "}
              <span className="text-blue-400 font-semibold">
                {t("about.p2c")}
              </span>
              {t("about.p2d")}
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 w-full max-w-2xl"
            variants={itemVariants}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 text-center hover:border-cyan-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.15 }}
              >
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-xs leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
