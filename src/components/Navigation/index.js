import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/clients/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import './index.css'

export default function Navigation() {
  const token = useSelector(selectToken);
  // add token for admin later
  // add logic for showing basket later if needed
  
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <img src={`${'http://www.robbertvandenoutenaar.com/images/logoSuusjePluusje.png'}`} alt="" height="140px" width="250px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem className="nav-item" path="/" linkText="Home" />
          <NavbarItem path="/about" linkText="Over" />
          <NavbarItem path="/info" linkText="Meer Info"/>
          {loginLogoutControls}
          <NavbarItem path="/basket" linkText="Mijn Winkelwagen"/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
