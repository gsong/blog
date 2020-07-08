import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./layout.css";
import Header from "./header";

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  return (
    <>
      <Header siteTitle={title} />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
