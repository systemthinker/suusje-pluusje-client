import Axios from "axios";

export const fetchProductsAction = products => ({
    type: "FETCH_HOMEPAGES",
    payload: products
  });

export const fetchProducts = () => {
    return async (dispatch) => {

    const response = await Axios.get('http://localhost:4000/product')

        dispatch(fetchProductsAction(response.data))
}
}
 
  
  

