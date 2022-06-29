import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <Navbar>
        <Nav>
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to="/images">
            Product
          </Nav.Link>
        </Nav>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
