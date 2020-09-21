import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/actions";
import { addProductToBasket } from "../../store/baskets/actions";
import { createAnonymousClient } from "../../store/clients/actions";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectProducts } from "../../store/products/selectors";
import { selectClient } from "../../store/clients/selectors";
import ProductCard from "../../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";
import HomeLoadingPage from "../../components/HomeLoadingPage";
import Homevideo from "../../assets/Homevideo-1(1).mp4";

import "./home.css";

export default function Home() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const client = useSelector(selectClient);
  const loading = useSelector(selectAppLoading);

  const id = client.id;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function dispatchOnClick(productId) {
    if (id === undefined) {
      dispatch(createAnonymousClient(productId));
    }

    if (id !== undefined && id) {
      dispatch(addProductToBasket(id, productId));
    }
  }

  const isAppLoading = () => {
    if (loading) {
      return <HomeLoadingPage />;
    }
  };

  function loadVideo() {
    return (
      <div>
        <video id="video" autoPlay muted loop>
          <source src={`${Homevideo}`} type="video/mp4"></source>
        </video>
      </div>
    );
  }

  return (
    <Container fluid className="App">
      <Row>
        <Col offset={3}>
          {loadVideo()}
          <div className="content">
            <p>Prachtige</p>
            <p id="babyNestjesVideoText">BabyNestjes</p>
            <p id="handMadeVideoText">Handgemaakt!</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>{isAppLoading()}</Col>
      </Row>

      <Row id="row">
        {products.map((product, index) => {
          if (index <= 1) {
            return (
              <Col
                sm={6}
                style={{ maxWidth: "100%" }}
                className="column"
                key={product.id}
              >
                <ProductCard
                  {...product}
                  dispatchOnClick={dispatchOnClick}
                  link={true}
                />
              </Col>
            );
          } else {
            return null;
          }
        })}
      </Row>
      <Row id="row" style={{ marginTop: "40px" }}>
        {products.map((product, index) => {
          if (index > 1 && index <= 3) {
            return (
              <Col
                sm={6}
                className="column"
                key={product.id}
                style={{ maxWidth: "100%" }}
              >
                <ProductCard
                  {...product}
                  dispatchOnClick={dispatchOnClick}
                  link={true}
                />
              </Col>
            );
          } else {
            return null;
          }
        })}
      </Row>
      <Row id="row" style={{ marginTop: "40px" }}>
        {products.map((product, index) => {
          if (index > 3 && index <= 5) {
            return (
              <Col
                sm={6}
                className="column"
                key={product.id}
                style={{ maxWidth: "100%" }}
              >
                <ProductCard
                  {...product}
                  dispatchOnClick={dispatchOnClick}
                  link={true}
                />
              </Col>
            );
          } else {
            return null;
          }
        })}
      </Row>
      <Row id="row" style={{ marginTop: "40px" }}></Row>

      <Footer />
    </Container>
  );
}
