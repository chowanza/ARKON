import { es } from './es';
import { en } from './en';

const dictionaries = {
  en: en,
  es: es,
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof es;

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] || dictionaries.es;
};
