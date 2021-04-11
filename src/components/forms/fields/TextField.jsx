// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import Joi from 'joi';
import { TextField as MuiTextField } from '@material-ui/core';
import {
  updateFormFieldError,
  updateFormFieldValue,
  checkIfValidForm,
} from '../../../redux/actions/RegisterActions';

/**
 * Field
 */
const TextField = ({ formName, fieldName, label, validator, autoFocus }) => {
  // init hooks
  const dispatch = useDispatch();
  // state
  const fieldObj = useSelector(s => s.register[formName].fields[fieldName]);
  const val = useSelector(s => s.register[formName].fields[fieldName].value);
  const err = useSelector(s => s.register[formName].fields[fieldName].error);
  const isOptional = useSelector(s => s.register[formName].fields[fieldName].isOptional);
  const passwordObj = useSelector(s => s.register[formName].fields.password);
  let passwordValue;
  if (passwordObj) {
    passwordValue = passwordObj.value;
  }
  let type = 'text';
  if (fieldName === 'confirmPassword' || fieldName === 'password') {
    type = 'password';
  }

  const onchange = e => {
    dispatch(updateFormFieldValue(formName, fieldName, e.target.value));
    if (fieldName === 'confirmPassword' || fieldName === 'password') {
      if (fieldName === 'password') {
        const newValidator = Joi.string().min(8).max(255);
        const { error: error2 } = newValidator.validate(e.target.value);
        dispatch(updateFormFieldError(formName, fieldName, error2 && error2.message));
        dispatch(checkIfValidForm(formName, error2));
      }
      // validate
      const cpVal = Joi.any().valid(passwordValue).error(new Error('Passwords do not match'));
      const { error } = cpVal.validate(e.target.value);
      dispatch(updateFormFieldError(formName, 'confirmPassword', error && error.message));
      dispatch(checkIfValidForm(formName, error));
    }
  };
  const onblur = () => {
    if (fieldName !== 'confirmPassword' && fieldName !== 'password') {
      const { error } = validator.validate(fieldObj.value);
      dispatch(updateFormFieldError(formName, fieldName, error && error.message));
      dispatch(checkIfValidForm(formName, error));
    }
  };

  return (
    <MuiTextField
      variant="outlined"
      value={val}
      label={label}
      type={type}
      error={err}
      helperText={err}
      onChange={onchange}
      onBlur={onblur}
      required={!isOptional}
      autoFocus={autoFocus}
    />
  );
};

// export
export default TextField;
