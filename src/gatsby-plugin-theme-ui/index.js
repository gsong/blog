const palette = {
  blue: ["hsl(205, 50%, 50%)", "hsl(205, 80%, 40%)"],
  gray: ["hsl(194, 14%, 40%)", "hsl(192, 81%, 14%)"],
  magenta: "hsl(331, 64%, 52%)",
  red: "hsl(0, 71%, 52%)",
  yellow: ["hsl(44, 87%, 98%)", "hsl(44, 87%, 94%)", "hsl(44, 100%, 87%)"],
};

export default {
  colors: {
    ...palette,
    background: palette.yellow,
    button: palette.blue,
    font: { articleH1: palette.magenta, body: palette.gray },
    link: palette.blue[1],
    warning: palette.red,
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xl3: "1.875rem",
  },

  radii: [0, "0.3em"],

  shadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },

  space: [
    0,
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.5rem",
  ],
};
