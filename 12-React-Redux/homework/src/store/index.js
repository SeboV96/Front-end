import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import thunk from "redux-thunk"; // middleware de asyncronismo

//v6 --> const 3 = creaateSlice ---> podriamos tener slices

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

