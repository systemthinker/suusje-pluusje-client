const initialState = {
  city: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    default:
      return state;
  }
};
