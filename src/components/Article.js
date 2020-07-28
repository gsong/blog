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

  return (
    <Layout {...props}>
      <article>
        <h1 sx={{ color: "font.articleH1" }}>{title}</h1>
        <p>
          <a
            href={`https://github.com/gsong/personal-site/commits/main${srcPath}`}
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

    display = `${display} (updated ${updatedDisplay})`;

    a11y = [a11y, `Updated on ${updatedDisplay}`].join(". ");
  }
  return [display, a11y];
};

const link = {
  color: "font.body.0",
  fontSize: "sm",
};

export default Article;
