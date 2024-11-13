"use client";

import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { useLanguage } from "@/contexts/LanguageProvider";

export const DynamicIntlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { locale, messages } = useLanguage();
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
};
