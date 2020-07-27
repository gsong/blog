/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "./Layout";
import { toLocaleDateString } from "../utils";

const Article = ({ children, ...props }) => {
  const {
    frontmatter: { title, published, updated },
    srcPath,
  } = props.pageContext;
  const [displayDate, a11yDate] = makeDates(published, updated);
  const href = makeGitHubUrl(props.uri, srcPath);

  return (
    <Layout {...props}>
      <article>
        <h1 sx={{ color: "font.articleH1" }}>{title}</h1>
        <p>
          <a
            {...{ href }}
            sx={link}
            className="link-hover"
            aria-label={a11yDate}
          >
            {displayDate}
          </a>
        </p>
        {children}
      </article>
    </Layout>
  );
};

const makeDates = (published, updated) => {
  let display = toLocaleDateString(published);
  let a11y = `Published on ${display}`;
  if (updated) {
    const updatedDisplay = toLocaleDateString(updated);
    display = [
      `Published ${display}`,
      `updated ${toLocaleDateString(updated)}`,
    ].join(", ");
    a11y = [a11y, `updated on ${updatedDisplay}`].join(", ");
  }
  return [display, a11y];
};

const makeGitHubUrl = (uri, srcPath) => {
  const relativePath = srcPath.slice(srcPath.indexOf(uri));
  return `https://github.com/gsong/personal-site/commits/main/content${relativePath}`;
};

const link = {
  color: "font.body.0",
  fontSize: "sm",
};

export default Article;
