import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const Sidebar = ({ data }) => (
  <SidebarWrapper>
    <SidebarNav>
      {data.allContentfulTopic.edges.map(({ node }) => (
        <SidebarNavItem key={node.id}>
          <Topic>{node.name}</Topic>
          <SidebarSubNav>
            {node.post.map(p => (
              <SidebarNavSubItem key={p.id}>
                <Link
                  to={`/${node.slug}/${p.slug}-${p.id}/`}
                  activeStyle={{ borderLeft: '4px solid #f16e30' }}
                >
                  {p.name}
                </Link>
              </SidebarNavSubItem>
            ))}
          </SidebarSubNav>
        </SidebarNavItem>
      ))}
    </SidebarNav>
  </SidebarWrapper>
);

export default Sidebar;

const SidebarWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: sticky;
  min-width: 300px;
  background-color: #fbfafc;
  min-height: 100vh;
`;

const SidebarNav = styled('ul')`
  margin: 0;
  list-style: none;
`;

const SidebarNavItem = styled('li')`
  margin: 20px 20px 0 15px;
`;

const SidebarSubNav = styled(SidebarNav)``;

const SidebarNavSubItem = styled('li')`
  margin: 10px 0 0 0;
  a {
    padding: 3px 0;
    color: #000;
    transition: all 0.3s ease;
    text-decoration: none;
    border-left: 4px solid transparent;
    padding-left: 5px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    letter-spacing: 0.3px;
  }

  a:hover {
    color: #000;
    border-left: 4px solid #f16e30;
  }

  a:visited {
    color: #000;
  }
`;

const Topic = styled('h4')`
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  margin-top: 0;
  margin-bottom: 0;
  color: #f16e30;
  font-size: 0.75786rem;
`;
