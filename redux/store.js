import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhances = composeWithDevTools();
const store = createStore(rootReducer, composeEnhances);

export default store;