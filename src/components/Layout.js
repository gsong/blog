import React from "react";
import { Global } from "@emotion/core";
import { Link } from "gatsby";

import HeadShot from "./HeadShot";
import SEO from "./SEO";
import { color, fontSize, global, space } from "../styles";

import "prismjs/themes/prism-solarizedlight.css";

const Layout = ({
  children,
  header = <Header />,
  pageContext: { frontmatter },
}) => {
  return (
    <>
      <Global styles={global} />
      <SEO {...frontmatter} />

      {header}

      <main>{children}</main>

      <footer
        css={{
          color: color.gray[0],
          fontSize: fontSize.sm,
          marginTop: space[2],
          marginBottom: space[4],
        }}
      >
        George Song &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
};

const imageSize = 50;

const Header = () => (
  <header css={{ margin: `${space[4]} 0 ${space[7]}` }}>
    <h1>
      <Link
        to="/"
        css={{
          alignItems: "center",
          color: color.gray[1],
          display: "flex",
          fontSize: fontSize.lg,

          ":hover": { textDecoration: "none" },
        }}
      >
        <HeadShot
          css={{
            borderRadius: "50%",
            maxWidth: imageSize,
            maxHeight: imageSize,
          }}
        />
        <div css={{ marginLeft: space[3] }}>George Song</div>
      </Link>
    </h1>
  </header>
);

export default Layout;
