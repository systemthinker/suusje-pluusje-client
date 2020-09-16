import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import babyLoading from "../../assets/babyLoading.jpg";

export default function HomeloadingPage() {
  return (
    <Container fluid className="App">
      <Row>
        <Col sm={6}>
          <div>
            <img
              id="productImage"
              className="imageBoxLoading"
              src={babyLoading}
              alt=""
            ></img>
          </div>
        </Col>
        <Col sm={6}>
          <div>
            <img
              id="productImage"
              className="center-block imageBoxLoading"
              src={babyLoading}
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
              src={babyLoading}
              alt=""
            ></img>
          </div>
        </Col>
        <Col sm={6}>
          <div>
            <img
              id="productImage"
              className="center-block imageBoxLoading"
              src={babyLoading}
              alt=""
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
