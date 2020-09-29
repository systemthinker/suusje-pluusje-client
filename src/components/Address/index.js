import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Address(props) {
  const client = props;
  console.log("client333333 ", client);
  return (
    <Col sm={6}>
      <ul className="addressList">
        <li>
          <h6>Bezorgadres</h6>
        </li>
        <li>
          {client.salutation ? client.salutation : null} {client.name}{" "}
          {client.middleName} {client.lastName}
        </li>
        <li>
          {client.adre ? client.adre.streetName : null}{" "}
          {client.adre ? client.adre.houseNumber : null}
        </li>
        <li>
          {client.adre ? client.adre.postalCode : null},{" "}
          {client.adre ? client.adre.city : null}
        </li>
        <li>
          <Link to="/order">&#62; wijzig gegevens</Link>
        </li>
      </ul>
    </Col>
  );
}
