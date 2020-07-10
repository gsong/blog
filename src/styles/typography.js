import Typography from "typography";

const fontFamily = [
  "system",
  "-apple-system",
  "BlinkMacSystemFont",
  "Avenir Next",
  "Helvetica Neue",
  "Segoe UI",
  "Helvetica",
  "Lucida Grande",
  "Arial",
  "sans-serif",
];

const typography = new Typography({
  baseFontSize: "18px",
  scaleRatio: 1.618,

  headerFontFamily: fontFamily,
  headerWeight: 500,

  bodyFontFamily: fontFamily,

  boldWeight: 600,
});

export default typography;
