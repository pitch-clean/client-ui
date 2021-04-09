import * as types from '../types/RegisterTypes';

const initialState = {
  loginInfo: {
    isFormValid: false,
  },
};

export default function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_PROFILE_FORM:
      console.log('state', state)
      console.log('action.form', state[action.form])
      console.log('new', { ...state[action.form], ...action.payload })
      return { ...state, [action.form]: { ...state[action.form], ...action.payload } };
    case types.UPDATE_FORM_VALID:
      console.log('that new new true or false', { ...state[action.form], isFormValid: action.payload })
      return { ...state, [action.form]: { ...state[action.form], isFormValid: action.payload } };
    default:
      return { ...state };
  }
}
