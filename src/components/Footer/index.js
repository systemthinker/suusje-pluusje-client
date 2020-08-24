import React from "react";
import "./footer.css";
import { siteUrl } from "../../config/constants";

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
                  <i className="fa fa-angle-double-right"></i>Home
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Over
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Info
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Verzending {"&"}{" "}
                  Bezorging
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Retourneren {"&"}{" "}
                  Ruilen
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Snel koppelingen</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Home
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Over
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Info
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Verzending {"&"}{" "}
                  Bezorging
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Retourneren {"&"}{" "}
                  Ruilen
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Snel koppelingen</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Home
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Over
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Info
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`}>
                  <i className="fa fa-angle-double-right"></i>Verzending {"&"}{" "}
                  Bezorging
                </a>
              </li>
              <li>
                <a href={`${siteUrl}`} title="Design and developed by">
                  <i className="fa fa-angle-double-right"></i>Retourneren {"&"}{" "}
                  Ruilen
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
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={`${siteUrl}`}>
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={`${siteUrl}`}>
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={`${siteUrl}`}>
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="mailto:susanneou@gmail.com"
                >
                  <i className="fa fa-envelope"></i>
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
