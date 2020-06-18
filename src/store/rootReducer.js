import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import bestelling from './bestelling/reducer'
import klant from './klant/reducer'
import productDetails from './productDetails/reducer'
import winkelwagen from './winkelwagen/reducer'

export default combineReducers({
  appState,
  user,
  bestelling,
  klant,
  productDetails,
  winkelwagen,
});
