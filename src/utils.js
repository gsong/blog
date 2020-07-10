export const toLocaleDateString = (date) =>
  toDateStringWithLocale(date, getLocale());

export const toDateStringWithLocale = (date, locale) =>
  new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const getLocale = () =>
  typeof window === "undefined" ? "en" : navigator.language;
