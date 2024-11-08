"use client";

import { FC, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const LanguageSwitcher: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [currentLocale, setCurrentLocale] = useState(() => {
    const pathLocale = pathname.split("/")[1];
    return pathLocale === "en" || pathLocale === "pl" ? pathLocale : "en";
  });

  const changeLanguage = (lang: string) => {
    const newPathname = `/${lang}${pathname.substring(
      currentLocale.length + 1
    )}`;
    setCurrentLocale(lang);
    router.push(newPathname, { scroll: false });
  };

  useEffect(() => {
    const pathLocale = pathname.split("/")[1];
    if (
      pathLocale !== currentLocale &&
      (pathLocale === "en" || pathLocale === "pl")
    ) {
      setCurrentLocale(pathLocale);
    }
  }, [pathname, currentLocale]);

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
};

export default LanguageSwitcher;
