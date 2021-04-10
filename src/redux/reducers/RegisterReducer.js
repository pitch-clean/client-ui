import * as types from '../types/RegisterTypes';

const initialState = {
  loginInfo: {
    isFormValid: false,
  },
  profileType: {
    value: null,
    isFormValid: false,
  },
};

export default function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_PROFILE_FORM:
      return { ...state, [action.form]: { ...state[action.form], ...action.payload } };
    case types.UPDATE_FORM_VALID:
      return { ...state, [action.form]: { ...state[action.form], isFormValid: action.payload } };
    default:
      return { ...state };
  }
}
