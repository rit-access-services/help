import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Page from '../components/page';
import Sidebar from '../components/sidebar';
import Content from '../components/content';
import './reset.css';
import '../shared/globalStyles';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header logo={data.logo} algolia={data.site.siteMetadata.algolia} />
    <Page>
      <Sidebar data={data} />
      <Content>{children()}</Content>
    </Page>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const siteMetadataQuery = graphql`
  query SiteData {
    site {
      siteMetadata {
        title
        description
        keywords
        algolia {
          apiKey
          indexName
        }
      }
    }
    logo: imageSharp(id: { regex: "/2017-pdp-logo-white.png/" }) {
      sizes(quality: 100) {
        aspectRatio
        src
      }
    }
    allContentfulTopic {
      edges {
        node {
          id
          name
          slug
          post {
            id
            name
            slug
          }
        }
      }
    }
  }
`;
