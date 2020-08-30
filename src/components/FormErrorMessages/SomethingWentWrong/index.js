import React from "react";
import "../index.css";
import { Form } from "react-bootstrap";

export default function SomethingWentWrong() {
  return (
    <Form.Text>
      <span className="spanErrorMessage">
        Er ging iets fout, controleer de invulvelden en probeer opnieuw
      </span>
    </Form.Text>
  );
}
