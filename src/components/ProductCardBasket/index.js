import React from "react";
import "./productCard.css";
import { Button } from "react-bootstrap";
import toppertje13 from "../../assets/toppertje13.jpg";
import dekentje14 from "../../assets/dekentje14.jpg";

export default function ProductCardBasket({
  id,
  name,
  description,
  price,

  dispatchOnClick,
}) {
  function getId(id) {
    switch (id) {
      case 13:
        return toppertje13;
      case 14:
        return dekentje14;

      default:
        return;
    }
  }
  return (
    <div className="card">
      <Button variant="success" onClick={(e) => dispatchOnClick(id)} block>
        In Winkelwagen
      </Button>
      <p>{name}</p>
      <img
        height="130"
        width="140"
        className="center-block"
        src={getId(id)}
        alt=""
      ></img>

      <p className="description">{description}</p>
      <p className="price"> {price}</p>
    </div>
  );
}
