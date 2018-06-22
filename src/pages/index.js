import React from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';

const IndexPage = () => (
  <div
    css={`
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
    `}
  >
    <h1
      css={`
        text-align: center;
      `}
    >
      Hello and Welcome to Help @DASPDP
    </h1>
    <h2
      css={`
        text-align: center;
      `}
    >
      Browse the Help Topics on the left sidebar to get started.
    </h2>
  </div>
);

export default IndexPage;
