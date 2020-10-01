import {
  Nestje1Webp,
  Nestje2Webp,
  Nestje3Webp,
  Nestje4Webp,
  Nestje5Webp,
  Nestje6Webp,
  Nestje7Webp,
  Toppertje13Webp,
  Dekentje14Webp,
  Nestje1Jpg,
  Nestje2Jpg,
  Nestje3Jpg,
  Nestje4Jpg,
  Nestje5Jpg,
  Nestje6Jpg,
  Nestje7Jpg,
  Toppertje13Jpg,
  Dekentje14Jpg,
} from "../../assets";

import { deliveryCosts } from "../../config/constants";

export const getPictureWebp = (id) => {
  switch (id) {
    case 1:
      return Nestje1Webp;
    case 2:
      return Nestje2Webp;
    case 3:
      return Nestje3Webp;
    case 4:
      return Nestje4Webp;
    case 5:
      return Nestje5Webp;
    case 6:
      return Nestje6Webp;
    case 7:
      return Nestje7Webp;

    case 13:
      return Toppertje13Webp;
    case 14:
      return Dekentje14Webp;

    default:
      return Nestje1Webp;
  }
};

export const getPictureJpg = (id) => {
  switch (id) {
    case 1:
      return Nestje1Jpg;
    case 2:
      return Nestje2Jpg;
    case 3:
      return Nestje3Jpg;
    case 4:
      return Nestje4Jpg;
    case 5:
      return Nestje5Jpg;
    case 6:
      return Nestje6Jpg;
    case 7:
      return Nestje7Jpg;

    case 13:
      return Toppertje13Jpg;
    case 14:
      return Dekentje14Jpg;

    default:
      return Nestje1Jpg;
  }
};

export const totalBasketPriceAndToFixed = (basket) => {
  let result =
    basket
      .map((b) => parseFloat(b.price.replace(",", ".")) * b.quantity)
      .reduce((a, b) => a + b, 0) + deliveryCosts;
  return result.toFixed(2).replace(".", ",");
};

export const sortBasket = (basket) => {
  return basket.sort((a, b) => a.name.localeCompare(b.name));
};

export const deliveryCostsAndToFixed = () => {
  return deliveryCosts.toFixed(2).replace(".", ",");
};

export const isValidEmail = (value, email) => {
  var sQtext = "[^\\x0d\\x22\\x5c\\x80-\\xff]";
  var sDtext = "[^\\x0d\\x5b-\\x5d\\x80-\\xff]";
  var sAtom =
    "[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+";
  var sQuotedPair = "\\x5c[\\x00-\\x7f]";
  var sDomainLiteral = "\\x5b(" + sDtext + "|" + sQuotedPair + ")*\\x5d";
  var sQuotedString = "\\x22(" + sQtext + "|" + sQuotedPair + ")*\\x22";
  var sDomain_ref = sAtom;
  var sSubDomain = "(" + sDomain_ref + "|" + sDomainLiteral + ")";
  var sWord = "(" + sAtom + "|" + sQuotedString + ")";
  var sDomain = sSubDomain + "(\\x2e" + sSubDomain + ")*";
  var sLocalPart = sWord + "(\\x2e" + sWord + ")*";
  var sAddrSpec = sLocalPart + "\\x40" + sDomain; // complete RFC822 email address spec
  var sValidEmail = "^" + sAddrSpec + "$"; // as whole string

  var reValidEmail = new RegExp(sValidEmail);

  if (reValidEmail.test(email)) {
    if (value === "id") {
      return "borderGreen";
    }

    return true;
  } else if (value === "id") {
    return "borderOrangeRed";
  } else if (email.length > 0) {
    return false;
  } else {
    return false;
  }
};
