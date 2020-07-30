const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_BASKET":
      return [...action.payload];

    case "FETCH_BASKET":
      return [...action.payload];

    case "REMOVE_PRODUCT_FROM_BASKET":
      return [...action.payload];

    default:
      return state;
  }
};
