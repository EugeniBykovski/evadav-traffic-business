"use client";

import { FC, memo } from "react";
import { useTranslations } from "next-intl";

const Footer: FC = memo(() => {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-gradient-to-r from-[#0f054c] to-[#0f0577] text-zinc-200 text-sm py-8 shadow-2xl">
      <div className="container">
        <div className="text-center py-2">
          <p className="text-lg">Wartraf sp. z o.o. ul.</p>
          <p className="text-lg">
            Straganiarska, 20-22/35, Gdansk, 80-837, Poland
          </p>
          <p className="text-lg">NIP: 5833620602</p>
          <p className="text-lg">E-mail: contact@wartraf.com</p>
        </div>
        <p className="mt-6 md:text-xm sm:text-xs sm:text-center md:text-left font-light text-[#868686]">
          {t("copyright")} &copy; {t("rights")}
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
