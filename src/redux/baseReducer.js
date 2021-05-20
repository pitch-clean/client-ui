// modules
import { combineReducers } from 'redux';
// reducers
import ViewReducer from './reducers/ViewReducer';
import AuthReducer from './reducers/AuthReducer';
import OfferingsReducer from './reducers/OfferingsReducer';
import RegisterReducer from './reducers/RegisterReducer';
import CreateOfferingReducer from './reducers/CreateOfferingReducer';
import CreateRSVPReducer from './reducers/CreateRSVPReducer';

// main
export default combineReducers({
  view: ViewReducer,
  auth: AuthReducer,
  offerings: OfferingsReducer,
  register: RegisterReducer,
  createOffering: CreateOfferingReducer,
  createRSVP: CreateRSVPReducer,
});
