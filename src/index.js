import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";


import rootReducer from "./util/reducers";
import App from './App';


const middleware = [thunk, logger]
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
