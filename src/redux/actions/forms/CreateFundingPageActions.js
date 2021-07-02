import * as types from '../../types/FormsTypes';

export const loadInitState = payload => dispatch => {
  dispatch({
    type: types.F_FP_LOAD_INIT_STATE,
    payload,
  });
};
export const updateL2 = payload => dispatch => {
  dispatch({
    type: types.F_FP_CLEAR_FORM,
    payload,
  });
};
export const updateFormFieldValue = (form, field, payload) => dispatch => {
  dispatch({
    type: types.F_FP_UPDATE_FORM_FIELD_VALUE,
    form,
    field,
    payload,
  });
};
export const updateFormFieldError = (form, field, payload) => dispatch => {
  dispatch({
    type: types.F_FP_UPDATE_FORM_FIELD_ERROR,
    form,
    field,
    payload,
  });
};
export const checkIfValidForm = (form, error) => dispatch => {
  dispatch({
    type: types.F_FP_CHECK_IF_VALID_FORM,
    form,
    error,
  });
};
export const checkIfAllValidForms = () => dispatch => {
  dispatch({
    type: types.F_FP_CHECK_IF_ALL_VALID_FORMS,
  });
};
export const resetAllForms = () => dispatch => {
  dispatch({
    type: types.F_FP_RESET_ALL_FORMS,
  });
};
export const clearForm = () => dispatch => {
  dispatch({
    type: types.F_FP_CLEAR_FORM,
  });
};
