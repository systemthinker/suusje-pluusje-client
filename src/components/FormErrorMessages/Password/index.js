import React from "react";
import "../index.css";
import { Form } from "react-bootstrap";

export default function Password() {
  return (
    <Form.Text>
      <span className="spanErrorMessage">
        Zorg dat uw wachtwoord minimaal 8 tekens bevat, minimaal 1 Hoofdletter
        en minimaal 1 kleine letter en minimaal 1 cijfer.
      </span>
    </Form.Text>
  );
}
