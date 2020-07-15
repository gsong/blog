/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";

import HeadShot from "../../components/HeadShot";
import Layout from "../../components/Layout";

const Home = ({ children, ...props }) => {
  return (
    <Layout header={<Header />} {...props}>
      {children}
    </Layout>
  );
};

const imageSize = 115;

const Header = () => {
  const { theme } = useThemeUI();

  return (
    <header sx={{ alignItems: "center", display: "flex", mt: 4, mb: 7, mx: 0 }}>
      <h1
        sx={{
          fontSize: `clamp(${theme.fontSizes.base}, 6.8vw, ${theme.fontSizes.xl3})`,
          fontWeight: 700,
          hyphens: "auto",
          margin: `0 0 0 ${theme.space[3]}`,
          maxWidth: 400,
          order: 1,

          // stylelint-disable-next-line media-feature-name-case
          "@media (min-width: 440px)": {
            hyphens: "none",
            marginLeft: 6,
          },
        }}
      >
        👋 I’m George. I help development teams be more effective.
      </h1>

      <HeadShot
        sx={{
          borderRadius: `${theme.radii[1]} 30px`,
          maxHeight: imageSize,
          maxWidth: imageSize,
          minHeight: imageSize,
          minWidth: imageSize,
        }}
      />
    </header>
  );
};

export default Home;
