import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/klant/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);
  // add token for admin later
  // add logic for showing basket later if needed
  
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        SUUSJE PLUUSJE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/over" linkText="Over" />
          <NavbarItem path="/info" linkText="Meer Info"/>
          {loginLogoutControls}
          <NavbarItem path="/winkelwagen" linkText="Mijn Winkelwagen"/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
