"use client";

import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useLanguage } from "@/contexts/LanguageProvider";
import { supportedLocales } from "@/data/mock-data";

const LanguageSwitcher: FC = () => {
  const { locale, changeLanguage } = useLanguage();

  return (
    <Select value={locale} onValueChange={(value) => changeLanguage(value)}>
      <SelectTrigger className="p-2 focus:ring-0 bg-[#00b69b] text-white rounded">
        <SelectValue placeholder={locale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent className="bg-[#00b69b] text-white rounded shadow-md">
        {supportedLocales.map((lang) => (
          <SelectItem
            key={lang}
            value={lang}
            className="cursor-pointer hover:opacity-80"
          >
            {lang.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
