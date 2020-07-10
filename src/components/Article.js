import React from "react";

import Layout from "./Layout";
import { toLocaleDateString } from "../utils";
import { color, fontSize } from "../styles";

const Article = ({ children, ...props }) => {
  const { date, title } = props.pageContext.frontmatter;
  const published = toLocaleDateString(date);

  return (
    <Layout {...props}>
      <article>
        <h1 css={{ color: color.magenta }}>{title}</h1>
        <p css={{ color: color.gray[0], fontSize: fontSize.sm }}>{published}</p>
        {children}
      </article>
    </Layout>
  );
};

export default Article;
