import Axios from "axios";
import { apiUrl } from '../../config/constants'

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

export const removeProductFromBasketAction = basket => ({
    type: "REMOVE_PRODUCT_FROM_BASKET",
    payload: basket
})


export const removeProductFromBasket = (clientId,productId) => {
    return async (dispatch) => {
    const response = await Axios.put(`${apiUrl}/basket/${clientId}`,{
        productId
    })
    console.log('response is', response)
    dispatch(removeProductFromBasketAction(response.data))
}
}

export const addProductToBasket = (clientId,productId) => {
    return async (dispatch) => {
    const response = await Axios.patch(`${apiUrl}/basket/${clientId}`,{
        productId
    })
    console.log('response is', response)
    dispatch(addProductToBasketAction(response.data))
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
    const response = await Axios.get(`${apiUrl}/basket/client/${id}`)
        console.log('response fetch is', response)
    dispatch(fetchBasketAction(response.data))

    }
}




