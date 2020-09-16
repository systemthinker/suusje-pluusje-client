import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";
import store from "../../store";

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

const displayPostalCode = (boolean) => {
  return {
    payload: boolean,
    type: "SET_DISPLAY_POSTAL_CODE",
  };
};

const displayPostalCodeBilling = (boolean) => {
  return {
    payload: boolean,
    type: "SET_DISPLAY_POSTAL_CODE_BILLING",
  };
};

const setPostalCodeValue = (value) => {
  return {
    payload: value,
    type: "SET_POSTAL_CODE_VALUE",
  };
};

const setPostalCodeValueBilling = (value) => {
  return {
    payload: value,
    type: "SET_POSTAL_CODE_BILLING_VALUE",
  };
};

const setHouseNumberValue = (value) => {
  return {
    payload: value,
    type: "SET_HOUSE_NUMBER_VALUE",
  };
};

const sethouseNumberValueBilling = (value) => {
  return {
    payload: value,
    type: "SET_HOUSE_NUMBER_BILLING_VALUE",
  };
};

const setHouseNumberAdditionValue = (value) => {
  return {
    payload: value,
    type: "SET_HOUSE_NUMBER_ADDITION",
  };
};

const setHouseNumberAdditionValueBilling = (value) => {
  return {
    payload: value,
    type: "SET_HOUSE_NUMBER_ADDITION_BILLING",
  };
};

const setErrorForOrderPage = (value) => {
  return {
    payload: value,
    type: "SET_ERROR_FOR_ORDER_PAGE",
  };
};

const setErrorForOrderPageBilling = (value) => {
  return {
    payload: value,
    type: "SET_ERROR_FOR_ORDER_PAGE_BILLING",
  };
};

export const getCityName = () => {
  const postalCode = store.getState().orders.postalCode;
  const houseNumber = store.getState().orders.houseNumber;
  const cityApi = store.getState().orders.city;

  return async (dispatch) => {
    try {
      if (cityApi) {
        return;
      }
      dispatch(appLoading());
      const response = await axios.get(
        `https://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${postalCode}&fq=huisnummer~${houseNumber}*`
      );
      console.log(response.data.response.docs[0].woonplaatsnaam);

      await dispatch(setCity(response.data.response.docs[0].woonplaatsnaam));
      await dispatch(setStreetName(response.data.response.docs[0].straatnaam));
      await dispatch(displayPostalCode(true));
      dispatch(setErrorForOrderPage(false));
      await setTimeout(function () {
        dispatch(appDoneLoading());
      }, 200);
    } catch (e) {
      console.log("error", e);
      await dispatch(displayPostalCode(false));
      dispatch(setErrorForOrderPage(true));
      await setTimeout(function () {
        dispatch(appDoneLoading());
      }, 200);
    }
  };
};

export const getCityNameBilling = () => {
  const postalCodeBilling = store.getState().orders.postalCodeBilling;
  const houseNumberBilling = store.getState().orders.houseNumberBilling;
  const cityApiBilling = store.getState().orders.cityBilling;
  return async (dispatch) => {
    try {
      if (cityApiBilling) {
        return;
      }
      dispatch(appLoading());
      const response = await axios.get(
        `https://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${postalCodeBilling}&fq=huisnummer~${houseNumberBilling}*`
      );

      await dispatch(
        setCityBilling(response.data.response.docs[0].woonplaatsnaam)
      );
      await dispatch(
        setStreetNameBilling(response.data.response.docs[0].straatnaam)
      );
      await dispatch(displayPostalCodeBilling(true));
      dispatch(setErrorForOrderPageBilling(false));

      await setTimeout(function () {
        dispatch(appDoneLoading());
      }, 200);
    } catch (e) {
      console.log("error", e);
      await dispatch(displayPostalCodeBilling(false));
      dispatch(setErrorForOrderPageBilling(true));
      await setTimeout(function () {
        dispatch(appDoneLoading());
      }, 200);
    }
  };
};

export const setDisplayPostalCode = (value) => {
  return async (dispatch) => {
    try {
      console.log("value is", value);
      dispatch(displayPostalCode(value));
      if (value === false) {
        dispatch(setCity(""));
        dispatch(setStreetName(""));
      }
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const setDisplayPostalCodeBilling = (value) => {
  return async (dispatch) => {
    try {
      console.log("value is", value);
      dispatch(displayPostalCodeBilling(value));
      if (value === false) dispatch(setCityBilling(""));
      dispatch(setStreetNameBilling(""));
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const setPostalCode = (value) => {
  return async (dispatch) => {
    try {
      dispatch(setPostalCodeValue(value));
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const setPostalCodeBilling = (value) => {
  return async (dispatch) => {
    try {
      dispatch(setPostalCodeValueBilling(value));
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const setHouseNumber = (value) => {
  return async (dispatch) => {
    try {
      dispatch(setHouseNumberValue(value));
    } catch (e) {
      console.log("errror", e);
    }
  };
};

export const setHouseNumberBilling = (value) => {
  return async (dispatch) => {
    try {
      dispatch(sethouseNumberValueBilling(value));
    } catch (e) {
      console.log("errror", e);
    }
  };
};

export const setHouseNumberAddition = (value) => {
  return async (dispatch) => {
    try {
      dispatch(setHouseNumberAdditionValue(value));
    } catch (e) {
      console.log("errror", e);
    }
  };
};

export const setHouseNumberAdditionBilling = (value) => {
  return async (dispatch) => {
    try {
      dispatch(setHouseNumberAdditionValueBilling(value));
    } catch (e) {
      console.log("errror", e);
    }
  };
};

export const signUp = () => {
  return async (dispatch) => {
    try {
      console.log("signUp called");
    } catch (e) {
      console.log("error", e);
    }
  };
};
