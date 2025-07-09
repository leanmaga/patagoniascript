"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.8)}
      className="group relative overflow-hidden rounded-xl cursor-pointer h-[280px] bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-400/40 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          width={400}
          height={300}
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4">
        {/* Indicador numérico */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <span className="text-cyan-400 font-bold text-xs">0{index}</span>
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {/* Título */}
          <motion.h4
            className="font-bold text-lg lg:text-xl text-white leading-tight group-hover:text-cyan-100 transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            {title}
          </motion.h4>

          {/* Subtítulo/Descripción */}
          <motion.p
            className="text-gray-300 text-xs lg:text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {subtitle}
          </motion.p>

          {/* Botón de acción */}
          <motion.button
            className="
              w-full py-2 px-3 bg-gradient-to-r from-cyan-500 to-blue-500
              text-white font-semibold rounded-lg text-xs
              shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40
              transition-all duration-300 opacity-0 group-hover:opacity-100
              transform translate-y-2 group-hover:translate-y-0
            "
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Conocer Más
          </motion.button>
        </motion.div>

        {/* Decoración inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Efecto de partículas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${30 + i * 30}%`,
              top: `${40 + i * 20}%`,
            }}
            animate={{
              y: [-10, -20, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Borde brillante */}
      <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:ring-1 group-hover:ring-cyan-400/40 transition-all duration-300" />
    </motion.div>
  );
};

export default InsightCard;
