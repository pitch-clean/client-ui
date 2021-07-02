// modules
import { combineReducers } from 'redux';
// reducers
import ViewReducer from './reducers/views/ViewReducer';
import AuthReducer from './reducers/AuthReducer';
import OfferingsReducer from './reducers/OfferingsReducer';
import RegisterReducer from './reducers/RegisterReducer';
import FormsReducer from './reducers/forms/FormsReducer';

// main
export default combineReducers({
  view: ViewReducer,
  auth: AuthReducer,
  offerings: OfferingsReducer,
  register: RegisterReducer,
  forms: FormsReducer,
});
