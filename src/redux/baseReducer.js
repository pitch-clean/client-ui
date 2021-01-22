// modules
import {combineReducers} from 'redux';
// reducers
import ViewReducer from './reducers/ViewReducer';
import AuthReducer from './reducers/AuthReducer';
import OfferingsReducer from './reducers/OfferingsReducer';

// main
export default combineReducers({
  view: ViewReducer,
  auth: AuthReducer,
  offerings: OfferingsReducer,
})