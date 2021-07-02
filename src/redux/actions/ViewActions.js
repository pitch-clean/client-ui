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
export const updateProfilePosts = payload => dispatch => {
  dispatch({
    payload,
    type: types.UPDATE_PROFILE_POSTS,
  });
};
export const updateProfileLikes = payload => dispatch => {
  dispatch({
    payload,
    type: types.UPDATE_LIKED_ITEMS,
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
export const createComment = commentObj => dispatch => {
  dispatch({
    type: types.UPDATE_POST_COMMENTS,
    payload: commentObj,
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
export const updateStartupsFilters = payload => dispatch => {
  dispatch({
    payload,
    type: types.UPDATE_STARTUPS_FILTERS,
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

// post detail
export const clearPostDetail = () => dispatch => {
  dispatch({
    type: types.CLEAR_POST_DETAIL,
  });
};
export const overwritePostDetail = payload => dispatch => {
  dispatch({
    type: types.OVERWRITE_POST_DETAIL,
    payload
  });
};
