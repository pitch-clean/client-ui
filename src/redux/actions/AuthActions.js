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
export const updateFormFieldValue = (field, payload) => dispatch => {
  dispatch({
    type: types.LOGIN_UPDATE_FORM_FIELD_VALUE,
    field,
    payload,
  });
};
export const checkIfValidForm = (error) => dispatch => {
  dispatch({
    type: types.LOGIN_CHECK_IF_VALID_FORM,
    error,
  });
};
export const updateLoginStatus = profileObj => dispatch => {
  dispatch({
    type: types.UPDATE_LOGIN_STATUS,
    profileObj,
  });
};
export const resetLoginForm = () => dispatch => {
  dispatch({
    type: types.RESET_LOGIN_FORM,
  });
};
export const logout = () => dispatch => {
  dispatch({
    type: types.LOGOUT,
  });
};
