export const color = {
  yellow: "hsl(44, 87%, 98%)",
  blue: "hsl(205, 80%, 40%)",
  gray: "hsl(192, 81%, 14%)",
  magenta: "hsl(331, 64%, 52%)",
};

// https://tailwindcss.com/docs/font-size/
export const fontSize = {
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  xl2: "1.5rem",
  xl3: "1.875rem",
  xl4: "2.25rem",
};

// https://tailwindcss.com/docs/margin
export const space = [
  0,
  "0.25rem",
  "0.5rem",
  "0.75rem",
  "1rem",
  "1.25rem",
  "1.5rem",
  "2rem",
  "2.5rem",
  "3rem",
  "4rem",
];

export const global = {
  html: {
    boxSizing: "border-box",
  },

  "*, *:before, *:after": {
    boxSizing: "inherit",
  },

  body: {
    backgroundColor: color.yellow,
    color: color.gray,
    fontFamily: `system, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif`,
    fontSize: fontSize.xl,
    margin: "auto",
    maxWidth: 600,
    width: "95vw",
  },

  article: {
    h1: {
      color: color.magenta,
      fontSize: fontSize.xl4,
      fontWeight: 500,
    },
  },

  a: {
    color: color.blue,
    textDecoration: "none",

    ":hover": { textDecoration: "underline" },
  },

  "code, pre": {
    "&[class*='language-']": { fontSize: fontSize.base },
  },

  h1: {
    fontSize: fontSize.xl3,
    margin: 0,
  },

  h2: {
    fontSize: fontSize.xl2,
    fontWeight: 500,
  },

  strong: { fontWeight: 600 },
};
