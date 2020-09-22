import React from "react";
import "../index.css";
import { Form } from "react-bootstrap";

export default function NoIdError() {
  return (
    <div>
      <Form.Text>
        <span className="spanErrorMessage postalCodeErrorMessage">
          Uw gegevens niet gevond, log a.u.b. opnieuw in.
        </span>
      </Form.Text>
    </div>
  );
}
