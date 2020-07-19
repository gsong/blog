/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

import { iframe } from "./styles";
import { isIE11 } from "../utils";

const Repl = ({ repl, title, ...props }) => {
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const url = `https://repl.it/@gsong/${repl}`;

  return isIE11 ? (
    <p sx={{ color: "warning" }}>
      ☹️ Your browser doesn’t support Repl.it. Use a modern browser to visit{" "}
      <a href={url}>{url}</a>.
    </p>
  ) : shouldLoad ? (
    <>
      <p>
        <a href={url}>Play with the live code at Repl.it</a>.
      </p>
      <iframe
        src={`${url}?lite=true`}
        title={`Repl: ${title}`}
        sx={iframe}
        loading="lazy"
        scrolling="no"
        frameBorder="no"
        allowtransparency="true"
        allowFullScreen="true"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        {...props}
      ></iframe>
    </>
  ) : (
    <p>
      <button onClick={() => setShouldLoad(true)}>Load Repl</button>
    </p>
  );
};

export default Repl;
