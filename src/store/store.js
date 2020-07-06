import formReducer from "./reducers/formReducer";
import gridConfigReducer from "./reducers/gridConfigReducer";
import thunk from "redux-thunk";

const { combineReducers, createStore, applyMiddleware } = require("redux");

let reducers = combineReducers({
  form: formReducer,
  gridConfig: gridConfigReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
