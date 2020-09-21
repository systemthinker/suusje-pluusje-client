import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getPictureWebp, getPictureJpg } from "../../components/Functions";

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
        <picture>
          <source srcset={getPictureWebp(id)} type="image/webp" />
          <img
            id="productImage"
            className="center-block"
            src={getPictureJpg(id)}
            alt=""
          ></img>
        </picture>

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
