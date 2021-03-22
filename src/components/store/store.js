import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import reducersRoot from "./reducersRoot";

const store = createStore(reducersRoot, applyMiddleware(thunk));

export default store;