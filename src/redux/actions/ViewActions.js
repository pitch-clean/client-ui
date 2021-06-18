import * as types from '../types/ViewTypes';

export const updateIsDarkMode = payload => dispatch => {
  dispatch({
    type: types.IS_DARK_MODE,
    payload,
  });
};
export const updateView = payload => dispatch => {
  dispatch({
    type: types.UPDATE_VIEW,
    payload,
  });
};
export const updateL1 = payload => dispatch => {
  dispatch({
    type: types.UPDATE_L1,
    payload,
  });
};
// profile
export const updateProfileTab = payload => dispatch => {
  dispatch({
    type: types.UPDATE_PROFILE_TAB,
    payload,
  });
};
export const updateViewProfile = payload => dispatch => {
  dispatch({
    type: types.UPDATE_VIEW_PROFILE,
    payload,
  });
};
export const clearViewProfile = () => dispatch => {
  dispatch({
    type: types.CLEAR_VIEW_PROFILE,
  });
};
export const updateRecommendedConnections = payload => dispatch => {
  dispatch({
    payload,
    type: types.UPDATE_RECOMMENDED_CONNECTIONS,
  });
};
// messages
export const updateActiveConversationIdx = payload => dispatch => {
  dispatch({
    type: types.UPDATE_ACTIVE_CONVERSATION_IDX,
    payload,
  });
};
export const updateActiveConversationId = payload => dispatch => {
  dispatch({
    type: types.UPDATE_ACTIVE_CONVERSATION_ID,
    payload,
  });
};
export const updateActiveConversation = payload => dispatch => {
  dispatch({
    type: types.UPDATE_ACTIVE_CONVERSATION,
    payload,
  });
};
export const updateActiveConversationObj = payload => dispatch => {
  dispatch({
    type: types.UPDATE_ACTIVE_CONVERSATION_OBJ,
    payload,
  });
};
export const updateProfileMap = payload => dispatch => {
  dispatch({
    type: types.UPDATE_PROFILE_MAP,
    payload,
  });
};

// feed
export const updatePostsArr = payload => dispatch => {
  dispatch({
    type: types.UPDATE_POSTS_ARR,
    payload,
  });
};
export const updatePostLikes = payload => dispatch => {
  dispatch({
    type: types.UPDATE_POST_LIKES,
    payload,
  });
};
export const updatePostReposts = payload => dispatch => {
  dispatch({
    type: types.UPDATE_POST_REPOSTS,
    payload,
  });
};
export const updatePostComments = ({ postId, commentsArr }) => dispatch => {
  dispatch({
    type: types.UPDATE_POST_COMMENTS,
    payload: { postId, commentsArr },
  });
};
export const clearFeed = () => dispatch => {
  dispatch({
    type: types.CLEAR_FEED,
  });
};

// startup
export const updateStartupsArr = payload => dispatch => {
  dispatch({
    type: types.UPDATE_STARTUPS_ARR,
    payload,
  });
};
export const updateActiveStartupObj = payload => dispatch => {
  dispatch({
    type: types.UPDATE_ACTIVE_STARTUP_OBJ,
    payload,
  });
};
export const updateStartupObjField = (field, payload) => dispatch => {
  dispatch({
    type: types.UPDATE_ACTIVE_STARTUP_OBJ_FIELD,
    field,
    payload,
  });
};
export const updateStartupLikes = payload => dispatch => {
  dispatch({
    payload,
    type: types.UPDATE_STARTUP_LIKES,
  });
};
export const updateStartupReposts = payload => dispatch => {
  dispatch({
    payload,
    type: types.UPDATE_STARTUP_REPOSTS,
  });
};
export const clearActiveStartup = () => dispatch => {
  dispatch({
    type: types.CLEAR_ACTIVE_STARTUP,
  });
};
// search
export const updateSearch = payload => dispatch => {
  dispatch({
    payload,
    type: types.UPDATE_SEARCH,
  });
};
export const clearSearch = () => dispatch => {
  dispatch({
    type: types.CLEAR_SEARCH,
  });
};
// messages
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

export const createMessage = () => {};
