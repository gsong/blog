import React from "react";

import { borderRadius, boxShadow } from "../styles";

const CodeSandbox = ({ sandbox, title, ...props }) => (
  <iframe
    src={`https://codesandbox.io/embed/${sandbox}?codemirror=1&fontsize=14&hidenavigation=1&theme=light`}
    css={style}
    title={`CodeSandbox: ${title}`}
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    {...props}
  ></iframe>
);

const style = {
  border: 0,
  borderRadius,
  boxShadow,
  height: "min(40vh, 500px)",
  overflow: "hidden",
  width: "100%",
};

export default CodeSandbox;
