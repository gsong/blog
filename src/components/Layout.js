import React from "react";
import { Global } from "@emotion/core";
import { Link } from "gatsby";

import SEO from "./SEO";
import { color, fontSize, global, space } from "../styles";

import "prismjs/themes/prism-solarizedlight.css";

const Layout = ({ children, pageContext: { frontmatter } }) => {
  return (
    <>
      <Global styles={global} />
      <SEO {...frontmatter} />

      <header
        css={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          margin: `${space[4]} 0 ${space[8]}`,
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
          color: color.gray[0],
          fontSize: fontSize.sm,
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
