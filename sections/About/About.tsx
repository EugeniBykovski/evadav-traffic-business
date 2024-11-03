"use client";

import { FC, memo } from "react";
import Subtitle from "@/components/Subtitle/Subtitle";
import { useTranslations } from "next-intl";

const AboutSection: FC = memo(() => {
  const t = useTranslations("about-section");

  return (
    <div
      id="whoweare"
      className="lg:p-20 md:p-10 sm:px-5 sm:py-8 rounded-md bg-[#f9f9f9]"
    >
      <Subtitle>{t("title")}</Subtitle>
      <p className="text-[#373168] lg:px-48 md:px-0 text-md tracking-wide">
        {t("description")}
      </p>
    </div>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
