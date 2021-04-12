// modules
import { combineReducers } from 'redux';
import _ from 'lodash';
import Joi from 'joi';

const initLoginInfo = {
  fields: {
    firstName: {
      value: '',
      error: '',
      validator: Joi.string()
        .regex(/^[ a-zA-Z'-]+$/)
        .allow('')
        .max(50),
    },
    middleName: {
      value: '',
      error: '',
      validator: Joi.string()
        .regex(/^[ a-zA-Z'-]+$/)
        .allow('')
        .max(50),
      isOptional: true,
    },
    lastName: {
      value: '',
      error: '',
      validator: Joi.string()
        .regex(/^[ a-zA-Z'-]+$/)
        .allow('')
        .max(50),
      get validate() {
        return this.validator.validate(this.value);
      },
    },
    email: {
      value: '',
      error: '',
      validator: Joi.string().email({ tlds: { allow: false } }),
    },
    password: {
      value: '',
      error: '',
      validator: Joi.string().min(8).max(255),
    },
    get validatePasswords() {
      this.confirmPwd = this.password.value;
      this.value = '';
      this.error = '';
      this.validator = Joi.any().valid(this.password.value).error(new Error('Passwords do not match'));
      this.validate = this.validator.validate(this.confirmPassword.value);
    },
    confirmPassword: {
      value: '',
      error: '',
      get validator(passwordValue) {
        return Joi.any().valid(passwordValue).error(new Error('Passwords do not match'))
      },
    },
  },
};
const LoginReducer = (state = _.cloneDeep(initLoginInfo), action) => {
  ;
};

// reducer
// eslint-disable-next-line
export const FormsRegister = combineReducers({
  loginInfo: LoginReducer,
});
