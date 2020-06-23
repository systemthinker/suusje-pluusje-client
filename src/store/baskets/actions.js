import Axios from "axios";

export const addProductToBasketAction = basket => ({
    type: "ADD_PRODUCT_TO_BASKET",
    payload: basket
  });

export const addProductToBasket = (clientId,productId) => {
    return async (dispatch) => {
        console.log('called')
    const response = await Axios.patch(`http://localhost:4000/basket/${clientId}`,{
        productId
    })

    console.log('reponse', response.data.products)


    dispatch(addProductToBasketAction(response.data.products))
}
}

export const createBasketAction = basket => ({
    type: "CREATE_NEW_BASKET",
    payload: basket
})

export const createBasket = () => {
    return async (dispatch) => {
        console.log('create Basket called')
    const response = await Axios.patch(`http://localhost:4000/basket/create`)

    console.log('reponse', response.data)


    dispatch(createBasketAction(response.data))
}
}




