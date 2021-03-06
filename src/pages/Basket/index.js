import React, { useEffect } from "react";
import "./index.css";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectBasket } from "../../store/baskets/selectors";
import { selectClient, selectToken } from "../../store/clients/selectors";
import { selectProducts } from "../../store/products/selectors";
import { fetchProducts } from "../../store/products/actions";
import { fetchBasket } from "../../store/baskets/actions";
import {
  addProductToBasket,
  removeProductFromBasket,
} from "../../store/baskets/actions";
import { appLoading, appDoneLoading } from "../../store/appState/actions";
import { useParams } from "react-router-dom";
import BasketCard from "../../components/BasketCard";
import ProductCardBasket from "../../components/ProductCardBasket";
import InfoProductBasketCard from "../../components/InfoProductBasketCard";
import {
  totalBasketPriceAndToFixed,
  sortBasket,
  deliveryCostsAndToFixed,
} from "../../components/Functions";

import {
  productIdForExtraProductsOne,
  productIdForExtraProductsTwo,
} from "../../config/constants";
import DeliveryInfo from "../../components/DeliveryInfo";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Basket() {
  const { id } = useParams();
  const basket = useSelector(selectBasket);
  const client = useSelector(selectClient);
  const token = useSelector(selectToken);
  const products = useSelector(selectProducts);
  const clientId = client.id;
  const orderPath = "/order";
  const orderSignUpPath = "/order/signup";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBasket(id));
    dispatch(fetchProducts());
  }, [dispatch, id]);

  const totalBasketPriceResult = totalBasketPriceAndToFixed(basket);
  const deliveryCosts = deliveryCostsAndToFixed();

  function onClickAddItemToCard(productId) {
    dispatch(appLoading);
    dispatch(addProductToBasket(clientId, productId));
    dispatch(appDoneLoading);
  }

  function onClickRemoveItemCard(productId) {
    dispatch(appLoading);
    dispatch(removeProductFromBasket(clientId, productId));
    dispatch(appDoneLoading);
  }

  function dispatchOnClick(productId) {
    dispatch(addProductToBasket(clientId, productId));
  }

  const sortedBasket = sortBasket(basket);
  const verified =
    client.isVerified && client.name && client.email && token
      ? orderPath
      : orderSignUpPath;

  // add assecories later in second row.

  return (
    <div>
      <h2 className="winkelwagen">Winkelwagen</h2>
      <Container fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={5}>
            {sortedBasket.map((basketProduct) => {
              return (
                <BasketCard
                  {...basketProduct}
                  key={basketProduct.id}
                  onClickAddItemToCard={onClickAddItemToCard}
                  onClickRemoveItemCard={onClickRemoveItemCard}
                />
              );
            })}
            <Row className="row-bg">
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col>
                <p className="grid-item deliveryCosts"> verzend</p>
                <p className="grid-item deliveryCosts"> kosten</p>
              </Col>
              <Col>
                <p className="grid-item">
                  <span id="euroSign">&#8364;</span> {deliveryCosts}
                </p>
              </Col>
            </Row>
            <Row className="row-bg">
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col>
                <p className="grid-item totalAmount">Totaal</p>
                <p className="grid-item totalAmount">Bedrag</p>
              </Col>
              <Col>
                <p className="grid-item">
                  <span id="euroSign">&#8364;</span> {totalBasketPriceResult}
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={1}></Col>
          <Col lg={3}>
            <DeliveryInfo />
            <div>
              <Link to={`${verified}`}>
                <Button
                  className="orderButtonUnderDelivery"
                  variant="success"
                  size="lg"
                  id="deliveryInfoButton"
                >
                  {" "}
                  Ik ga bestellen {">>"}{" "}
                </Button>
              </Link>
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>

        <Row>
          <Col lg={1}></Col>

          <Col md={5}>
            <div>
              <Link to={`${verified}`}>
                <Button
                  className="orderButtonBasket block"
                  variant="success"
                  size="lg"
                  id="basketButtonOrder"
                >
                  {" "}
                  Ik ga bestellen {">>"}{" "}
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/">
                <Button
                  className="orderButtonBasket"
                  variant="outline-primary"
                  size="sm"
                >
                  {"<<"} Verder Winkelen{" "}
                </Button>
              </Link>
            </div>
            <h3 className="h3">Voeg Toe:</h3>
            {products.map((product, index) => {
              if (
                index === productIdForExtraProductsOne ||
                index === productIdForExtraProductsTwo ||
                index === 14
              ) {
                return (
                  <div sm={3} className="column" key={product.id}>
                    <ProductCardBasket
                      {...product}
                      dispatchOnClick={dispatchOnClick}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </Col>
          <Col lg={1}></Col>
          <Col md={3}>
            <InfoProductBasketCard />
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Row>
          <Col lg={2}></Col>

          <Col sm={6}></Col>

          <Col md={2}></Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
}
