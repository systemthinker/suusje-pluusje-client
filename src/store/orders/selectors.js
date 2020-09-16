export const selectCity = (state) => state.orders.city;
export const selectCityBilling = (state) => state.orders.cityBilling;
export const selectStreetName = (state) => state.orders.streetName;
export const selectStreetNameBilling = (state) =>
  state.orders.streetNameBilling;
export const selectDisplayPostalCode = (state) =>
  state.orders.displayPostalCode;
export const selectDisplayPostalCodeBilling = (state) =>
  state.orders.displayPostalCodeBilling;
export const selectHouseNumber = (state) => state.orders.houseNumber;
export const selectHouseNumberBilling = (state) =>
  state.orders.houseNumberBilling;

export const selectPostalCode = (state) => state.orders.postalCode;
export const selectPostalCodeBilling = (state) =>
  state.orders.postalCodeBilling;
export const selectErrorStatus = (state) => state.orders.errorStatus;
export const selectErrorStatusBilling = (state) =>
  state.orders.errorStatusBilling;
