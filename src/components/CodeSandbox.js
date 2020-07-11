import React from "react";

const CodeSandbox = ({ sandbox, title, ...props }) => (
  <iframe
    src={`https://codesandbox.io/embed/${sandbox}?${queryParams}`}
    css={style}
    title={`CodeSandbox: ${title}`}
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    {...props}
  ></iframe>
);

const options = {
  codemirror: 1,
  fontsize: 14,
  hidedevtools: 1,
  hidenavigation: 1,
  module: "/src/App.js",
  theme: "light",
  view: "split",
};

const queryParams = Object.entries(options)
  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  .join("&");

const style = {
  border: 0,
  height: "clamp(150px, 30vh, 500px)",
  overflow: "hidden",

  // breakout of parent
  left: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  position: "relative",
  right: "50%",
  width: "100vw",
};

export default CodeSandbox;
