import React from "react";
import "../index.css";
import { Form } from "react-bootstrap";

export default function FirstName() {
  return (
    <Form.Text>
      <span className="spanErrorMessage">
        Vul alstublieft uw voornaam in met minimaal 2 tekens
      </span>
    </Form.Text>
  );
}
