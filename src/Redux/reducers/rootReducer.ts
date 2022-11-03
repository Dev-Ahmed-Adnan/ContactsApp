import { combineReducers } from "redux";

import getContactsReducer from "./contacts/getContactsReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  getContactsReducer,
  authReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
