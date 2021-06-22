import _ from 'lodash';
// import { combineReducers } from 'redux';
import * as types from '../../types/ViewTypes';

export const initState = {
  activeConversationIdx: 0,
  activeConversationId: null,
  activeConversationObj: null,
  profileMap: null,
  conversationsArr: [],
};

const MessagesReducer = (state = _.cloneDeep(initState), action) => {
  const newState = _.cloneDeep(state);
  const { payload } = action;
  switch (action.type) {
    case types.MSG_UPDATE_ACTIVE_CONVERSATION_IDX:
      newState.activeConversationIdx = payload;
      return newState;
    case types.MSG_UPDATE_ACTIVE_CONVERSATION_ID:
      newState.activeConversationId = payload;
      return newState;
    case types.MSG_UPDATE_ACTIVE_CONVERSATION:
      if (/*payload.conversationId === undefined || */ payload.idx === undefined) {
        alert('Please use id or idx');
      }
      // newState.activeConversationId = payload.conversationId;
      newState.activeConversationIdx = payload.idx;
      newState.activeConversationObj = null;
      return newState;
    case types.MSG_UPDATE_ACTIVE_CONVERSATION_OBJ:
      newState.activeConversationObj = payload;
      return newState;
    case types.MSG_UPDATE_PROFILE_MAP:
      newState.profileMap = payload;
      return newState;
    case types.MSG_UPDATE_CONVERSATIONS_ARR:
      newState.conversationsArr = payload;
      return newState;
    default:
      return newState;
  }
};

export default MessagesReducer;
