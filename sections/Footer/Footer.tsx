"use client";

import { FC, memo } from "react";
import { useTranslations } from "next-intl";

const Footer: FC = memo(() => {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-gradient-to-r from-[#373168] to-[#2a254f] text-zinc-200 text-sm py-8 shadow-2xl">
      <div className="container">
        <div className="text-center py-2">
          <p className="text-lg">{t("title")}</p>
          <p className="text-lg">{t("description")}</p>
          <p className="text-lg">{t("nip")}</p>
          <p className="text-lg">{t("email")}</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
