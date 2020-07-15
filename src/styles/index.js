// **DO NOT** change the order of the css imports
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const bodyWidth = "600px";
const contentWidth = "95vw";
const codeBlockWidth = "860px";
const codeBlockMargin = (compensate = "0px") =>
  `calc((min(100vw, ${codeBlockWidth}) / 2 * -1) + ${compensate})`;

const prismStyles = ({ colors, fontSizes, radii, shadows }) => ({
  "code, pre": {
    '&[class*="language-"]': {
      fontFamily: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Andale Mono", "Ubuntu Mono", "Courier New", monospace;`,
      fontSize: `clamp(${fontSizes.xs}, 2vw, ${fontSizes.sm})`,
    },
  },

  ".gatsby-highlight": {
    backgroundColor: colors.yellow[1],
    borderRadius: radii[1],
    boxShadow: shadows.base,
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
    backgroundColor: colors.yellow[2],
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

      "@supports (display: grid)": {
        marginLeft: codeBlockMargin("-0.725rem"),
      },
    },
  },
});

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
      backgroundColor: colors.yellow[0],
      color: colors.gray[1],
      margin: "auto",
      maxWidth: bodyWidth,
      width: contentWidth,
    },

    a: {
      color: colors.blue[1],
      textDecoration: "none",

      ":focus,:hover": { textDecoration: "underline" },
    },

    button: {
      backgroundColor: colors.blue[0],
      border: 0,
      borderRadius: radii[1],
      boxShadow: shadows.md,
      color: "white",
      padding: `${space[2]} ${space[4]}`,

      ":active": { boxShadow: shadows.base },
      ":focus,:hover": { backgroundColor: colors.blue[1], cursor: "pointer" },
    },

    h3: { fontWeight: "normal" },

    ...prismStyles(theme),
  };
};
