import * as types from '../types/AuthTypes';

// log in and out
export const updateLoginField = (formName, fieldName, value, error) => dispatch => {
  dispatch({
    type: types.UPDATE_LOGIN_FIELD,
    formName,
    fieldName,
    value,
    error,
  });
};
export const updateLoginStatus = (isLoggedIn, profileObj = {}) => dispatch => {
  dispatch({
    type: types.UPDATE_LOGIN_STATUS,
    isLoggedIn,
    profileObj,
  });
};
export const resetLoginForm = () => dispatch => {
  dispatch({
    type: types.RESET_LOGIN_FORM,
  });
};
