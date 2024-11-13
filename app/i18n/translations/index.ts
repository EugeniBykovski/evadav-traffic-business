import en from "./en.json";
import pl from "./pl.json";

export type AvailableLocales = "en" | "pl";

const translations: Record<AvailableLocales, typeof en> = {
  en,
  pl,
};

export default translations;
