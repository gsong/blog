import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export const borderRadius = "0.3em";

export const boxShadow =
  "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";

export const color = {
  yellow: ["hsl(44, 87%, 98%)", "hsl(44, 87%, 94%)", "hsl(44, 100%, 87%)"],
  blue: "hsl(205, 80%, 40%)",
  gray: ["hsl(194, 14%, 40%)", "hsl(192, 81%, 14%)"],
  magenta: "hsl(331, 64%, 52%)",
};

export const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  xl3: "1.875rem",
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
];

const bodyWidth = "600px";
const contentWidth = "95vw";
const codeBlockWidth = "860px";
const codeBlockMargin = (compensate = "0px") =>
  `calc((min(100vw, ${codeBlockWidth}) / 2 * -1) + ${compensate})`;

const prismStyles = {
  "code, pre": {
    '&[class*="language-"]': {
      fontFamily: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Andale Mono", "Ubuntu Mono", "Courier New", monospace;`,
      fontSize: `clamp(${fontSize.xs}, 2vw, ${fontSize.sm})`,
    },
  },

  ".gatsby-highlight": {
    backgroundColor: color.yellow[1],
    borderRadius,
    boxShadow,
    margin: "0.5em 0 1.45rem",
    overflow: "auto",
    padding: "1em",

    // breakout of parent
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: codeBlockMargin(),
    marginRight: codeBlockMargin(),
    width: "100vw",
    maxWidth: codeBlockWidth,

    'pre[class*="language-"]': {
      backgroundColor: "transparent",
      float: "left",
      margin: 0,
      minWidth: "100%",
      overflow: "initial",
      padding: 0,

      "&.line-numbers": { paddingLeft: "2.8em" },
    },
  },

  ".gatsby-highlight-code-line": {
    backgroundColor: color.yellow[2],
    borderLeft: "0.25em solid hsl(0, 100%, 80%)",
    display: "block",
    marginLeft: "-1em",
    marginRight: "-1em",
    paddingLeft: "0.75em",
    paddingRight: "1em",
  },

  li: {
    ".gatsby-highlight": {
      marginBottom: "calc(1.45rem / 2)",
      marginLeft: codeBlockMargin("-0.725rem"),
    },
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
    backgroundColor: color.yellow[0],
    color: color.gray[1],
    margin: "auto",
    maxWidth: bodyWidth,
    width: contentWidth,
  },

  a: {
    color: color.blue,
    textDecoration: "none",

    ":hover": { textDecoration: "underline" },
  },

  h3: { fontWeight: "normal" },

  ...prismStyles,
};
