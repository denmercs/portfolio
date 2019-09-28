import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

//reducer
import userReducer from "./reducers/userReducer";

const middleware = [thunk];

const reducer = combineReducers({
    user: userReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducer, enhancer)

export default store;

