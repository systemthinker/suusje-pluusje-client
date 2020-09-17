import React from "react";
import { selectAppLoading } from "../../store/appState/selectors";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

import nestje1 from "../../assets/nestje1.jpg";
import nestje2 from "../../assets/nestje2.jpg";
import nestje3 from "../../assets/nestje3.jpg";
import nestje4 from "../../assets/nestje4.jpg";
import nestje5 from "../../assets/nestje5.jpg";
import nestje6 from "../../assets/nestje6.jpg";
import nestje7 from "../../assets/nestje7.jpg";
import dekentje14 from "../../assets/dekentje14.jpg";
import toppertje13 from "../../assets/toppertje13.jpg";

import { Button } from "react-bootstrap";
import "./index.css";
export default function BasketCard(props) {
  const isLoading = useSelector(selectAppLoading);

  let {
    name,

    price,
    onClickAddItemToCard,
    onClickRemoveItemCard,
    quantity,
    id,
  } = props;
  price = parseFloat(price.replace(",", "."));

  const totalPrice = price * quantity;

  function loading(value) {
    if (isLoading) {
      return null;
    } else if (value === "Add") {
      return onClickAddItemToCard(id);
    } else if (value === "Remove") {
      return onClickRemoveItemCard(id);
    }
  }

  function getId(id) {
    switch (id) {
      case 1:
        return nestje1;
      case 2:
        return nestje2;
      case 3:
        return nestje3;
      case 4:
        return nestje4;
      case 5:
        return nestje5;
      case 6:
        return nestje6;
      case 7:
        return nestje7;
      case 13:
        return toppertje13;
      case 14:
        return dekentje14;

      default:
        return nestje1;
    }
  }

  return (
    <div>
      <div>
        <Row className="row-bg">
          <Col>
            <div className="containerOverlay">
              <img
                height="100"
                width="90"
                className="center-block grid-item image"
                src={getId(id)}
                alt=""
              ></img>
              <div className="overlay">
                <div className="text">{name}</div>
              </div>
            </div>
          </Col>
          <Col>
            <p className="grid-item itemName">{name}</p>
          </Col>
          <Col>
            <div className="grid-item plusMinus">
              <Button
                onClick={(e) => {
                  loading("Remove");
                }}
                size="sm"
                type="button"
                className="btnBasket"
                id="btnMinus"
              >
                <i data-feather="minus"></i>-{" "}
              </Button>
              <input
                type="number"
                className="form-control"
                value={quantity}
                max="999"
                id="numberCol"
                readOnly
              />
              <Button
                onClick={(e) => {
                  loading("Add");
                }}
                value={quantity}
                type="button"
                className="btn"
                id="btnPlus"
              >
                <i data-feather="plus"></i>+{" "}
              </Button>
            </div>
          </Col>
          <Col>
            <p className="grid-item " id="priceBasketCard">
              prijs{" "}
            </p>
          </Col>
          <Col>
            <p className="grid-item">
              {" "}
              &#8364; {totalPrice.toFixed(2).toString().replace(".", ",")}
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
