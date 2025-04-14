import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #333;
  padding: 1rem;
  color: white;
`;

const NavItem = styled(Link)`
  color: white;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavItem to="/ajouter">Ajouter Préférence</NavItem>
      <NavItem to="/liste">Liste des Préférences</NavItem>
    </Nav>
  );
}

export default Navigation;
