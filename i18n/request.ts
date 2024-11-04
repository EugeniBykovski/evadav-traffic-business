import { getRequestConfig } from "next-intl/server";

const supportedLocales = ["en", "pl"];
const defaultLocale = "en";

export default getRequestConfig(async ({ pathname }) => {
  const pathLocale = pathname?.split("/?lang=")[1];

  const locale = supportedLocales.includes(pathLocale)
    ? pathLocale
    : defaultLocale;

  return {
    locale,
    messages: (await import(`../i18n/translations/${locale}.json`)).default,
  };
});
