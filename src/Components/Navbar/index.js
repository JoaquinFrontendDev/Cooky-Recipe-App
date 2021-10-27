import React from "react";
import { FoodIcon, Nav, NavIcon, NavLink } from "./NavbarStyled";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavIcon>
          <p>Menu</p>
          <FoodIcon onClick={toggle} />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
