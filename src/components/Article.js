import React from "react";

import Layout from "./Layout";
import { fontSize, space } from "../styles";

const Article = ({ children, ...props }) => {
  const { date, title } = props.pageContext.frontmatter;
  const published = new Date(date).toLocaleDateString(getLocale(), {
    month: "long",
    year: "numeric",
    day: "numeric",
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

const getLocale = () =>
  typeof window === "undefined"
    ? "en"
    : navigator.languages
    ? navigator.languages[0]
    : navigator.language;

export default Article;
