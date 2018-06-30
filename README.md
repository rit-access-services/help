# Help Docs

A [Gatsby.js](https://www.gatsbyjs.org) site using [Contentful](https://contentful.com) API to drive doc generation and [Netlify](https://netlify.com) to host the static site.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Setup

Install dependencies:

```sh
yarn install
```

Alternatively, `npm install`.

Run the development server:

```sh
gatsby develop
```

## Algolia DocSearch

We get our document search for free through Algolia, emails about it are on the daspd@rit.edu email

Our config is stored at:
https://github.com/algolia/docsearch-configs/blob/master/configs/daspdp.json

We can make PRs to that to change the selectors if our content structure significantly changes.

To customize the search check the documentation:
https://community.algolia.com/docsearch/documentation/

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rit-access-services/help)
