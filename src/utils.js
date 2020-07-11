export const toLocaleDateString = (date) =>
  toDateStringWithLocale(date, getLocale());

export const toDateStringWithLocale = (date, locale) =>
  new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const getLocale = () => (isBrowser ? navigator.language : "en");

export const isBrowser = typeof window !== "undefined";
