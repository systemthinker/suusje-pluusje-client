import axios from 'axios'


export const fetchProductDetailPageAction = product => ({
    type: "FETCH_PRODUCT_DETAIL_PAGE",
    payload: product
  });

export const fetchProductDetailPage = (id) => {
    return async (dispatch) => {

    const response = await axios.get(`http://localhost:4000/details/${id}`)

    console.log('reponse', response.data)


    dispatch(fetchProductDetailPageAction(response.data))
}
}
 