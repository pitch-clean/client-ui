// modules
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// redux
import baseReducer from './baseReducer';
// dev tool
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const store = createStore(
    baseReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
