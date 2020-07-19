import Axios from "axios";
import { apiUrl } from "../../config/constants";

export const fetchProductsAction = products => ({
    type: "FETCH_HOMEPAGES",
    payload: products
  });

export const fetchProducts = () => {
    return async (dispatch) => {

    const response = await Axios.get(`${apiUrl}/product`)

        dispatch(fetchProductsAction(response.data))
}
}
 
  
  

