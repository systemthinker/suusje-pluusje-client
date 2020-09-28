import React from "react";
import "../index.css";
import { Form } from "react-bootstrap";

export default function PostalCodeApiStatusBilling() {
  return (
    <div>
      <Form.Text>
        <span className="spanErrorMessage postalCodeErrorMessage">
          Vul alstublieft een geldige postcode in voor uw factuur adres.
        </span>
      </Form.Text>
    </div>
  );
}
