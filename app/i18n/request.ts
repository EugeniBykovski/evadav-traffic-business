import { getRequestConfig } from "next-intl/server";

const supportedLocales = ["en", "pl"];
const defaultLocale = "en";

// @ts-expect-error: searchParams may be undefined in some cases, handled with defaultLocale
export default getRequestConfig(async ({ searchParams }) => {
  let locale = searchParams?.get("lang") || defaultLocale;

  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./translations/${locale}.json`)).default,
  };
});
