import React from "react";
import { Global } from "@emotion/core";
import { Link } from "gatsby";

import GitHub from "./icons/GitHub";
import HeadShot from "./HeadShot";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";
import SEO from "./SEO";
import Twitter from "./icons/Twitter";
import { color, fontSize, global, space } from "../styles";

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
          alignItems: "center",
          color: color.gray[0],
          display: "flex",
          flexWrap: "wrap",
          fontSize: fontSize.sm,
          justifyContent: "space-between",
          marginBottom: space[4],
          marginTop: space[2],
        }}
      >
        <div>George Song &copy; {new Date().getFullYear()}</div>
        <div css={{ display: "flex", fontSize: fontSize.xl }}>
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

          ":hover": {
            color: color.blue,
            textDecoration: "none",
          },
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

const SocialLink = ({ children, ...props }) => (
  <a {...props} css={{ color: color.gray[0], ":hover": { color: color.blue } }}>
    <div
      css={{
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
