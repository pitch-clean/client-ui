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
const SearchReducer = (state = _.cloneDeep(initState), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_SEARCH:
      return action.payload;
    case types.CLEAR_SEARCH:
      return _.cloneDeep(initState);
    default:
      return newState;
  }
};

// export
export default SearchReducer;
