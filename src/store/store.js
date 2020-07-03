import formReducer from "./reducers/formReducer";

const { combineReducers, createStore } = require("redux");

let reducers = combineReducers({
  form: formReducer,
});

let store = createStore(reducers);

export default store;
