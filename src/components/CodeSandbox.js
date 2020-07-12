import React from "react";

import { color } from "../styles";
import { isBrowser, isIE11 } from "../utils";

const CodeSandbox = ({ as: As = "h2", sandbox, title, ...props }) => {
  const url = `https://codesandbox.io/s/${sandbox}`;

  return isIE11 ? (
    <p css={{ color: color.red }}>
      ☹️ Your browser doesn’t support CodeSandbox. Use a modern browser to visit{" "}
      <a href={url}>{url}</a>.
    </p>
  ) : (
    <>
      <As>Try It Out for Yourself</As>
      <p>
        <a href={url}>Play with the live code at CodeSandbox</a>.
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
};

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
  boxShadow: `0 0 0 4px ${color.yellow[1]}`,
  height: "clamp(150px, 30vh, 500px)",
  overflow: "hidden",

  // breakout of parent
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  width: "100vw",
};

export default CodeSandbox;
