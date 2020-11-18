/** @jsx jsx */
import React from "react";
import { Global } from "@emotion/core";
import { Link } from "gatsby";
import { jsx } from "theme-ui";

import HeadShot from "./HeadShot";
import SEO from "./SEO";
import { Email, GitHub, Instagram, LinkedIn, Rss, Twitter } from "./icons";
import { global, header } from "../styles";

const Layout = ({
  children,
  header = <Header />,
  pageContext: { frontmatter },
}) => (
  <React.Fragment>
    <Global styles={global} />
    <SEO {...frontmatter} />

    {header}

    <main>{children}</main>

    <footer
      sx={{
        alignItems: "center",
        color: "font.body.0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 4,
        marginTop: 7,
      }}
    >
      <Link
        to="/"
        sx={{ color: "font.body.0", py: 3 }}
        aria-label="Return to homepage"
      >
        George Song &copy; {new Date().getFullYear()}
      </Link>
      <div
        sx={{
          display: "flex",
          fontSize: "xl",

          "@media (min-width: 470px)": {
            marginLeft: "auto",
          },
        }}
      >
        <SocialLink
          href="https://twitter.com/zukefresh"
          aria-label="Visit my Twitter"
        >
          <Twitter />
        </SocialLink>

        <SocialLink
          href={`mailto:george@gsong.dev?subject=${encodeURIComponent(
            frontmatter.title,
          )}`}
          aria-label="Email me"
        >
          <Email />
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
        <SocialLink
          href="/articles/rss.xml"
          aria-label="Subscribe to My RSS Feed"
        >
          <Rss />
        </SocialLink>
      </div>
    </footer>
  </React.Fragment>
);

const imageSize = 50;

const Header = () => (
  <header sx={header}>
    <h1>
      <Link
        to="/"
        sx={{
          alignItems: "center",
          color: "font.body.1",
          display: "flex",
          fontSize: "lg",

          // stylelint-disable-next-line
          ":focus,:hover": { textDecoration: "none" },
        }}
        aria-label="Return to homepage"
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
      color: "font.body.0",
      transition: "transform .2s ease-in-out",
      ":focus,:hover": {
        "@media (prefers-reduced-motion: no-preference)": {
          transform: "scale(1.25)",
        },
      },
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
