const initialState = {
  city: "",
  streetName: "",
  cityBilling: "",
  streetNameBilling: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_CITY_BILLING":
      return { ...state, cityBilling: action.payload };
    case "SET_STREET_NAME":
      return { ...state, streetName: action.payload };
    case "SET_STREET_NAME_BILLING":
      return { ...state, streetNameBilling: action.payload };
    default:
      return state;
  }
};
