import _ from 'lodash';
// import { combineReducers } from 'redux';
import * as types from '../../types/ViewTypes';

export const initState = {
  activeConversationIdx: 0,
  activeConversationId: -1,
  activeConversationObj: {},
  conversationsArr: [],
  messagesArr: [],
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
      // newState.messagesArr = [];
      return newState;
    case types.MSG_UPDATE_ACTIVE_CONVERSATION_OBJ:
      newState.activeConversationObj = payload;
      return newState;
    case types.MSG_ADD_CONVERSATION_TO_CONVERSATIONSARR:
      newState.conversationsArr.push(payload);
      return newState;
    case types.MSG_UPDATE_CONVERSATIONS_ARR:
      newState.conversationsArr = payload;
      return newState;
    case types.MSG_UPDATE_MESSAGES_ARR:
      newState.messagesArr = payload;
      return newState;
    case types.MSG_ADD_TO_MESSAGES_ARR:
      newState.messagesArr = [...newState.messagesArr, payload];
      return newState;
    case types.MSG_UPDATE_ACTIVE_CONVERSATION_PARTICIPANTS:
      newState.activeConversationObj.participants = payload;
      return newState;
    default:
      return newState;
  }
};

export default MessagesReducer;
