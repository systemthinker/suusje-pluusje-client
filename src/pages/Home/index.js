import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/actions";
import { addProductToBasket, createBasket } from "../../store/baskets/actions";
import { createAnonymousClient } from "../../store/clients/actions";
import { appLoading, appDoneLoading } from "../../store/appState/actions";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectProducts } from "../../store/products/selectors";
import { selectClient } from "../../store/clients/selectors";
import ProductCard from "../../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";
import HomeLoadingPage from "../../components/HomeLoadingPage";

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
    console.log("what is loading", loading);
    if (loading) {
      console.log("loading was returned");
      return <HomeLoadingPage />;
      // } else {
      //   return <h1 style={{ backgroundColor: "purple" }}> loading done... </h1>;
    }
  };

  return (
    <Container fluid className="App">
      <Row>
        <Col offset={3}>
          <div>
            <video
              style={{ width: "100%", height: "auto" }}
              autoPlay
              muted
              loop
            >
              <source
                src="./Videos/Homevideo-1(1).mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
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
          }
        })}
      </Row>
      <Row id="row" style={{ marginTop: "40px" }}>
        {/* {products.map((product,index)=>{
                    if (index > 11 && index <= 15) {
                    return <Col sm={3} className="column" key={product.id}
                     style={{ maxWidth: "100%" }}>
                        <ProductCard  {...product} dispatchOnClick={dispatchOnClick}/>
                    </Col>
                    }
                })} */}
      </Row>

      <Footer />
    </Container>
  );
}
