import React from "react";
import "../index.css";
import { Form } from "react-bootstrap";

export default function LastName() {
  return (
    <Form.Text>
      <span className="spanErrorMessage">Vul alstublieft uw achternaam in</span>
    </Form.Text>
  );
}
