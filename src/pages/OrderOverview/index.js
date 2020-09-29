import React, { useEffect } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectClient } from "../../store/clients/selectors";
import { selectBasket } from "../../store/baskets/selectors";
import { getUserWithStoredToken } from "../../store/clients/actions";
import Address from "../../components/Address";
import AddressBilling from "../../components/AddressBilling";
import "./orderOverview.css";

export default function OrderOverview() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  const basket = useSelector(selectBasket);
  const client = useSelector(selectClient);
  console.log("client is", client);
  console.log("adres", client.adre);
  console.log("adres is", client.adre ? client.adre.streetName : null);

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
        <Col sm={{ span: 3, offset: 0 }}></Col>
      </Row>
    </div>
  );
}
