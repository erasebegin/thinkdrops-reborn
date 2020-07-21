import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import styles from "./blog.module.css";
import ArticlePreview from "../components/article-preview";
import favicon16 from "../favicon/favicon-16x16.png";
import favicon32 from "../favicon/favicon-32x32.png";

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, "props.data.allContentfulBlogPost.edges");

    return (
      <div style={{ background: "#fff" }}>
        <Helmet
          title="Thinkdrops"
          link={[
            {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: `${favicon16}`,
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: `${favicon32}`,
            },
          ]}
        />
        <div className={styles.hero}>Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
