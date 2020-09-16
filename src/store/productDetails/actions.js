import axios from "axios";
import { apiUrl } from "../../config/constants";

export const fetchProductDetailPageAction = (product) => ({
  type: "FETCH_PRODUCT_DETAIL_PAGE",
  payload: product,
});

export const fetchProductDetailPage = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${apiUrl}/details/${id}`);

    dispatch(fetchProductDetailPageAction(response.data));
  };
};
