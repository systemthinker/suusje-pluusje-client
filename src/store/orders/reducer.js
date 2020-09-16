const initialState = {
  city: "",
  cityBilling: "",
  streetName: "",
  streetNameBilling: "",
  postalCode: "",
  postalCodeBilling: "",
  houseNumber: "",
  houseNumberBilling: "",
  errorStatus: false,
  errorStatusBilling: false,

  displayPostalCode: false,
  displayPostalCodeBilling: false,
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
    case "SET_DISPLAY_POSTAL_CODE":
      return { ...state, displayPostalCode: action.payload };
    case "SET_DISPLAY_POSTAL_CODE_BILLING":
      return { ...state, displayPostalCodeBilling: action.payload };
    case "SET_POSTAL_CODE_VALUE":
      return { ...state, postalCode: action.payload };
    case "SET_POSTAL_CODE_BILLING_VALUE":
      return { ...state, postalCodeBilling: action.payload };
    case "SET_HOUSE_NUMBER_VALUE":
      return { ...state, houseNumber: action.payload };
    case "SET_HOUSE_NUMBER_BILLING_VALUE":
      return { ...state, houseNumberBilling: action.payload };
    case "SET_ERROR_FOR_ORDER_PAGE":
      return { ...state, errorStatus: action.payload };
    case "SET_ERROR_FOR_ORDER_PAGE_BILLING ":
      return { ...state, errorStatusBilling: action.payload };

    default:
      return state;
  }
};
