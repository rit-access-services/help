// Template for Contentful "Post" content type
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const PostTemplate = ({ data }) => {
  const post = data.contentfulPost;
  return (
    <Wrapper>
      <Helmet title={`${post.name} | ${data.site.siteMetadata.title}`} />
      <Title>{post.name}</Title>
      <TitleMeta>Last modified {post.updatedAt}</TitleMeta>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content.childMarkdownRemark.html,
        }}
      />
      {post.relatedPosts && <h3>Related Posts</h3>}
      <ul>
        {post.relatedPosts &&
          post.relatedPosts.map(p => (
            <li key={`${p.name}-${p.id}`}>
              <Link to={`/${p.topic.slug}/${p.slug}-${p.id}/`}>{p.name}</Link>
            </li>
          ))}
      </ul>
    </Wrapper>
  );
};

export default PostTemplate;

const Wrapper = styled('div')`
  padding: 20px;
`;

const Title = styled('h1')`
  margin-bottom: 10px;
`;

const TitleMeta = styled('p')`
  color: #9ea3ad;
  font-size: 12px;
`;

export const pageQuery = graphql`
  query ContentfulPost($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      id
      name
      slug
      updatedAt(formatString: "MMMM Do, YYYY")
      topic {
        name
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      relatedPosts {
        id
        name
        slug
        topic {
          slug
        }
      }
    }
  }
`;
