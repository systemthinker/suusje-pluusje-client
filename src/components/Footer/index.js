import React from "react";
import "./footer.css";
import { siteUrl } from "../../config/constants";

export default function Footer() {
  return (
    <section id="footer">
      <div class="container">
        <div class="row text-center text-xs-center text-sm-left text-md-left">
          <div class="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>Home
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>About
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>FAQ
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>Get Started
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>Videos
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>Home
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>About
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>FAQ
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>Get Started
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>Videos
                </a>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul class="list-unstyled quick-links">
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>Home
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>About
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>FAQ
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i class="fa fa-angle-double-right"></i>Get Started
                </a>
              </li>
              <li>
                <a
                  href="https://wwwe.sunlimetech.com"
                  title="Design and developed by"
                >
                  <i class="fa fa-angle-double-right"></i>Imprint
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                <a href={`${siteUrl}`}>
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href={`${siteUrl}`}>
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href={`${siteUrl}`}>
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href={`${siteUrl}`}>
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" href="mailto:susanneou@gmail.com">
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <a href={`${siteUrl}`}>Suusje Pluusje</a>
              </u>{" "}
              is een eenmansbedrijf in handen van Susanne van den Outenaar
              [gevestigd in Heemskerk]
            </p>
            <p class="h6">
              © 2020 Suusje Pluusje | Alle rechten gereserveerd.
              <a class="text-green ml-2" href={`${siteUrl}`} target="_blank">
                Suusje Pluusje
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
