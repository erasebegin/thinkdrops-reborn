import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import favicon16 from "../favicon/favicon-16x16.png";
import favicon32 from "../favicon/favicon-32x32.png";

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost");

    return (
      <div style={{ background: "#fff" }}>
        <Helmet
          title={`${post.title} | Thinkdrops`}
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
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: "block",
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
