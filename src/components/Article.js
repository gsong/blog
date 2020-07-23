/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "./Layout";
import { toLocaleDateString } from "../utils";

const Article = ({ children, ...props }) => {
  const {
    frontmatter: { date, title },
    srcPath,
  } = props.pageContext;
  const published = toLocaleDateString(date);
  const href = makeGitHubUrl(props.uri, srcPath);

  return (
    <Layout {...props}>
      <article>
        <h1 sx={{ color: "font.articleH1" }}>{title}</h1>
        <p>
          <a {...{ href }} sx={link}>
            {published}
          </a>
        </p>
        {children}
      </article>
    </Layout>
  );
};

const makeGitHubUrl = (uri, srcPath) => {
  const relativePath = srcPath.slice(srcPath.indexOf(uri));
  return `https://github.com/gsong/personal-site/commits/main/content${relativePath}`;
};

const link = {
  color: "font.body.0",
  fontSize: "sm",

  ":hover": { color: "link" },
};

export default Article;
