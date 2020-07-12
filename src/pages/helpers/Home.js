import React from "react";

import HeadShot from "../../components/HeadShot";
import Layout from "../../components/Layout";
import { borderRadius, fontSize, space } from "../../styles";

const Home = ({ children, ...props }) => {
  return (
    <Layout header={<Header />} {...props}>
      {children}
    </Layout>
  );
};

const imageSize = 115;

const Header = () => (
  <header
    css={{
      alignItems: "center",
      display: "flex",
      margin: `${space[4]} 0 ${space[7]}`,
    }}
  >
    <h1
      css={{
        fontSize: `clamp(${fontSize.base}, 6.8vw, ${fontSize.xl3})`,
        fontWeight: 700,
        hyphens: "auto",
        margin: `0 0 0 ${space[3]}`,
        maxWidth: 400,
        order: 1,

        // stylelint-disable-next-line media-feature-name-case
        "@media (min-width: 440px)": {
          hyphens: "none",
          marginLeft: space[6],
        },
      }}
    >
      👋 I’m George. I help development teams be more effective.
    </h1>

    <HeadShot
      css={{
        borderRadius: `${borderRadius} 30px`,
        maxHeight: imageSize,
        maxWidth: imageSize,
        minHeight: imageSize,
        minWidth: imageSize,
      }}
    />
  </header>
);

export default Home;
