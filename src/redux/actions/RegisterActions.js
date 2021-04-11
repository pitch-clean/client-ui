import * as types from '../types/RegisterTypes';

export const updateProfileForm = (form, payload) => dispatch => {
  dispatch({
    type: types.UPDATE_PROFILE_FORM,
    form,
    payload,
  });
};
export const updateFormFieldValue = (form, field, payload) => dispatch => {
  dispatch({
    type: types.UPDATE_FORM_FIELD_VALUE,
    form,
    field,
    payload,
  });
};
export const updateFormField = (form, field, payload) => dispatch => {
  dispatch({
    type: types.UPDATE_FORM_FIELD,
    form,
    field,
    payload,
  });
};
export const updateFormFieldError = (form, field, payload) => dispatch => {
  dispatch({
    type: types.UPDATE_FORM_FIELD_ERROR,
    form,
    field,
    payload,
  });
};
export const updateFormValid = (form, isValid) => dispatch => {
  dispatch({
    type: types.UPDATE_FORM_VALID,
    form,
    isValid,
  });
};
export const updateActiveForm = formName => dispatch => {
  dispatch({
    type: types.UPDATE_ACTIVE_FORM,
    formName,
  });
};
export const checkIfValidForm = (form, error) => dispatch => {
  dispatch({
    type: types.CHECK_IF_VALID_FORM,
    form,
    error,
  });
};
export const checkIfAllValidForms = () => dispatch => {
  dispatch({
    type: types.CHECK_IF_ALL_VALID_FORMS,
  });
};
