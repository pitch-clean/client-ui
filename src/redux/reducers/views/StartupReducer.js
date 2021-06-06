// utils
import _ from 'lodash';
import * as types from '../../types/ViewTypes';

// init state
const initState = {};

/**
 * main
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const StartupReducer = (state = _.cloneDeep(initState), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_STARTUP_OBJ:
      return action.payload;
    case types.UPDATE_STARTUP_OBJ_FIELD:
      newState[action.field] = action.payload;
      return newState;
    case types.CLEAR_STARTUP:
      return _.cloneDeep(initState);
    default:
      return newState;
  }
};

// export
export default StartupReducer;