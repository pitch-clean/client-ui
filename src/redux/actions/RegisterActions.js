import * as types from '../types/RegisterTypes';

export const updateProfileForm = (form, payload) => dispatch => {
  dispatch({
    type: types.UPDATE_PROFILE_FORM,
    form,
    payload,
  });
};
export const updateFormValid = (form, value) => dispatch => {
  dispatch({
    type: types.UPDATE_FORM_VALID,
    form,
    payload: value,
  });
};
