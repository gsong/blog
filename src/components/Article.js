/** @jsx jsx */
import { jsx } from "theme-ui";

import Layout from "./Layout";
import { toLocaleDateString } from "../utils";

const Article = ({ children, ...props }) => {
  const { date, title } = props.pageContext.frontmatter;
  const published = toLocaleDateString(date);

  return (
    <Layout {...props}>
      <article>
        <h1 sx={{ color: "font.articleH1" }}>{title}</h1>
        <p sx={{ color: "font.body.0", fontSize: "sm" }}>{published}</p>
        {children}
      </article>
    </Layout>
  );
};

export default Article;
