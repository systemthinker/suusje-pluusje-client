import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import nestje7 from "../../assets/nestje7.png";
import LazyLoad from "react-lazy-load";

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
        <LazyLoad debounce={false}>
          <img
            id="productImage"
            className="center-block"
            src={nestje7}
            alt=""
          ></img>
        </LazyLoad>

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
