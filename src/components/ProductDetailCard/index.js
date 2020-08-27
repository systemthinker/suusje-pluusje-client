import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBasket } from "../../store/baskets/selectors";
import { selectAppLoading } from "../../store/appState/selectors";
import OrderButton from "../OrderButton";

import nestje1 from "../../assets/nestje1.jpg";
import nestje2 from "../../assets/nestje2.jpg";
import nestje3 from "../../assets/nestje3.jpg";
import nestje4 from "../../assets/nestje4.jpg";
import nestje5 from "../../assets/nestje5.jpg";
import nestje6 from "../../assets/nestje6.jpg";
import nestje7 from "../../assets/nestje7.png";
import "./productDetailCard.css";

export default function ProductDetailCard({
  id,
  name,
  price,
  description,
  dispatchOnClick,
}) {
  const isLoading = useSelector(selectAppLoading);
  const basket = useSelector(selectBasket);

  function loading() {
    if (isLoading) {
      return null;
    } else {
      return dispatchOnClick(id);
    }
  }

  function loadingOrderButton() {
    if (isLoading) {
      return null;
    } else {
      return <OrderButton />;
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

      default:
        return nestje1;
    }
  }

  const isInBasket = basket.find((b) => b.id === id) ? (
    loadingOrderButton()
  ) : (
    <Button
      className="buttonStyleDetailCard"
      onClick={(e) => {
        loading();
      }}
      variant="success"
      size="lg"
    >
      Voeg Toe Aan Winkelwagen
    </Button>
  );

  return (
    <Container fluid>
      <div className="App" height="200px" width="400px"></div>
      <h1>{name}</h1>
      <img height="400px" src={getId(id)} alt=""></img>
      <p id="description">{description}</p>
      <h1>&euro;{price}</h1>
      {isInBasket}
      <div>
        <Link to="/">
          <Button
            variant="outline-primary"
            size="lg"
            className="buttonStyleDetailCard"
          >
            {"<<"} Verder Winkelen{" "}
          </Button>
        </Link>
      </div>
    </Container>
  );
}
