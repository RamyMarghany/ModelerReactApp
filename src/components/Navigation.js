import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const MainNavLink = styled(NavLink)`
  color: #17a2b8;
  text-transform: capitalize;
  margin: 0 10px;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
  &.selected {
    color: #fff;
  }
`;

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <MainNavLink activeClassName="selected" to="/" exact>
            Home
          </MainNavLink>
          <MainNavLink activeClassName="selected" to="/modeler">
            Modeler
          </MainNavLink>
          <MainNavLink activeClassName="selected" to="/frameworks">
            Frameworks
          </MainNavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
