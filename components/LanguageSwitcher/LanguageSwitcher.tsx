"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState("en");

  const changeLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
    setIsOpen(false);
    setCurrentLocale(lang);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-green-500 text-white rounded"
      >
        {currentLocale.toUpperCase()} ▼
      </button>
      {isOpen && (
        <div className="absolute mt-2 p-2 bg-green-500 text-white rounded shadow-md">
          {["en", "pl"].map((lang) => (
            <div
              key={lang}
              onClick={() => changeLanguage(lang)}
              className="cursor-pointer hover:opacity-80"
            >
              {lang.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
