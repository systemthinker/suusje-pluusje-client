import React from "react";
import "../index.css";
import { Form } from "react-bootstrap";

export default function Email() {
  return (
    <Form.Text>
      <span className="spanErrorMessage">
        Vul alstublieft een gelding e-mail adres in
      </span>
    </Form.Text>
  );
}
