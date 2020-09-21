import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBasket } from "../../store/baskets/selectors";
import { selectAppLoading } from "../../store/appState/selectors";
import OrderButton from "../OrderButton";

import { getId } from "../Functions";
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
