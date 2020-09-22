import React from "react";
import "../index.css";
import { Form } from "react-bootstrap";

export default function CityApiStatus() {
  return (
    <div>
      <Form.Text>
        <span className="spanErrorMessage postalCodeErrorMessage">
          Woonplaats niet gevond, vul postcode opnieuw in en druk op Enter.
        </span>
      </Form.Text>
    </div>
  );
}
