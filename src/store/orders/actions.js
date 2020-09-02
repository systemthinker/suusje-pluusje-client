import axios from "axios";

const setCity = (city) => {
  return {
    payload: city,
    type: "SET_CITY",
  };
};

export const getCityName = (postalCode, houseNumber) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${postalCode}&fq=huisnummer~${houseNumber}*`
    );

    console.log("response is", response.data.response.docs[0].woonplaatsnaam);

    dispatch(setCity(response.data.response.docs[0].woonplaatsnaam));
  };
};
