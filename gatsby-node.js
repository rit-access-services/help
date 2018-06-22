/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`./src/templates/post.js`);
    resolve(
      graphql(
        `
          query AllContentfulPosts {
            allContentfulPost {
              edges {
                node {
                  id
                  slug
                  topic {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulPost.edges;
        posts.forEach((post, idx) => {
          createPage({
            path: `/${post.node.topic.slug}/${post.node.slug}-${post.node.id}/`,
            component: postTemplate,
            context: {
              slug: post.node.slug,
            },
          });
        });
      })
    );
  });
};
