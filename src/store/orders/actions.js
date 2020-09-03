import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

const setCity = (city) => {
  return {
    payload: city,
    type: "SET_CITY",
  };
};

const setStreetName = (streetName) => {
  return {
    payload: streetName,
    type: "SET_STREET_NAME",
  };
};

export const getCityName = (postalCode, houseNumber) => {
  return async (dispatch) => {
    dispatch(appLoading());
    const response = await axios.get(
      `http://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${postalCode}&fq=huisnummer~${houseNumber}*`
    );

    dispatch(setCity(response.data.response.docs[0].woonplaatsnaam));
    dispatch(setStreetName(response.data.response.docs[0].straatnaam));
    dispatch(appDoneLoading());
  };
};
