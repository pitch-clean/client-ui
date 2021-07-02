// utils
import _ from 'lodash';
import * as types from '../../types/ViewTypes';

// init state
const initState = {
  startupsArr: [],
  activeStartup: {},
  filters: {},
};
let idx;

/**
 * main
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const StartupReducer = (state = _.cloneDeep(initState), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_STARTUPS_ARR:
      newState.startupsArr = action.payload || [];
      return newState;
    case types.UPDATE_ACTIVE_STARTUP_OBJ:
      newState.activeStartup = action.payload;
      return newState;
    case types.UPDATE_ACTIVE_STARTUP_OBJ_FIELD:
      newState.activeStartup[action.field] = action.payload;
      return newState;
    case types.UPDATE_STARTUP_LIKES:
      idx = newState.startupsArr.findIndex(startup => startup._id === action.payload._id);
      newState.startupsArr[idx].likes = action.payload.likes;
      return newState;
    case types.UPDATE_STARTUP_REPOSTS:
      idx = newState.startupsArr.findIndex(startup => startup._id === action.payload._id);
      newState.startupsArr[idx].reposts = action.payload.reposts;
      return newState;
    case types.UPDATE_STARTUPS_FILTERS:
      newState.filters = action.payload;
      return newState;
    case types.CLEAR_ACTIVE_STARTUP:
      return _.cloneDeep(initState);
    default:
      return newState;
  }
};

// export
export default StartupReducer;
