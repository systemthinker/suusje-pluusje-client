import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getId } from "../Functions";

export default function ProductCard({
  id,
  name,
  description,
  price,
  dispatchOnClick,
}) {
  return (
    <div className="card" data-aos="fade-up">
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <img
          id="productImage"
          className="center-block"
          src={getId(id)}
          alt=""
        ></img>

        <div className="itemTextBlock">
          <p>{name}</p>

          <p className="description">{description}</p>
          <p className="price"> {price}</p>
        </div>

        <Button variant="success" onClick={(e) => dispatchOnClick(id)} block>
          In Winkelwagen
        </Button>
      </Link>
    </div>
  );
}
