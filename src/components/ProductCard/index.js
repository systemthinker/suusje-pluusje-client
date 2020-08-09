import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
  dispatchOnClick,
}) {
  return (
    <div className="card">
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <img
          id="productImage"
          className="center-block"
          src={imageUrl}
          alt=""
        ></img>
        <p>{name}</p>

        <p className="description">{description}</p>
        <p className="price"> {price}</p>

        <Button variant="success" onClick={(e) => dispatchOnClick(id)} block>
          In Winkelwagen
        </Button>
      </Link>
    </div>
  );
}
