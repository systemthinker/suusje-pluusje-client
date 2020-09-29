import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AddressBilling(props) {
  const client = props;
  console.log("client is adressbilling", client);
  return (
    <Row>
      <Col sm={6}>
        <ul className="addressList">
          <li>
            <h6>Factuuradres</h6>
          </li>

          <li>
            {client.addressbilling ? client.addressbilling.streetName : null}{" "}
            {client.addressbilling ? client.addressbilling.houseNumber : null}
          </li>
          <li>
            {client.addressbilling ? client.addressbilling.postalCode : null},{" "}
            {client.addressbilling ? client.addressbilling.city : null}
          </li>
          <li>
            <Link to="/order">&#62; wijzig gegevens</Link>
          </li>
        </ul>
      </Col>
    </Row>
  );
}
