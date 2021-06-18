// utils
import _ from 'lodash';
import * as types from '../../types/ViewTypes';

// init state
const initState = {
  activeProfileTab: 'posts',
  viewProfile: null,
};

/**
 * main
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const ProfileReducer = (state = _.cloneDeep(initState), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_PROFILE_TAB:
      newState.activeProfileTab = action.payload;
      return newState;
    case types.UPDATE_VIEW_PROFILE:
      return { ...newState, viewProfile: action.payload, ...action.payload };
    case types.CLEAR_VIEW_PROFILE:
      return _.cloneDeep(initialProfileState);
    default:
      return newState;
  }
};

export default ProfileReducer;
