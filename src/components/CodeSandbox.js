/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

import { isBrowser, isIE11 } from "../utils";

const CodeSandbox = ({ as: As = "h2", sandbox, title, ...props }) => {
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const url = `https://codesandbox.io/s/${sandbox}`;

  return isIE11 ? (
    <p sx={{ color: "red" }}>
      ☹️ Your browser doesn’t support CodeSandbox. Use a modern browser to visit{" "}
      <a href={url}>{url}</a>.
    </p>
  ) : (
    <>
      <As>👩‍💻 Try It Out for Yourself</As>
      {shouldLoad ? (
        <>
          <p>
            <a href={url}>Play with the live code at CodeSandbox</a>.
          </p>
          <iframe
            src={`https://codesandbox.io/embed/${sandbox}?${queryParams()}`}
            title={`CodeSandbox: ${title}`}
            sx={style}
            loading="lazy"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            {...props}
          ></iframe>
        </>
      ) : (
        <p>
          <button onClick={() => setShouldLoad(true)}>Load CodeSandbox</button>
        </p>
      )}
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

const queryParams = () =>
  Object.entries(options())
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

const style = {
  border: 0,
  outline: "4px solid",
  outlineColor: "yellow.1",
  height: "clamp(150px, 60vh, 800px)",
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
