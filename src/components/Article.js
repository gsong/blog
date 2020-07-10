import React from "react";

import Layout from "./Layout";
import { toLocaleDateString } from "../utils";
import { color, fontSize, space } from "../styles";

const Article = ({ children, ...props }) => {
  const { date, title } = props.pageContext.frontmatter;
  const published = toLocaleDateString(date);

  return (
    <Layout {...props}>
      <article>
        <h1
          css={{
            color: color.magenta,
            fontSize: fontSize.xl3,
            fontWeight: 500,
          }}
        >
          {title}
        </h1>
        <p css={{ fontSize: fontSize.base, marginBottom: space[8] }}>
          {published}
        </p>
        {children}
      </article>
    </Layout>
  );
};

export default Article;
