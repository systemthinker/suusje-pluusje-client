import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";
import store from "../../store";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../clients/selectors";

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
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const setClientData = (props) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    console.log("props are", props);
    console.log("token is", token);
    try {
      const response = await axios.post(
        `${apiUrl}/client/order`,
        {
          id: props.id,
          name: props.name,
          middleName: props.middleName || null,
          lastName: props.lastName,
          email: props.email,
          salutation: props.salutation || null,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("res is", response);
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const setClientAddress = (props) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    console.log("props are", props);
    console.log("token is", token);

    try {
      const response = await axios.post(
        `${apiUrl}/client/address`,
        {
          clientId: props.id,
          postalCode: props.postalCode,
          houseNumber: props.houseNumber,
          houseNumberAddition: props.houseNumberAddition || null,
          cityNameFromApi: props.cityNameFromApi,
          streetNameFromApi: props.streetNameFromApi,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("res is", response);
    } catch (e) {
      console.log("error", e);
    }
  };
};

export const setClientAddressBilling = (props) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    console.log("props are", props);
    console.log("token is", token);

    try {
      const response = await axios.post(
        `${apiUrl}/client/billing`,
        {
          clientId: props.id,
          postalCodeBilling: props.postalCodeBilling,
          houseNumberBilling: props.houseNumberBilling,
          houseNumberAdditionBilling: props.houseNumberAdditionBilling || null,
          cityNameFromApiBilling: props.cityNameFromApiBilling,
          streetNameFromApiBilling: props.streetNameFromApiBilling,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("res is", response);
    } catch (e) {
      console.log("error", e);
    }
  };
};
