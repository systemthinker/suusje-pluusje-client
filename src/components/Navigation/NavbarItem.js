import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props) {
  return (
    <Nav.Item>
      <link
        rel="stylesheet"
        href="style.css"
        media="print"
        onload="this.media='all'"
      ></link>
      <Nav.Link
        as={NavLink}
        to={props.path}
        style={{ color: "black" }}
        id="navBarStyle"
      >
        {props.linkText}
      </Nav.Link>
    </Nav.Item>
  );
}
