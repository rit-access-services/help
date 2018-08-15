import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Search from './search';

const Header = ({ logo, algolia }) => (
  <Navbar>
    <Branding>
      <Link to="/">
        <img
          src={logo.sizes.src}
          height="50px"
          width={50 * logo.sizes.aspectRatio}
        />
      </Link>
    </Branding>
    <SiteTitle>
      <h1>DAS PDP Help Docs</h1>
    </SiteTitle>
    <NavItems>
      <NavItem
        css={`
          :hover {
            border-bottom: 2px solid transparent;
          }
        `}
      >
        <Search algolia={algolia} />
      </NavItem>
      <NavItem href="https://daspdp.org/about/contact/">
        <li>Contact Support</li>
      </NavItem>
      <NavItem href="https://daspdp.org">
        <li>Return to daspdp</li>
      </NavItem>
    </NavItems>
  </Navbar>
);

export default Header;

const Navbar = styled('div')`
  background: #0e1e25;
  display: flex;
  min-height: 50px;
`;

const Branding = styled('div')`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    height: 50px;
  }

  img {
    margin: 0;
  }
`;

const SiteTitle = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    margin: 0;
    font-size: 20px;
  }
`;

const NavItems = styled('ul')`
  flex: 1;
  align-items: center;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;

const NavItem = styled('a')`
  color: #d2dffd;
  font-size: 14px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  text-decoration: none;
  margin: 0 10px;
  :hover {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
  :visited {
    color: #d2dffd;
  }
  li {
    padding: 0 2px;
    margin: 0;
  }
`;
