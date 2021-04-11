import * as types from '../types/AuthTypes';

export const updateLoginField = (fieldName, value, error) => dispatch => {
  dispatch({
    type: types.UPDATE_LOGIN_FIELD,
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
