import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import AddressOrderCard from "../../components/AddressOrderCard";

export default function Order() {
  return (
    <div>
      <Container fluid>
        <h1>Bestelling</h1>
        <div key={`inline-radio`} className="mb-3">
          <Form.Check inline type="radio" id={`inline-radio-1`} />
          <Form.Check inline type="radio" id={`inline-radio-2`} />
          <Form.Check inline type="radio" id={`inline-radio-3`} />
        </div>

        <AddressOrderCard />
      </Container>
    </div>
  );
}
