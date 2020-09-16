import React from "react";
import "../index.css";
import { Form } from "react-bootstrap";

export default function PostalCodeApiStatus() {
  return (
    <div>
      <Form.Text>
        <span className="spanErrorMessage postalCodeErrorMessage">
          Vul alstublieft een geldige postcode in.
        </span>
      </Form.Text>
    </div>
  );
}
