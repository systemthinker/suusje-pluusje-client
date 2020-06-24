import Axios from "axios";
import { apiUrl } from '../../config'

export const addProductToBasketAction = basket => ({
    type: "ADD_PRODUCT_TO_BASKET",
    payload: basket
  });

export const createBasketAction = basket => ({
    type: "CREATE_NEW_BASKET",
    payload: basket
})

export const fetchBasketAction = basket => ({
    type: "FETCH_BASKET",
    payload: basket
})

export const addProductToBasket = (clientId,productId) => {
    return async (dispatch) => {
    const response = await Axios.patch(`${apiUrl}/basket/${clientId}`,{
        productId
    })
    dispatch(addProductToBasketAction(response.data.products))
}
}

export const createBasket = () => {
    return async (dispatch) => {
    const response = await Axios.patch(`${apiUrl}/basket/create`)
    dispatch(createBasketAction(response.data))
}
}

export const fetchBasket = (id) => {
    return async (dispatch) => {
    const response = await Axios.get(`${apiUrl}/basket/${id}`)
        console.log('response is', response)
    dispatch(fetchBasketAction(response.data))

    }
}




