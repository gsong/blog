/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";

import HeadShot from "../../components/HeadShot";
import Layout from "../../components/Layout";
import { header } from "../../styles";

const Home = ({ children, ...props }) => {
  return (
    <Layout header={<Header />} {...props}>
      {children}
    </Layout>
  );
};

const Header = () => {
  const { theme } = useThemeUI();

  return (
    <header sx={{ ...header, alignItems: "center", display: "flex" }}>
      <h1
        sx={{
          fontSize: `clamp(${theme.fontSizes.base}, 6.8vw, ${theme.fontSizes.xl3})`,
          fontWeight: 700,
          hyphens: "auto",
          letterSpacing: "-0.025em",
          margin: `0 0 0 ${theme.space[3]}`,
          order: 1,

          // stylelint-disable-next-line media-feature-name-case
          "@media (min-width: 440px)": {
            hyphens: "none",
            marginLeft: 6,
          },
        }}
      >
        👋 I’m George. I help software teams be more effective.
      </h1>

      <HeadShot
        sx={{ borderRadius: `${theme.radii[1]} 30px`, flexShrink: 0 }}
      />
    </header>
  );
};

export default Home;
