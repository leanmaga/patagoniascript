"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 36, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

function tagList(raw) {
  if (!raw || typeof raw !== "string") return [];
  return raw
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
}

const DirectorCard = ({
  photoSrc,
  photoAlt,
  name,
  role,
  bio,
  tags,
  linkedinUrl,
  linkedinAria,
  linkedinLabel,
  variant = "cyan",
}) => {
  const ring =
    variant === "violet"
      ? "ring-violet-400/35 shadow-violet-500/15"
      : "ring-cyan-400/40 shadow-cyan-500/20";

  return (
    <motion.article
      variants={itemVariants}
      className={`
        relative overflow-hidden rounded-2xl border border-slate-700/50
        bg-gradient-to-br from-slate-800/55 to-slate-900/85 backdrop-blur-xl
        p-6 sm:p-8 shadow-2xl transition-all duration-500
        hover:border-cyan-400/35 hover:shadow-cyan-500/15
        ${variant === "violet" ? "hover:border-violet-400/35" : ""}
      `}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/10 rounded-2xl"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-8">
        <div className="flex flex-col items-center sm:items-start shrink-0">
          <div
            className={`
              relative w-[104px] h-[104px] sm:w-[112px] sm:h-[112px] rounded-2xl overflow-hidden
              ring-2 ${ring} shadow-xl
            `}
          >
            <img
              src={photoSrc}
              alt={photoAlt}
              width={112}
              height={112}
              className="object-cover w-full h-full"
              loading="lazy"
              decoding="async"
            />
          </div>
          {linkedinUrl?.trim() ? (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center gap-2 text-sm transition-colors ${
                variant === "violet"
                  ? "text-violet-300 hover:text-violet-200"
                  : "text-cyan-300 hover:text-cyan-200"
              }`}
              aria-label={linkedinAria}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {linkedinLabel}
            </a>
          ) : null}
        </div>

        <div className="flex-1 min-w-0 text-center sm:text-left">
          {name?.trim() ? (
            <>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{name}</h3>
              <p
                className={`
                text-sm sm:text-base font-medium tracking-wide uppercase mb-4
                ${
                  variant === "violet"
                    ? "text-violet-300/95"
                    : "text-cyan-300/95"
                }
              `}
              >
                {role}
              </p>
            </>
          ) : (
            <h3
              className={`
              text-xl sm:text-2xl font-bold mb-4
              bg-gradient-to-r ${
                variant === "violet"
                  ? "from-violet-300 to-cyan-300"
                  : "from-cyan-300 to-blue-300"
              } bg-clip-text text-transparent
            `}
            >
              {role}
            </h3>
          )}

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">{bio}</p>

          <ul className="flex flex-wrap justify-center sm:justify-start gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <span
                  className={`
                  inline-block px-3 py-1 text-xs font-medium rounded-full border
                  ${
                    variant === "violet"
                      ? "bg-violet-500/15 text-violet-200 border-violet-400/25"
                      : "bg-cyan-500/15 text-cyan-200 border-cyan-400/30"
                  }
                `}
                >
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};

const Leadership = () => {
  const { t } = useLanguage();

  const founderTags = tagList(t("leadership.founderTags"));
  const cofounderTags = tagList(t("leadership.cofounderTags"));

  return (
    <section className="relative overflow-hidden py-20 px-4" id="leadership" aria-labelledby="leadership-heading">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">
              {t("leadership.label")}
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 id="leadership-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              {t("leadership.title1")}
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {t("leadership.title2")}
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("leadership.intro")}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          <DirectorCard
            photoSrc="/team-founder.svg"
            photoAlt={t("leadership.founderPhotoAlt")}
            name={t("leadership.founderName")}
            role={t("leadership.founderRole")}
            bio={t("leadership.founderBio")}
            tags={founderTags}
            linkedinUrl={t("leadership.founderLinkedin")}
            linkedinAria={t("leadership.linkedinAria")}
            linkedinLabel={t("leadership.linkedinLabel")}
            variant="cyan"
          />
          <DirectorCard
            photoSrc="/team-cofounder.svg"
            photoAlt={t("leadership.cofounderPhotoAlt")}
            name={t("leadership.cofounderName")}
            role={t("leadership.cofounderRole")}
            bio={t("leadership.cofounderBio")}
            tags={cofounderTags}
            linkedinUrl={t("leadership.cofounderLinkedin")}
            linkedinAria={t("leadership.linkedinAria")}
            linkedinLabel={t("leadership.linkedinLabel")}
            variant="violet"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
