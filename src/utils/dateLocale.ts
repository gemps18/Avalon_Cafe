import { enUS, es, ca } from "date-fns/locale";
import type { Locale } from "date-fns";

export const localeMap: Record<string, Locale> = { en: enUS, es, ca };

export function getCalendarLocale(language: string): Locale {
  return localeMap[language] ?? enUS;
}