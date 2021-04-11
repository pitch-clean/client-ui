import _ from 'lodash';
import * as types from '../types/AuthTypes';

const initialState = {
  activeProfile: { profileName: 'test' },
  login: {
    fields: {
      username: { value: '', error: '' },
      password: { value: '', error: '' },
    },
  },
  isAuthenticated: false,
};
const clonedInitState = _.cloneDeep(initialState);

export default function AuthReducer(state = clonedInitState, action) {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_LOGIN_FIELD:
      newState.login.fields[action.fieldName].value = action.value;
      newState.login.fields[action.fieldName].error = action.error;
      return newState;
    case types.UPDATE_LOGIN_STATUS:
      newState.isAuthenticated = action.isLoggedIn;
      newState.activeProfile = action.profileObj;
      return newState;
    case types.RESET_LOGIN_FORM:
      newState.login.fields = _.cloneDeep(initialState.login.fields);
      return newState;
    default:
      return newState;
  }
}