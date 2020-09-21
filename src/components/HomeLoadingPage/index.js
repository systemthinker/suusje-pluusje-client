import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { getPictureWebp, getPictureJpg } from "../../components/Functions";

export default function HomeloadingPage() {
  return (
    <Container fluid className="App">
      <Row>
        <Col sm={6}>
          <div>
            <picture>
              <source srcset={getPictureWebp(1)} type="image/webp" />
              <img
                id="productImage"
                className="imageBoxLoading"
                src={getPictureJpg(1)}
                alt=""
              ></img>
            </picture>
          </div>
        </Col>
        <Col sm={6}>
          <div>
            <picture>
              <source srcset={getPictureWebp(2)} type="image/webp" />
              <img
                id="productImage"
                className="center-block imageBoxLoading"
                src={getPictureJpg(2)}
                alt=""
              ></img>
            </picture>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <div>
            <picture>
              <source srcset={getPictureWebp(3)} type="image/webp" />
              <img
                id="productImage"
                className="imageBoxLoading"
                src={getPictureJpg(3)}
                alt=""
              ></img>
            </picture>
          </div>
        </Col>
        <Col sm={6}>
          <div>
            <picture>
              <source srcset={getPictureWebp(4)} type="image/webp" />
              <img
                id="productImage"
                className="center-block imageBoxLoading"
                src={getPictureJpg(4)}
                alt=""
              ></img>
            </picture>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
