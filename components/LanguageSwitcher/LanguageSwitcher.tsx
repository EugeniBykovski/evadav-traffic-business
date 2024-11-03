"use client";

import { FC, memo, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const LanguageSwitcher: FC = memo(() => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentLocale, setCurrentLocale] = useState("en");

  const changeLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    setCurrentLocale(lang);
  };

  return (
    <Select
      value={currentLocale}
      onValueChange={(value) => changeLanguage(value)}
    >
      <SelectTrigger className="p-2 focus:ring-0 bg-[#00b69b] text-white rounded">
        <SelectValue placeholder={currentLocale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent className="bg-[#00b69b] text-white rounded shadow-md">
        {["en", "pl"].map((lang) => (
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
});

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;
