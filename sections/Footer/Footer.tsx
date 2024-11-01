"use client";

import { FC, memo } from "react";
import { useTranslations } from "next-intl";
import Logo from "@/components/Logo/Logo";

const Footer: FC = memo(() => {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-[#ffffff] text-zinc-400 text-sm py-8 shadow-2xl">
      <div className="container">
        <div className="sm:flex sm:justify-center md:justify-start">
          <Logo />
        </div>
        <p className="mt-6 md:text-xm sm:text-xs sm:text-center md:text-left font-light text-[#929994]">
          {t("copyright")} &copy; {t("rights")}
          Wartraf sp. z o.o. ul. Straganiarska, 20-22/35, Gdansk, 80-837, Poland
          NIP: 5833620602 E-mail: contact@wartraf.com
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
