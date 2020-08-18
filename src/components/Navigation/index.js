import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectClient } from "../../store/clients/selectors";
import { selectBasket } from "../../store/baskets/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./index.css";
import { FaBabyCarriage, FaBaby } from "react-icons/fa";
import { IconContext } from "react-icons";

import logoSuusjePluusje from "../../images/logoSuusjePluusje.png";

export default function Navigation() {
  const token = useSelector(selectToken);
  const client = useSelector(selectClient);
  const basket = useSelector(selectBasket);
  const clientId = client.id;
  const size = 42;
  const sizeBaby = 18;
  let numberOfItemsInCartHiddenElements = [
    "hidden",
    "hidden",
    "hidden",
    "hidden",
  ];
  console.log("basket is", basket);
  console.log("basketL", basket.length);

  for (let i = 0; i < basket.length; i++) {
    numberOfItemsInCartHiddenElements[i] = "show";
  }

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const shoppingCardControls = token ? (
    <Navbar.Brand as={NavLink} to={`/basket/${clientId}`}>
      <IconContext.Provider
        value={{ color: "blue", className: "global-class-name" }}
      >
        <div>
          <FaBabyCarriage
            size={size}
            id="shoppingCart"
            style={{ color: "rgb(173, 24, 144)" }}
            value={{ style: { className: "react-icons" } }}
          />
        </div>

        <FaBaby
          className={`baby1 ${numberOfItemsInCartHiddenElements[0]}`}
          size={sizeBaby}
          style={{ color: "black" }}
          role="none"
        ></FaBaby>

        <FaBaby
          className={`baby2 ${numberOfItemsInCartHiddenElements[1]}`}
          size={sizeBaby}
          style={{ color: "black" }}
        ></FaBaby>

        <FaBaby
          className={`baby3 ${numberOfItemsInCartHiddenElements[2]}`}
          size={sizeBaby}
          style={{ color: "black" }}
        ></FaBaby>
        <FaBaby
          className={`baby4 ${numberOfItemsInCartHiddenElements[3]}`}
          size={sizeBaby}
          style={{ color: "black" }}
        ></FaBaby>
      </IconContext.Provider>
    </Navbar.Brand>
  ) : (
    <Navbar.Brand>
      <IconContext.Provider
        value={{ color: "blue", className: "global-class-name" }}
      >
        <div>
          <FaBabyCarriage
            size={size}
            id="shoppingCart"
            style={{ color: "rgb(173, 24, 144)" }}
            value={{ style: { className: "react-icons" } }}
          />
        </div>
      </IconContext.Provider>
    </Navbar.Brand>
  );

  return (
    <Navbar expand="sm" id="navbar-main" fixed="top">
      <Navbar.Brand as={NavLink} className="brand" to="/">
        <img src={`${logoSuusjePluusje}`} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem
            id="nav-item"
            path="/"
            style={{ color: "purple" }}
            linkText="Home"
          />
          <NavbarItem path="/about" linkText="Over" />
          <NavbarItem path="/info" linkText="Info" />
          {shoppingCardControls}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
