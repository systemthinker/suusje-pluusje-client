import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";

const setCity = (city) => {
  return {
    payload: city,
    type: "SET_CITY",
  };
};

const setCityBilling = (city) => {
  return {
    payload: city,
    type: "SET_CITY_BILLING",
  };
};

const setStreetName = (streetName) => {
  return {
    payload: streetName,
    type: "SET_STREET_NAME",
  };
};

const setStreetNameBilling = (streetName) => {
  return {
    payload: streetName,
    type: "SET_STREET_NAME_BILLING",
  };
};

export const getCityName = (postalCode, houseNumber) => {
  return async (dispatch) => {
    try {
      dispatch(appLoading());
      const response = await axios.get(
        `https://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${postalCode}&fq=huisnummer~${houseNumber}*`
      );

      dispatch(setCity(response.data.response.docs[0].woonplaatsnaam));
      dispatch(setStreetName(response.data.response.docs[0].straatnaam));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const getCityNameBilling = (postalCode, houseNumber) => {
  return async (dispatch) => {
    try {
      dispatch(appLoading());
      const response = await axios.get(
        `https://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${postalCode}&fq=huisnummer~${houseNumber}*`
      );

      dispatch(setCityBilling(response.data.response.docs[0].woonplaatsnaam));
      dispatch(setStreetNameBilling(response.data.response.docs[0].straatnaam));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const signUp = () => {
  return async (dispatch) => {
    try {
      console.log("signUp called");

      dispatch(appLoading());
    } catch (e) {
      console.log("error", e);
    }
  };
};
