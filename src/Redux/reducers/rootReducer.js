import { combineReducers } from "redux";

import getContactsReducer from "./contacts/getContactsReducer";

export default combineReducers({
  getContactsReducer,
});
