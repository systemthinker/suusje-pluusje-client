import { combineReducers } from "redux";
import appState from "./appState/reducer";
import admin from "./admin/reducer";
import bestelling from './bestelling/reducer'
import klant from './klant/reducer'
import productDetails from './productDetails/reducer'
import winkelwagen from './winkelwagen/reducer'

export default combineReducers({
  appState,
  admin,
  bestelling,
  klant,
  productDetails,
  winkelwagen,
});
