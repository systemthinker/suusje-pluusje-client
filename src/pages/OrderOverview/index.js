import React, { useEffect } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectClient } from "../../store/clients/selectors";
import { selectBasket } from "../../store/baskets/selectors";
import { getUserWithStoredToken } from "../../store/clients/actions";
import { fetchBasket } from "../../store/baskets/actions";
import Address from "../../components/Address";
import AddressBilling from "../../components/AddressBilling";
import BasketCardOrderOverview from "../../components/BasketCardOrderOverview";

import {
  totalBasketPriceAndToFixed,
  sortBasket,
  deliveryCostsAndToFixed,
} from "../../components/Functions";
import "./orderOverview.css";

export default function OrderOverview() {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);
  const client = useSelector(selectClient);
  const { id } = useParams();
  const totalBasketPriceResult = totalBasketPriceAndToFixed(basket);
  const sortedBasket = sortBasket(basket);
  const deliveryCosts = deliveryCostsAndToFixed();

  useEffect(() => {
    console.log("id is", id);
    dispatch(getUserWithStoredToken()).then((value) => {
      if (value) {
        dispatch(fetchBasket(id));
      }
    });
  }, [dispatch, id]);

  console.log("client is", client);
  console.log("basket is", basket);

  return (
    <div>
      <Container fluid>
        <div key={`inline-radio`} className="mb-3">
          <Form.Check inline type="radio" id={`inline-radio-1`} />
          <Form.Check inline type="radio" id={`inline-radio-2`} />
          <Form.Check inline type="radio" id={`inline-radio-3`} />
        </div>
      </Container>

      <Row className="rowOrderOverview">
        <Col sm={{ span: 5, offset: 2 }}>
          <Row>
            <Col sm={{ span: 4 }}>
              <h3>Overzicht</h3>
            </Col>
            <Col sm={{ span: 7, offset: 1 }}>
              <Button variant="success">Bestelling afronden</Button>
            </Col>
          </Row>
          <Row>
            {client.adre ? <Address {...client} /> : null}

            <Col sm={5} offset={1}>
              <ul className="addressList">
                <li>
                  <h6>Contact gegevens</h6>
                </li>
                <li>{client.email}</li>
                <li>
                  <Link to="/order">&#62; wijzig gegevens</Link>
                </li>
              </ul>
            </Col>
          </Row>
          {client.addressbilling ? <AddressBilling {...client} /> : null}
        </Col>
        <Col
          sm={{ span: 3, offset: 0 }}
          className="column-shoppingcart-order-overview"
        >
          <h4>winkelwagen </h4>
          {sortedBasket.map((basket) => {
            return <BasketCardOrderOverview {...basket} key={basket.id} />;
          })}
          <div style={{ clear: "both" }}>
            <p className="text-align-left-overview">Bezorgkosten</p>
            <p className="number-align-right-overview">
              <span id="euroSign">&#8364;</span> {deliveryCosts}
            </p>
          </div>
          <div style={{ clear: "both" }}>
            <p className="total-amount-text-align-left-overview">
              Totaal Bedrag
            </p>
            <p className="total-amount-number-align-right-overview">
              <span id="euroSign">&#8364;</span>{" "}
              <span className="bolder">{totalBasketPriceResult}</span>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
