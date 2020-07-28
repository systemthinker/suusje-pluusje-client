import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken,selectClient } from "../../store/clients/selectors";
import { selectBasket } from '../../store/baskets/selectors'
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import './index.css'
import { FaBeer, FaShoppingCart } from 'react-icons/fa';
import { IconContext } from "react-icons";
import logoSuusjePluusje from '../../images/logoSuusjePluusje.png'

export default function Navigation() {
  const token = useSelector(selectToken);
  const client = useSelector(selectClient)
  const basket = useSelector(selectBasket)
  const clientId = client.id
  const size = 60;
  console.log('basket is', basket)
  console.log('basketL' ,basket.length)
  function counterValue(){
    if(basket.length === 0){
      return null
    } else {
      return basket.length;
    }
  }
  // add token for admin later
  // add logic for showing basket later if needed
  
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const shoppingCardControls = token ?   <Navbar.Brand as={NavLink} to={`/basket/${clientId}`}>
                                                      <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                                                        <div>
                                                              <FaShoppingCart size={size} id='shoppingCart' style={{color: 'rgb(1,122,253)'}} value={{ style: { className: 'react-icons' } }}/>
                                                              <h4 className="counter">{counterValue()}</h4>
                                                        </div>
                                                    </IconContext.Provider>
                                      </Navbar.Brand>
  
  : <Navbar.Brand>
  <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
    <div>
          <FaShoppingCart size={size} id="shoppingCart" value={{ style: { className: 'react-icons' } }}/>
          
    </div>
</IconContext.Provider>
</Navbar.Brand>

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} className="brand" to="/">
        <img src={`${logoSuusjePluusje}`} alt="" height="126px" width="300px"/>
        
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem className="nav-item" path="/" linkText="Home" />
          <NavbarItem path="/about" linkText="Over" />
          <NavbarItem path="/info" linkText="Meer Info"/>
          {shoppingCardControls}
          {loginLogoutControls}
          
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
