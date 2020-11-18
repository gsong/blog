// **DO NOT** change the order of the css imports
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const bodyWidth = "600px";
const contentWidth = "95vw";
const codeBlockWidth = "860px";
const codeBlockMargin = (compensate = "0px") =>
  `calc((min(100vw, ${codeBlockWidth}) / 2 * -1) + ${compensate})`;

export const global = (theme) => {
  const { colors, radii, shadows, space } = theme;

  return {
    html: {
      boxSizing: "border-box",
    },

    "*, *:before, *:after": {
      boxSizing: "inherit",
    },

    body: {
      backgroundColor: colors.background[0],
      color: colors.font.body[1],
      margin: "auto",
      maxWidth: bodyWidth,
      width: contentWidth,
    },

    a: {
      color: colors.link,
      textDecoration: "none",

      ":focus,:hover": { color: colors.link, textDecoration: "underline" },
    },

    blockquote: {
      p: {
        borderLeft: "5px solid lightgray",
        paddingLeft: `${space[3]}`,
      },
    },

    button: {
      backgroundColor: colors.button[0],
      border: 0,
      borderRadius: radii[1],
      boxShadow: shadows.md,
      color: "white",
      padding: `${space[2]} ${space[4]}`,

      ":active": { boxShadow: shadows.base },
      ":focus,:hover": { backgroundColor: colors.button[1], cursor: "pointer" },
    },

    mark: { color: colors.font.body[1] },

    p: {
      "> img": { display: "block", margin: "auto" },
    },

    ".header-link": { paddingLeft: space[2], paddingRight: space[2] },

    ...prismStyles(theme),
  };
};

const prismStyles = ({ colors, fontSizes, radii, shadows }) => ({
  "code, pre": {
    '&[class*="language-"]': {
      fontFamily: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Andale Mono", "Ubuntu Mono", "Courier New", monospace;`,
      fontSize: `clamp(${fontSizes.xs}, 2vw, ${fontSizes.sm})`,
      fontVariantLigatures: "none",
    },
  },

  ".gatsby-highlight": {
    backgroundColor: colors.background[1],
    borderRadius: radii[1],
    boxShadow: shadows.sm,
    margin: "0.5em 0 1.45rem",
    overflow: "auto",
    padding: "1em",

    "@supports (display: grid)": {
      // breakout of parent
      position: "relative",
      left: "50%",
      right: "50%",
      marginLeft: codeBlockMargin(),
      marginRight: codeBlockMargin(),
      width: "100vw",
      maxWidth: codeBlockWidth,
    },

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
    backgroundColor: colors.background[2],
    borderLeft: "0.25em solid hsl(0, 100%, 80%)",
    display: "block",
    marginLeft: "-1em",
    marginRight: "-1em",
    paddingLeft: "0.75em",
    paddingRight: "1em",
  },

  "h2,h3": {
    'code[class*="language-"]': {
      backgroundColor: "unset",
      color: "unset",
      padding: 0,
      fontSize: "inherit",
      lineHeight: "inherit",

      "::selection": { backgroundColor: "highlight" },
    },
  },

  li: {
    ".gatsby-highlight": {
      marginBottom: "calc(1.45rem / 2)",

      "@supports (display: grid)": {
        marginLeft: codeBlockMargin("-0.725rem"),
      },
    },
  },
});

export const header = { marginTop: 4, marginBottom: 7, marginX: 0 };
