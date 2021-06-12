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
export const clearProfile = () => dispatch => {
  dispatch({
    type: types.CLEAR_PROFILE,
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
