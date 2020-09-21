import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import nestje1 from "../../assets/nestje1.webp";
import nestje2 from "../../assets/nestje2.webp";
import nestje3 from "../../assets/nestje3.webp";
import nestje4 from "../../assets/nestje4.webp";

export default function HomeloadingPage() {
  return (
    <Container fluid className="App">
      <link
        rel="stylesheet"
        href="style.css"
        media="print"
        onload="this.media='all'"
      ></link>

      <Row>
        <Col sm={6}>
          <div>
            <img
              id="productImage"
              className="imageBoxLoading"
              src={nestje1}
              alt=""
            ></img>
          </div>
        </Col>
        <Col sm={6}>
          <div>
            <img
              id="productImage"
              className="center-block imageBoxLoading"
              src={nestje2}
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
              src={nestje3}
              alt=""
            ></img>
          </div>
        </Col>
        <Col sm={6}>
          <div>
            <img
              id="productImage"
              className="center-block imageBoxLoading"
              src={nestje4}
              alt=""
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
