import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/actions";
import { addProductToBasket, createBasket } from "../../store/baskets/actions";
import { createAnonymousClient } from "../../store/clients/actions";
import { selectProducts } from "../../store/products/selectors";
import { selectClient } from "../../store/clients/selectors";
import ProductCard from "../../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

import "./home.css";

export default function Home() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const client = useSelector(selectClient);
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

  return (
    <Container fluid className="App">
      <Row>
        <Col offset={3}>
          <div maxHeight="300px">
            <video
              style={{ width: "100%", height: "auto", maxHeight: "500px" }}
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

      <Row id="row">
        {products.map((product, index) => {
          if (index <= 3) {
            return (
              <Col
                sm={3}
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
          if (index > 3 && index <= 7) {
            return (
              <Col
                sm={3}
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
          if (index > 7 && index <= 11) {
            return (
              <Col
                sm={3}
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
    </Container>
  );
}
