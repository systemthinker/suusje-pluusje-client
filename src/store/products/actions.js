import Axios from "axios";
import { apiUrl } from "../../config/constants";
import { appLoading, appDoneLoading } from "../appState/actions";

export const fetchProductsAction = (products) => ({
  type: "FETCH_HOMEPAGES",
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(appLoading());
    const response = await Axios.get(`${apiUrl}/product`);

    dispatch(fetchProductsAction(response.data));
    dispatch(appDoneLoading());
  };
};
