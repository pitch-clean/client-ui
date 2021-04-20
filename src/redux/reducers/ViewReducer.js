import _ from 'lodash';
import { combineReducers } from 'redux';
import * as types from '../types/ViewTypes';

const initialMainState = {
  currentView: 'home',
  isDarkMode: false,
};
const MainReducer = (state = _.cloneDeep(initialMainState), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_VIEW:
      newState.currentView = action.payload;
      return newState;
    case types.IS_DARK_MODE:
      newState.isDarkMode = action.payload;
      return newState;
    default:
      return newState;
  }
};

const initialProfileState = {
  activeProfileTab: 'about',
  viewProfile: null,
};

const ProfileReducer = (state = _.cloneDeep(initialProfileState), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_PROFILE_TAB:
      newState.activeProfileTab = action.payload;
      return newState;
    case types.UPDATE_VIEW_PROFILE:
      newState.viewProfile = action.payload;
      return newState;
    default:
      return newState;
  }
};

const ViewReducer = combineReducers({
  main: MainReducer,
  profile: ProfileReducer,
});

export default ViewReducer;
