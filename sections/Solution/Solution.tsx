"use client";

import { FC, memo } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const SolutionSection: FC = memo(() => {
  const t = useTranslations("solution-section");

  return (
    <div className="md:py-24 sm:py-16" id="home">
      <h1 className="text-[#373168] md:text-6xl sm:text-4xl font-bold mb-8 tracking-wide">
        {t("title")}
      </h1>
      <h3 className="md:text-2xl sm:text-lg mb-14 text-[#373168] tracking-wide">
        {t("description")}
      </h3>
      <Button size="lg" className="text-lg">
        {t("more")}
      </Button>
    </div>
  );
});

SolutionSection.displayName = "SolutionSection";

export default SolutionSection;
