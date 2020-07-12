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
        fontSize: `clamp(${fontSize.base}, 6.85vw, ${fontSize.xl3})`,
        fontWeight: 700,
        margin: `0 0 0 ${space[6]}`,
        order: 1,

        // stylelint-disable-next-line media-feature-name-case
        "@media (maxWidth: 375px)": {
          hyphens: "auto",
          marginLeft: space[3],
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
