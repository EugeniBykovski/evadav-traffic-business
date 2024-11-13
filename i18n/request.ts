import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const supportedLocales = ["en", "pl"];
const defaultLocale = "en";

// @ts-ignore
export default getRequestConfig(async ({ pathname }) => {
  let locale = pathname?.split("/")[1] || defaultLocale;
  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }

  try {
    return {
      locale,
      messages: (await import(`../i18n/translations/${locale}.json`)).default,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
});
