import Img from "gatsby-image";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const HeadShot = (props) => {
  const data = useStaticQuery(query);

  return <Img fixed={data.file.childImageSharp.fixed} {...props} />;
};

const query = graphql`
  query HeaderImageQuery {
    file(relativePath: { eq: "gs-headshot.jpg" }) {
      childImageSharp {
        fixed(quality: 80, width: 115) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default HeadShot;
