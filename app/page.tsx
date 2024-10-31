"use client";

import { FC, memo } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const Home: FC = memo(() => {
  const t = useTranslations("header");

  return (
    <div>
      <Button>{t("description")}</Button>
    </div>
  );
});

Home.displayName = "Home";

export default Home;
