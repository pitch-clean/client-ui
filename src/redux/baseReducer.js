// modules
import {combineReducers} from 'redux';
// reducers
import ViewReducer from './reducers/ViewReducer';

// main
export default combineReducers({
    view: ViewReducer,
})