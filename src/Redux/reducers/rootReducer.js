import { combineReducers } from "redux";

import getContactsReducer from "./contacts/getContactsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  getContactsReducer,
  authReducer,
});
