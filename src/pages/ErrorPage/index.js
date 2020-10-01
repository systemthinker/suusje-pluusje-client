import React from "react";
import "./errorPage.css";
import errorImage from "../../assets/error.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="App imagePage">
      <img src={errorImage} className="errorImage" alt="" />
      <h5 style={{ marginTop: "10px" }}>Oeps er ging iets mis</h5>
      <Link to="/">
        <Button style={{ marginTop: "10px" }}>Ga naar home pagina</Button>
      </Link>
    </div>
  );
}
