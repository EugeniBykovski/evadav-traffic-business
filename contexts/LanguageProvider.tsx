"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

type LanguageContextType = {
  locale: string;
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    const storedLocale =
      localStorage.getItem("locale") || searchParams.get("lang") || "en";
    setLocale(storedLocale);
  }, [searchParams]);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const changeLanguage = (lang: string) => {
    setLocale(lang);

    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
