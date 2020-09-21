import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { getId } from "../Functions";

export default function HomeloadingPage() {
  return (
    <Container fluid className="App">
      <Row>
        <Col sm={6}>
          <div>
            <img
              id="productImage"
              className="imageBoxLoading"
              src={getId(1)}
              alt=""
            ></img>
          </div>
        </Col>
        <Col sm={6}>
          <div>
            <img
              id="productImage"
              className="center-block imageBoxLoading"
              src={getId(2)}
              alt=""
            ></img>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <div>
            <img
              id="productImage"
              className="imageBoxLoading"
              src={getId(3)}
              alt=""
            ></img>
          </div>
        </Col>
        <Col sm={6}>
          <div>
            <img
              id="productImage"
              className="center-block imageBoxLoading"
              src={getId(4)}
              alt=""
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
