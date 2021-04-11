// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import Joi from 'joi';
import { TextField as MuiTextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import {
  updateFormFieldError,
  updateFormFieldValue,
  checkIfValidForm,
} from '../../../redux/actions/RegisterActions';
// constants
const useStyles = makeStyles(() => ({
  helperText: {
    lineHeight: 0,
    marginBottom: `5px`,
  },
}));

/**
 * Field
 */
const TextField = ({ reducerName, formName, fieldName, label, validator, autoFocus, updateFxn }) => {
  // init hooks
  const dispatch = useDispatch();
  const classes = useStyles();
  // state
  const val = useSelector(s => s[reducerName][formName].fields[fieldName].value);
  const err = useSelector(s => s[reducerName][formName].fields[fieldName].error);
  const isOptional = useSelector(s => s[reducerName][formName].fields[fieldName].isOptional);
  const passwordObj = useSelector(s => s[reducerName][formName].fields.password);
  let passwordValue;
  if (passwordObj) {
    passwordValue = passwordObj.value;
  }
  let type = 'text';
  if (fieldName === 'confirmPassword' || fieldName === 'password') {
    type = 'password';
  }

  const onchange = e => {
    if (reducerName === 'auth') {
      const { error } = validator.validate(e.target.value);
      dispatch(updateFxn(fieldName, e.target.value, error && error.message));
    } else {
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
    }
  };
  const onblur = () => {
    if (!reducerName === 'auth') {
      if (fieldName !== 'confirmPassword' && fieldName !== 'password') {
        const { error } = validator.validate(val.value);
        dispatch(updateFormFieldError(formName, fieldName, error && error.message));
        dispatch(checkIfValidForm(formName, error));
      }
    }
  };
  return (
    <>
      <MuiTextField
        variant="outlined"
        value={val}
        label={label}
        type={type}
        error={err}
        onChange={onchange}
        onBlur={onblur}
        required={!isOptional}
        autoFocus={autoFocus}
        margin="dense"
        id="margin-dense"
      />
      <FormHelperText
        error={err}
        id="component-error-text"
        style={{ color: err ? 'red' : 'transparent' }}
        className={classes.helperText}
      >
        {err || 'error text'}
      </FormHelperText>
    </>
  );
};

// export
export default TextField;
