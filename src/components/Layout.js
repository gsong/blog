/** @jsx jsx */
import React from "react";
import { Global } from "@emotion/core";
import { Link } from "gatsby";
import { jsx } from "theme-ui";

import HeadShot from "./HeadShot";
import SEO from "./SEO";
import { Email, GitHub, Instagram, LinkedIn, Rss, Twitter } from "./icons";
import { contentWidth, global, header } from "../styles";

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
    <Footer title={frontmatter.title} />
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
        className="link-hover"
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

const Footer = ({ title }) => (
  <footer sx={{ marginBottom: 4, marginTop: 7 }}>
    <Subscribe />
    <div
      sx={{
        alignItems: "center",
        color: "font.body.0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Link
        to="/"
        sx={{ color: "font.body.0", py: 3 }}
        className="link-hover"
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
          href={`mailto:george@gsong.dev?subject=${encodeURIComponent(title)}`}
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
    </div>
  </footer>
);

const Subscribe = () => (
  <form
    action="https://app.convertkit.com/forms/1555622/subscriptions"
    method="post"
    sx={{
      alignItems: "flex-end",
      display: "flex",
      flexWrap: "wrap",

      "> *": {
        ":not(:first-child)": { marginTop: 2 },

        "@media (min-width: 560px)": {
          ":not(:first-child)": { marginTop: 0 },
          ":not(:last-child)": { marginRight: 2 },
        },
      },

      "> label": { flexGrow: 1 },

      input: { width: "100%" },

      "@media (max-width: 560px)": {
        button: { marginLeft: "auto" },
        input: { width: contentWidth },
      },
    }}
  >
    <label sx={{ width: "min-content" }}>
      First name
      <input name="fields[first_name]" placeholder="Pat" />
    </label>

    <label sx={{ width: "min-content" }}>
      Email
      <input
        type="email"
        name="email_address"
        placeholder="pat@me.com"
        required
      />
    </label>
    <button>Subscribe</button>
  </form>
);

const SocialLink = ({ children, ...props }) => (
  <a {...props} sx={{ color: "font.body.0" }} className="link-hover">
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
