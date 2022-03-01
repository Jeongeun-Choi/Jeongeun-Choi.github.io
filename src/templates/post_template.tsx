import { graphql } from "gatsby";
import React, { FunctionComponent } from "react";

type PostTemplateProps = {};

const post_template: FunctionComponent<PostTemplateProps> = (props) => {
  console.log(props);
  return <div>Post Template</div>;
};

export default post_template;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
