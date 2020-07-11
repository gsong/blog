import React from "react";

import { isBrowser } from "../utils";

const CodeSandbox = ({ sandbox, title, ...props }) => (
  <>
    <h2>Try It Out for Yourself</h2>
    <p>
      <a href={`https://codesandbox.io/s/${sandbox}`}>
        Play with the live code at CodeSandbox
      </a>
      .
    </p>
    <iframe
      src={`https://codesandbox.io/embed/${sandbox}?${queryParams}`}
      title={`CodeSandbox: ${title}`}
      css={style}
      loading="lazy"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      {...props}
    ></iframe>
  </>
);

const options = () => {
  const base = {
    codemirror: 1,
    fontsize: 14,
    hidedevtools: 1,
    hidenavigation: 1,
    module: "/src/App.js",
    theme: "light",
  };

  const view = isBrowser
    ? window.matchMedia("(max-width: 600px)").matches
      ? "editor"
      : "split"
    : "split";

  return { ...base, view };
};

const queryParams = Object.entries(options())
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
