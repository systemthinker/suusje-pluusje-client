const initialState = {
  city: "",
  streetName: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_STREET_NAME":
      return { ...state, streetName: action.payload };
    default:
      return state;
  }
};
