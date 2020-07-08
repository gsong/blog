import React from "react";

import Layout from "./Layout";
import { fontSize, space } from "../styles";

const Article = ({ children, ...props }) => {
  const { date, title } = props.pageContext.frontmatter;
  const published = new Date(date).toLocaleDateString(undefined, {
    dateStyle: "long",
  });

  return (
    <Layout {...props}>
      <article>
        <h1>{title}</h1>
        <p css={{ fontSize: fontSize.base, marginBottom: space[8] }}>
          {published}
        </p>
        {children}
      </article>
    </Layout>
  );
};

export default Article;
