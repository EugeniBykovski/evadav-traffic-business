"use client";

import { FC } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const supportedLocales = ["en"];

const LanguageSwitcher: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = supportedLocales.includes(pathname.split("/")[1])
    ? pathname.split("/")[1]
    : "en";

  const changeLanguage = (lang: string) => {
    const pathWithoutLocale = supportedLocales.includes(currentLocale)
      ? pathname.substring(currentLocale.length + 1)
      : pathname;

    const newPath = `/${lang}${pathWithoutLocale}`;
    const newUrl = searchParams.toString()
      ? `${newPath}?${searchParams.toString()}`
      : newPath;

    router.push(newUrl, { scroll: false });
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
