import React from "react";
import { Global } from "@emotion/core";
import { Link } from "gatsby";

import { colors } from "../styles";

const Layout = (props) => {
  console.log(props);

  const { children } = props;

  return (
    <>
      <Global styles={global} />
      <header
        css={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <h1>
          <Link
            to="/"
            css={{
              color: colors.text,
              ":hover": { color: colors.link, textDecoration: "none" },
            }}
          >
            George
          </Link>
        </h1>
        <nav>
          <Link to="/articles">Articles</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer css={{ marginTop: 20 }}>
        George Song &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
};

const global = {
  html: {
    boxSizing: "border-box",
  },

  "*, *:before, *:after": {
    boxSizing: "inherit",
  },

  body: {
    backgroundColor: colors.background,
    color: colors.text,
    fontFamily: `system, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif`,
    maxWidth: 600,
    margin: "auto",
  },

  a: {
    color: colors.link,
    textDecoration: "none",

    ":hover": { textDecoration: "underline" },
  },

  h1: { margin: 0 },
};

export default Layout;
