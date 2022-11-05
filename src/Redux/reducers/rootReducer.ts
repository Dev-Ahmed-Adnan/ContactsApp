import { combineReducers } from "redux";

import getContactsReducer from "./contacts/getContactsReducer";
import selectedContactsReducer from "./contacts/selectedContactsReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  getContactsReducer,
  selectedContactsReducer,
  authReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
