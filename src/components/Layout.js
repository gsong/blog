/** @jsx jsx */
import React from "react";
import { Global } from "@emotion/core";
import { Link } from "gatsby";
import { jsx } from "theme-ui";

import GitHub from "./icons/GitHub";
import HeadShot from "./HeadShot";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import SEO from "./SEO";
import Twitter from "./icons/Twitter";
import { global } from "../styles";

const Layout = ({
  children,
  header = <Header />,
  pageContext: { frontmatter },
}) => {
  return (
    <React.Fragment>
      <Global styles={global} />
      <SEO {...frontmatter} />

      {header}

      <main>{children}</main>

      <footer
        sx={{
          alignItems: "center",
          color: "gray.0",
          display: "flex",
          flexWrap: "wrap",
          fontSize: "sm",
          justifyContent: "space-between",
          marginBottom: 4,
          marginTop: 2,
        }}
      >
        <div>George Song &copy; {new Date().getFullYear()}</div>
        <div sx={{ display: "flex", fontSize: "xl" }}>
          <SocialLink
            href="https://twitter.com/zukefresh"
            aria-label="Visit my Twitter"
          >
            <Twitter />
          </SocialLink>

          <SocialLink
            href="https://github.com/gsong/personal-site"
            aria-label="Visit my GitHub"
          >
            <GitHub />
          </SocialLink>

          <SocialLink
            href="https://www.instagram.com/zukefresh/"
            aria-label="Visit my Instagram"
          >
            <Instagram />
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/in/gsong/"
            aria-label="Visit my LinkedIn"
          >
            <LinkedIn />
          </SocialLink>
        </div>
      </footer>
    </React.Fragment>
  );
};

const imageSize = 50;

const Header = () => (
  <header sx={{ mt: 4, mb: 7, mx: 0 }}>
    <h1>
      <Link
        to="/"
        sx={{
          alignItems: "center",
          color: "gray.1",
          display: "flex",
          fontSize: "lg",

          // stylelint-disable-next-line
          ":focus,:hover": { color: "blue.1", textDecoration: "none" },
        }}
      >
        <HeadShot
          sx={{
            borderRadius: "50%",
            maxWidth: imageSize,
            maxHeight: imageSize,
          }}
        />
        <div sx={{ ml: 3 }}>George Song</div>
      </Link>
    </h1>
  </header>
);

const SocialLink = ({ children, ...props }) => (
  <a
    {...props}
    sx={{
      color: "gray.0",

      // stylelint-disable-next-line
      ":focus,:hover": { color: "blue.1" },
    }}
  >
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "48px",
        width: "48px",
      }}
    >
      {children}
    </div>
  </a>
);

export default Layout;
