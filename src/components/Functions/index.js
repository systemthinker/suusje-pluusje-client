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
