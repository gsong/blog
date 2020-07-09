import React from "react";
import { Global } from "@emotion/core";
import { Link } from "gatsby";

import SEO from "./SEO";
import { fontSize, global, space } from "../styles";

import "prismjs/themes/prism-solarizedlight.css";

const Layout = ({
  children,
  pageContext: {
    frontmatter: { title, keywords = [] },
  },
}) => {
  return (
    <>
      <Global styles={global} />
      <SEO {...{ title, keywords }} />

      <header
        css={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          margin: `${space[4]} 0 ${space[10]}`,
        }}
      >
        <h1 css={{ margin: "auto" }}>
          <Link to="/" css={{ ":hover": { textDecoration: "none" } }}>
            gsong.dev
          </Link>
        </h1>
      </header>

      <main>{children}</main>

      <footer
        css={{
          fontSize: fontSize.base,
          marginTop: space[8],
          marginBottom: space[4],
        }}
      >
        George Song &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Layout;
