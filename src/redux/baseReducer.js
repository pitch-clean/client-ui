// modules
import {combineReducers} from 'redux';
// reducers
import ViewReducer from './reducers/ViewReducer';
import AuthReducer from './reducers/AuthReducer';

// main
export default combineReducers({
  view: ViewReducer,
  auth: AuthReducer,
})