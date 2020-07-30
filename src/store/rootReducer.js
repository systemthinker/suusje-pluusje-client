import { combineReducers } from "redux";
import appState from "./appState/reducer";
import admins from "./admins/reducer";
import orders from "./orders/reducer";
import clients from "./clients/reducer";
import productDetails from "./productDetails/reducer";
import products from "./products/reducer";
import basket from "./baskets/reducer";

export default combineReducers({
  appState,
  admins,
  orders,
  clients,
  productDetails,
  products,
  basket,
});
