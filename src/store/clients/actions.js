import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

const loginSuccess = (clientWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: clientWithToken,
  };
};

const tokenStillValid = (clientWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: clientWithoutToken,
});

const addProductToBasketAction = (products) => ({
  type: "ADD_PRODUCT_TO_BASKET",
  payload: products,
});

export const createAnonymousClient = (productId) => {
  return async (dispatch) => {
    const response = await axios.post(`${apiUrl}/client/create`, {
      productId,
    });

    dispatch(loginSuccess(response.data));
    dispatch(addProductToBasketAction(response.data.basket.products));
  };
};
export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account aangemaakt"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welkom terug!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return false;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
      return true;
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
        return false;
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
      return false;
    }
  };
};

export const orderSignUp = (id, name, email, password) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;
    dispatch(appLoading());
    try {
      const response = await axios.patch(
        `${apiUrl}/order/signup`,
        {
          id,
          name,
          email,
          password,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "gegevens verwerkt"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
