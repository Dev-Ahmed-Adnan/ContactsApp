import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers/rootReducer";

import ReduxThunk from "redux-thunk";

const Store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default Store;
