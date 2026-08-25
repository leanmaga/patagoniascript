"use client";

import { LanguageProvider } from "@/core/i18n/context/LanguageContext";

export const Provider = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};
