import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import nestje1 from "../../assets/nestje1.webp";
import nestje2 from "../../assets/nestje2.webp";
import nestje3 from "../../assets/nestje3.webp";
import nestje4 from "../../assets/nestje4.webp";
import nestje5 from "../../assets/nestje5.webp";
import nestje6 from "../../assets/nestje6.webp";
import nestje7 from "../../assets/nestje7.webp";

export default function ProductCard({
  id,
  name,
  description,
  price,
  dispatchOnClick,
}) {
  function getId(id) {
    switch (id) {
      case 1:
        return nestje1;
      case 2:
        return nestje2;
      case 3:
        return nestje3;
      case 4:
        return nestje4;
      case 5:
        return nestje5;
      case 6:
        return nestje6;
      case 7:
        return nestje7;

      default:
        return nestje1;
    }
  }

  return (
    <div className="card" data-aos="fade-up">
      <link
        rel="stylesheet"
        href="style.css"
        media="print"
        onload="this.media='all'"
      ></link>
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
