// utils
import _ from 'lodash';
import * as types from '../../types/ViewTypes';

// init state
const initState = {};

/**
 * main
 */
const PostReducer = (state = _.cloneDeep(initState), action) => {
  // const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.OVERWRITE_POST_DETAIL:
      return action.payload;
    case types.CLEAR_POST_DETAIL:
      return _.cloneDeep(initState);
    default:
      return state;
  }
};

export default PostReducer;
