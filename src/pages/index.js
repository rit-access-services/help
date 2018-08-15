import React from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';

const IndexPage = () => (
  <div
    css={`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      padding: 0 50px;
    `}
  >
    <h1
      css={`
        text-align: center;
      `}
    >
      Sometimes you just need a little help.
    </h1>
    <h2
      css={`
        text-align: center;
      `}
    >
      Browse the help topics on the left sidebar, or use the global search in
      the navbar to get started.
    </h2>
  </div>
);

export default IndexPage;
