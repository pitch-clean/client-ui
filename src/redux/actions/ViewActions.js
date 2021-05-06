import * as types from '../types/ViewTypes';

// eslint-disable-next-line
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
export const updatePosts = payload => dispatch => {
  dispatch({
    type: types.UPDATE_POSTS,
    payload,
  });
};
export const clearFeed = () => dispatch => {
  dispatch({
    type: types.CLEAR_FEED,
  });
};
