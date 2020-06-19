import Axios from "axios";

export const fetchProductsAction = products => ({
    type: "FETCH_HOMEPAGES",
    payload: products
  });

export const fetchProducts = () => {
    return async (dispatch) => {

    const response = await Axios.get('http://localhost:4000/product')

    console.log('reponse', response.data)


    dispatch(fetchProductsAction(response.data))
}
}
 
  
  

