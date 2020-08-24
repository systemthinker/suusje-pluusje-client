import {
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "./actions";

const initialState = {
  loading: false,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING:
      console.log("loading was called");
      return { ...state, loading: true };

    case APP_DONE_LOADING:
      console.log("app done loading was called");
      return { ...state, loading: false };

    case SET_MESSAGE:
      return { ...state, message: action.payload };

    case CLEAR_MESSAGE:
      return { ...state, message: null };

    default:
      return state;
  }
};
