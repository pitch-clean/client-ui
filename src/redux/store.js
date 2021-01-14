// modules
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// redux
import baseReducer from './baseReducer';

const middleware = [thunk];

const store = createStore(
    baseReducer,
    {},
    applyMiddleware(...middleware)
);
export default store;
