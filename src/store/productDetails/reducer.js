const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_DETAIL_PAGE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
