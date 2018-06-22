import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const Header = ({ logo }) => (
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
      <NavItem>
        <a href="https://daspdp.org">Back to daspdp</a>
      </NavItem>
    </NavItems>
  </Navbar>
);

export default Header;

const Navbar = styled('div')`
  background: #000;
  display: flex;
  min-height: 50px;
`;

const Branding = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    height: 50px;
  }

  img {
    margin: 0;
  }
`;

const SiteTitle = styled('div')`
  flex: 2;
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

const NavItem = styled('li')`
  margin: 0 10px 0;
  a {
    color: #d2dffd;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
    border-bottom: 2px solid #fff;
  }

  a:visited {
    color: #d2dffd;
  }
`;
