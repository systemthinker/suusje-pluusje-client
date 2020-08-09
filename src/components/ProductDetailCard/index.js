import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBasket } from "../../store/baskets/selectors";
import { selectAppLoading } from "../../store/appState/selectors";
import OrderButton from "../OrderButton";
import AddToBasket from "../AddToBasket";
import "./productDetailCard.css";

export default function ProductDetailCard({
  id,
  name,
  price,
  imageUrl,
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

  function notInBasket() {
    if (isLoading) {
      return null;
    } else {
      return <AddToBasket />;
    }
  }

  const isInBasket = basket.find((b) => b.id === id) ? (
    loadingOrderButton()
  ) : (
    <Button
      id="mystyle"
      onClick={(e) => {
        loading();
      }}
      variant="success"
      size="lg"
      style={{ minWidth: "200px", width: "40%", marginTop: "10px" }}
    >
      Voeg Toe Aan Winkelwagen
    </Button>
  );

  return (
    <Container fluid>
      <div className="App" height="200px"></div>
      <h1>{name}</h1>
      <img height="400px" src={`${imageUrl}`} alt=""></img>
      <p>{description}</p>
      <h1>&euro;{price}</h1>
      {isInBasket}
      <div>
        <Link to="/">
          <Button
            variant="outline-primary"
            size="lg"
            style={{ minWidth: "200px", width: "40%", marginTop: "10px" }}
          >
            {"<<"} Verder Winkelen{" "}
          </Button>
        </Link>
      </div>
    </Container>
  );
}
