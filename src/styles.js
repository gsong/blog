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

const prismStyles = {
  "code, pre": {
    '&[class*="language-"]': { fontSize: fontSize.base },
  },

  ".gatsby-highlight": {
    backgroundColor: "hsl(44, 87%, 94%)",
    borderRadius: "0.3em",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    margin: "0.5em 0",
    overflow: "auto",
    padding: "1em",

    'pre[class*="language-"]': {
      backgroundColor: "transparent",
      float: "left",
      margin: 0,
      minWidth: "100%",
      overflow: "initial",
      padding: 0,
    },
  },

  ".gatsby-highlight-code-line": {
    backgroundColor: "hsl(44, 100%, 87%)",
    borderLeft: "0.25em solid hsl(0, 100%, 80%)",
    display: "block",
    marginLeft: "-1em",
    marginRight: "-1em",
    paddingLeft: "0.75em",
    paddingRight: "1em",
  },
};

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

  a: {
    color: color.blue,
    textDecoration: "none",

    ":hover": { textDecoration: "underline" },
  },

  h1: {
    fontSize: fontSize.xl3,
    margin: 0,
  },

  h2: {
    fontSize: fontSize.xl2,
    fontWeight: 500,
    marginTop: space[8],
  },

  "ol, ul": { paddingLeft: "1.2em" },

  p: { lineHeight: 1.25 },

  select: { fontSize: fontSize.lg },

  strong: { fontWeight: 600 },

  ...prismStyles,
};
