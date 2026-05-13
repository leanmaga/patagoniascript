"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getNested } from "@/lib/getNested";
import { STRINGS } from "@/locales/strings";
import { plansByLocale } from "@/locales/insightPlans";
import { projectCopyEn } from "@/locales/portfolioEn";
import { startingFeatureSubtitlesEn, newFeatureSubtitlesEn } from "@/locales/featureCopyEn";

const STORAGE_KEY = "patagoniascript-locale";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("es");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") setLocaleState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "en" ? "en" : "es";
    }
  }, [locale]);

  const setLocale = useCallback((next) => {
    setLocaleState(next === "en" ? "en" : "es");
  }, []);

  const dict = STRINGS[locale] ?? STRINGS.es;

  const t = useCallback(
    (key, vars) => {
      let value = getNested(dict, key);
      if (value === undefined) value = getNested(STRINGS.es, key) ?? key;
      if (typeof value !== "string") return value;
      if (vars && typeof vars === "object") {
        return value.replace(/\{(\w+)\}/g, (_, k) =>
          vars[k] !== undefined && vars[k] !== null ? String(vars[k]) : ""
        );
      }
      return value;
    },
    [dict]
  );

  const insightPlans = plansByLocale[locale] ?? plansByLocale.es;

  const localizeProject = useCallback(
    (project) => {
      if (locale !== "en") return project;
      const extra = projectCopyEn[project.id];
      if (!extra) return project;
      return { ...project, ...extra };
    },
    [locale]
  );

  const localizeStartingFeature = useCallback(
    (feature, index) => {
      if (locale !== "en") return feature;
      const subtitle = startingFeatureSubtitlesEn[index];
      if (!subtitle) return feature;
      return { ...feature, subtitle };
    },
    [locale]
  );

  const localizeNewFeature = useCallback(
    (feature, index) => {
      if (locale !== "en") return feature;
      const subtitle = newFeatureSubtitlesEn[index];
      if (!subtitle) return feature;
      return { ...feature, subtitle };
    },
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      insightPlans,
      localizeProject,
      localizeStartingFeature,
      localizeNewFeature,
    }),
    [
      locale,
      setLocale,
      t,
      insightPlans,
      localizeProject,
      localizeStartingFeature,
      localizeNewFeature,
    ]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
