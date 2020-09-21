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

export const getId = (id) => {
  switch (id) {
    case 1:
      return Nestje1Webp || Nestje1Jpg;
    case 2:
      return Nestje2Webp || Nestje2Jpg;
    case 3:
      return Nestje3Webp || Nestje3Jpg;
    case 4:
      return Nestje4Webp || Nestje4Jpg;
    case 5:
      return Nestje5Webp || Nestje5Jpg;
    case 6:
      return Nestje6Webp || Nestje6Jpg;
    case 7:
      return Nestje7Webp || Nestje7Jpg;

    case 13:
      return Toppertje13Webp || Toppertje13Jpg;
    case 14:
      return Dekentje14Webp || Dekentje14Jpg;

    default:
      return Nestje1Webp || Nestje1Jpg;
  }
};
