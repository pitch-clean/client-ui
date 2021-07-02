// modules
import { combineReducers } from 'redux';
// local
import CreateFundingPageReducer from './CreateFundingPageReducer';
// import CreateOfferingReducer from './CreateOfferingReducer';
// import CreateRSVPReducer from './CreateRSVPReducer';

const FormsReducer = combineReducers({
  fundingPage: CreateFundingPageReducer,
  // createOffering: CreateOfferingReducer,
  // createRSVP: CreateRSVPReducer,
});

export default FormsReducer;
