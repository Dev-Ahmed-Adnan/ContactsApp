import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";

import ReduxThunk from "redux-thunk";

const Store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default Store;
