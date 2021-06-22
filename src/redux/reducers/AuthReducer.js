import _ from 'lodash';
import Joi from 'joi';
import { combineReducers } from 'redux';
import * as types from '../types/AuthTypes';

const initialStateMain = {
  activeProfile: {},
  login: {
    fields: {
      email: {
        value: '',
        error: '',
        validator: Joi
          .string()
          .email({ tlds: { allow: false } })
          .min(5)
          .max(128),
      },
      password: {
        value: '',
        error: '',
        validator: Joi.string().min(8).max(255),
      },
    },
    isValid: false,
  },
  isTestMode: true,
};
const MainReducer = (state = _.cloneDeep(initialStateMain), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_LOGIN_FIELD:
      newState.login.fields[action.fieldName].value = action.value;
      newState.login.fields[action.fieldName].error = action.error;
      return newState;
    case types.UPDATE_LOGIN_STATUS:
      newState.activeProfile = action.profileObj;
      return newState;
    case types.LOGIN_UPDATE_FORM_FIELD_VALUE:
      const { error } = newState.login.fields[action.field].validator.validate(action.payload);
      const errorMsg = error ? error.message : '';
      newState.login.fields[action.field].error = errorMsg;
      newState.login.fields[action.field].value = action.payload;
    case types.LOGIN_CHECK_IF_VALID_FORM:
      // newState.login.fields[action.field].error = action.payload;
      if (
        newState.login.fields.email.error ||
        !newState.login.fields.email.value ||
        newState.login.fields.password.error ||
        !newState.login.fields.password.value
      ) {
        newState.login.isValid = false;
      } else {
        newState.login.isValid = true;
      }
      console.log('newState.login.isValid', newState.login.isValid)
      return newState;
    case types.RESET_LOGIN_FORM:
      newState.login.fields = _.cloneDeep(initialStateMain.login.fields);
      return newState;
    case types.LOGOUT:
      newState.activeProfile = {};
      return newState;
    default:
      return newState;
  }
};

const AuthReducer = combineReducers({
  main: MainReducer,
});

export default MainReducer;
