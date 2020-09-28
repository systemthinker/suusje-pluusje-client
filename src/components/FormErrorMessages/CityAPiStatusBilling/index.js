import React from "react";
import "../index.css";
import { Form } from "react-bootstrap";

export default function CityApiStatusBilling() {
  return (
    <div>
      <Form.Text>
        <span className="spanErrorMessage postalCodeErrorMessage">
          Woonplaats van uw factuur adres niet gevonden, vul postcode en
          huisnummer opnieuw in en druk op Enter.
        </span>
      </Form.Text>
    </div>
  );
}
