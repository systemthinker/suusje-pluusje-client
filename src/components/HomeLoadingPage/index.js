import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import babyLoading from "../../assets/babyLoading.jpg";
import nestje1 from "../../assets/nestje1.jpg";
import nestje2 from "../../assets/nestje2.jpg";
import nestje3 from "../../assets/nestje3.jpg";
import nestje4 from "../../assets/nestje4.jpg";
import nestje5 from "../../assets/nestje5.jpg";
import nestje6 from "../../assets/nestje6.jpg";

export default function HomeloadingPage() {
  return (
    <Container fluid className="App">
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
