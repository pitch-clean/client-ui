import * as types from '../../types/ViewTypes';

export const updateActiveConversationIdx = payload => dispatch => {
  dispatch({
    type: types.MSG_UPDATE_ACTIVE_CONVERSATION_IDX,
    payload,
  });
};
export const updateActiveConversationId = payload => dispatch => {
  dispatch({
    type: types.MSG_UPDATE_ACTIVE_CONVERSATION_ID,
    payload,
  });
};
export const updateActiveConversation = payload => dispatch => {
  dispatch({
    type: types.MSG_UPDATE_ACTIVE_CONVERSATION,
    payload,
  });
};
export const updateActiveConversationObj = payload => dispatch => {
  dispatch({
    type: types.MSG_UPDATE_ACTIVE_CONVERSATION_OBJ,
    payload,
  });
};
export const updateProfileMap = payload => dispatch => {
  dispatch({
    type: types.MSG_UPDATE_PROFILE_MAP,
    payload,
  });
};
export const createConversation = conversationObject => dispatch => {
  const {userId, messageText} = conversationObject;
  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('textMessage', messageText);
  formData.append('participants', JSON.stringify([
    {participantId: 'participant1', actionsAllowed: ['all']},
  ]));
  fetch(process.env.REACT_APP_SERVER_API_PATH + '/conversations', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGI0YWVkYzNjNDg2MjAwYjBhMDlkNTUiLCJlbWFpbEFkZHJlc3MiOiJ1c2VyQHRlc3QuY29tIiwicm9sZSI6ImludmVzdG9yIiwicHJvZmlsZSI6eyJmaXJzdE5hbWUiOiJVc2VyIiwibGFzdE5hbWUiOiJUZXN0IiwiZ2VuZGVyIjoibWFsZSIsImNvbnRhY3QiOltdfSwiaWF0IjoxNjIyNTQ4MjgwfQ.Ee3yxGDSTHrRLb3XzECq1cuuZrGtjrwFb-yY17a72O4'
    },
    body: formData,
  })
    .then(result => result.json())
    .then((result) => {
      dispatch({
        type: 'test',
        payload: result,
      });
    });
};

export const createMessage = () => dispatch => {};

export const updateConversationsArr = payload => dispatch => {
  dispatch({
    type: types.MSG_UPDATE_CONVERSATIONS_ARR,
    payload,
  });
};