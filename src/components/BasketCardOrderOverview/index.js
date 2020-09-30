import React from "react";
import { selectAppLoading } from "../../store/appState/selectors";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { getPictureWebp, getPictureJpg } from "../Functions";

import "./index.css";
export default function BasketCardOrderOverview(props) {
  const isLoading = useSelector(selectAppLoading);

  let { name, quantity, id } = props;
  console.log("props is", props);

  return (
    <div>
      <Row className="row-bg-overview">
        <Col
          sm={2}
          id="col-overview"
          style={{
            paddingLeft: "0",
            paddingRight: "0",
            marginLeft: "0",
            marginRight: "0",
          }}
        >
          <picture>
            <source srcSet={getPictureWebp(id)} type="image/webp" />
            <img
              height="50"
              width="50"
              className="grid-item-overview"
              src={getPictureJpg(id)}
              alt=""
            ></img>
          </picture>
        </Col>
        <Col sm={10}>
          <div className="col-name">
            <p className="item-name-align-left-overview">{name}</p>
            {quantity < 2 ? null : (
              <p className="quantity-items-align-right">{quantity} x</p>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
