import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/clients/actions";
import Button from "react-bootstrap/Button";
import { selectClient } from "../../store/clients/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectClient);
  const mystyle = {
    
    minWidth: "70px",
   padding: ".5rem 1rem",
    
  };
  return (
    <>
      <Nav.Item style={mystyle}>{user.email}</Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
