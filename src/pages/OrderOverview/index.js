import React, { useEffect } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectClient } from "../../store/clients/selectors";
import { getUserWithStoredToken } from "../../store/clients/actions";
import "./orderOverview.css";

export default function OrderOverview() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserWithStoredToken());
  // }, [dispatch]);
  const client = useSelector(selectClient);
  console.log("client is", client);
  return (
    <div>
      <Container fluid>
        <div key={`inline-radio`} className="mb-3">
          <Form.Check inline type="radio" id={`inline-radio-1`} />
          <Form.Check inline type="radio" id={`inline-radio-2`} />
          <Form.Check inline type="radio" id={`inline-radio-3`} />
        </div>
      </Container>

      <Row className="rowOrderOverview">
        <Col sm={{ span: 5, offset: 2 }}>
          <Row>
            <Col sm={{ span: 4 }}>
              <h3>Overzicht</h3>
            </Col>
            <Col sm={{ span: 4, offset: 4 }}>
              <Button variant="success">Bestelling afronden</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <ul>
                <li>
                  <h7>Bezorgadres</h7>
                </li>
                <li>{client.salutation}</li>
              </ul>
            </Col>
            <Col sm={6}></Col>
          </Row>
        </Col>
        <Col sm={{ span: 3, offset: 0 }}></Col>
      </Row>
    </div>
  );
}
