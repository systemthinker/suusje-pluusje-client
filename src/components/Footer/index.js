import React from "react";
import "./footer.css";
import { siteUrl } from "../../config/constants";
import {
  FaAngleDoubleRight,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGooglePlus,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Snel koppelingen</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Home
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Over
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Info
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Verzending {"&"} Bezorging
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Retourneren {"&"} Ruilen
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Snel koppelingen</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Home
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Over
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Info
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Verzending {"&"} Bezorging
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Retourneren {"&"} Ruilen
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Snel koppelingen</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Home
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Over
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Info
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Verzending {"&"} Bezorging
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`} title="Design and developed by">
                  <FaAngleDoubleRight></FaAngleDoubleRight>
                  &nbsp;Retourneren {"&"} Ruilen
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a
                  href="https://nl-nl.facebook.com/suusjepluusjebabynestjes/"
                  target="blank"
                >
                  <FaFacebookSquare size={32}></FaFacebookSquare>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={`${siteUrl}`}>
                  <FaTwitterSquare size={32}></FaTwitterSquare>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={`${siteUrl}`}>
                  <FaInstagramSquare size={32}></FaInstagramSquare>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={`${siteUrl}`}>
                  <FaGooglePlus size={32}></FaGooglePlus>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="mailto:susanneou@gmail.com"
                >
                  <FaEnvelope size={32}></FaEnvelope>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <a href={`${siteUrl}`}>Suusje Pluusje</a>
              </u>{" "}
              is een eenmansbedrijf in handen van Susanne van den Outenaar
              [gevestigd in Heemskerk]
            </p>
            <p className="h6">
              © 2020 Suusje Pluusje | Alle rechten gereserveerd.
              <a
                className="text-green ml-2"
                href={`${siteUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Suusje Pluusje
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
