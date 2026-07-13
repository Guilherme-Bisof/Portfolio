"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import pt from "@/locales/pt.json";
import en from "@/locales/en.json";

type Language = "pt" | "en";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const dictionaries = {
  pt,
  en,
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: string) => {
    // If not mounted yet on the client, fallback to portuguese for initial render
    // to match SSR output and avoid hydration mismatch, though we are returning children early if not mounted,
    // sometimes inner components might still render.
    const activeLanguage = mounted ? language : "pt";
    
    const keys = key.split(".");
    let current: any = dictionaries[activeLanguage];
    
    for (const k of keys) {
      if (current[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      current = current[k];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div key={language} className="w-full h-full flex flex-col min-h-screen">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
