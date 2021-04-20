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
