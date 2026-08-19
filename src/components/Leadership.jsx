"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 16 },
  },
};

function tagList(raw) {
  if (!raw || typeof raw !== "string") return [];
  return raw
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
}

const LeaderCard = ({
  photoSrc,
  photoAlt,
  name,
  role,
  bio,
  tags,
  linkedinUrl,
  accentColor = "cyan",
}) => {
  const accent = {
    cyan: {
      ring: "ring-cyan-400/50",
      shadow: "shadow-cyan-500/20",
      border: "hover:border-cyan-400/40",
      tag: "bg-cyan-500/10 text-cyan-200 border-cyan-400/25",
      role: "text-cyan-300",
      linkedin: "text-cyan-300 hover:text-white",
      badge: "bg-cyan-500/20 text-cyan-200",
      glow: "from-cyan-500/8 to-blue-500/12",
    },
    violet: {
      ring: "ring-violet-400/50",
      shadow: "shadow-violet-500/20",
      border: "hover:border-violet-400/40",
      tag: "bg-violet-500/10 text-violet-200 border-violet-400/25",
      role: "text-violet-300",
      linkedin: "text-violet-300 hover:text-white",
      badge: "bg-violet-500/20 text-violet-200",
      glow: "from-violet-500/8 to-indigo-500/12",
    },
  }[accentColor];

  return (
    <motion.article
      variants={cardVariants}
      className={`
        relative overflow-hidden rounded-2xl border border-slate-700/60
        bg-gradient-to-b from-slate-800/60 to-slate-900/80 backdrop-blur-xl
        p-7 sm:p-9 shadow-2xl transition-all duration-500
        ${accent.border} hover:shadow-xl ${accent.shadow}
        flex flex-col gap-6
      `}
    >
      {/* Ambient glow */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glow} rounded-2xl`}
        aria-hidden
      />

      {/* Photo + identity */}
      <div className="relative z-10 flex items-center gap-5">
        <div
          className={`
            relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden
            ring-2 ${accent.ring} shadow-lg ${accent.shadow}
          `}
        >
          <img
            src={photoSrc}
            alt={photoAlt}
            width={96}
            height={96}
            className="object-cover object-top w-full h-full"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
            {name}
          </h3>
          <p
            className={`text-sm font-semibold tracking-wide mt-0.5 ${accent.role}`}
          >
            {role}
          </p>

          {linkedinUrl && linkedinUrl !== "#" ? (
            <a
              href={`https://linkedin.com/in/${linkedinUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${accent.linkedin}`}
              aria-label={`Ver perfil de LinkedIn de ${name}`}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          ) : (
            <span
              className={`mt-2 inline-block text-xs px-2 py-0.5 rounded-full ${accent.badge}`}
            >
              Próximamente en LinkedIn
            </span>
          )}
        </div>
      </div>

      {/* Bio */}
      <p className="relative z-10 text-gray-300 text-sm sm:text-[0.95rem] leading-relaxed">
        {bio}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <ul className="relative z-10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${accent.tag}`}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
};

const Leadership = () => {
  const { t } = useLanguage();

  const founderTags = tagList(t("leadership.founderTags"));
  const cofounderTags = tagList(t("leadership.cofounderTags"));

  return (
    <section
      className="relative overflow-hidden py-20 px-4"
      id="leadership"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-semibold tracking-widest uppercase text-xs">
              {t("leadership.label")}
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2
            id="leadership-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            <span className="text-white">{t("leadership.title1")} </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t("leadership.title2")}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("leadership.intro")}
          </p>
        </div>

        {/* Cards — 1 col mobile, 2 cols md+ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 lg:gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <LeaderCard
            photoSrc="/assets/lider1.png"
            photoAlt="Foto de Leandro Adrián Magallanes"
            name="Leandro Adrián Magallanes"
            role={t("leadership.founderRole")}
            bio={t("leadership.founderBio")}
            tags={founderTags}
            linkedinUrl="leandromagallanes"
            accentColor="cyan"
          />
          <LeaderCard
            photoSrc="/assets/lider2.png"
            photoAlt={t("leadership.cofounderPhotoAlt")}
            name={t("leadership.cofounderName")}
            role={t("leadership.cofounderRole")}
            bio={t("leadership.cofounderBio")}
            tags={cofounderTags}
            linkedinUrl="#"
            accentColor="violet"
          />
        </motion.div>

        {/* Trust footer */}
        <p className="text-center text-gray-500 text-sm mt-10">
          ¿Querés hablar con nosotros directamente?{" "}
          <a
            href="mailto:hola@patagoniascript.com"
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
          >
            Escribinos
          </a>
          , somos personas reales.
        </p>
      </div>
    </section>
  );
};

export default Leadership;
