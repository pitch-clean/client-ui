// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import Joi from 'joi';
import { TextField as MuiTextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import { updateFormFieldError, checkIfValidForm } from '../../../redux/actions/RegisterActions';
// constants
const useStyles = makeStyles(() => ({
  root: {
    '& .Mui-focused.Mui-focused': {
      color: '#333',
    },
  },
  helperText: {
    lineHeight: 0,
    marginBottom: `8px`,
  },
}));

/**
 * Field
 */
const TextField = ({
  reducerName,
  formName,
  fieldName,
  label,
  validator,
  autoFocus,
  updateFxn,
  updateErrorFxn,
  validCheckFxn,
  isUpdateOnChange,
  variant,
  onKeyDown,
}) => {
  // init hooks
  const dispatch = useDispatch();
  const classes = useStyles();
  // state
  const val = useSelector(s => s[reducerName][formName].fields[fieldName].value);
  const err = useSelector(s => s[reducerName][formName].fields[fieldName].error);
  const reduxValidator = useSelector(s => s[reducerName][formName].fields[fieldName].validator);
  const isOptional = useSelector(s => s[reducerName][formName].fields[fieldName].isOptional);
  const passwordObj = useSelector(s => s[reducerName][formName].fields.password);
  const validator_ = reduxValidator || validator;
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
      // for login only
      if (formName === 'login') {
        dispatch(updateFxn(fieldName, e.target.value));
        dispatch(validCheckFxn(err));
      } else {
        const { error } = validator_.validate(e.target.value);
        dispatch(updateFxn(formName, fieldName, e.target.value, error && error.message));
      }
    } else {
      dispatch(updateFxn(formName, fieldName, e.target.value));
      if (isUpdateOnChange && updateErrorFxn && validCheckFxn) {
        const { error } = validator_
          ? validator_.validate(e.target.value)
          : validator_.validate(e.target.value);
        dispatch(updateErrorFxn(formName, fieldName, error && error.message));
        dispatch(validCheckFxn(formName, error));
      }
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
        if (updateErrorFxn) {
          dispatch(updateErrorFxn(formName, 'confirmPassword', error && error.message));
        } else {
          dispatch(updateFormFieldError(formName, 'confirmPassword', error && error.message));
        }
        if (validCheckFxn) {
          dispatch(validCheckFxn(formName, error));
        } else {
          dispatch(checkIfValidForm(formName, error));
        }
      }
    }
  };
  const onblur = () => {
    if (reducerName === 'auth') {

    } else {
      if (fieldName !== 'confirmPassword' && fieldName !== 'password') {
        const { error } = validator_.validate(val);
        if (updateErrorFxn) {
          dispatch(updateErrorFxn(formName, fieldName, error && error.message));
        } else {
          dispatch(updateFormFieldError(formName, fieldName, error && error.message));
        }
        if (validCheckFxn) {
          dispatch(validCheckFxn(formName, error));
        } else {
          dispatch(checkIfValidForm(formName, error));
        }
      }
    }
  };

  return (
    <>
      <MuiTextField
        className={classes.root}
        style={{ width: `100%` }}
        value={val}
        label={label}
        type={type}
        error={err}
        onChange={onchange}
        onBlur={onblur}
        required={!isOptional}
        autoFocus={autoFocus}
        margin="dense"
        classes={{}}
        variant={variant}
        id="margin-dense"
        onKeyDown={onKeyDown}
      />
      <FormHelperText
        error={err}
        id="component-error-text"
        style={{ color: err ? 'red' : 'transparent' }}
        className={classes.helperText}
      >
        {err || 'error text error text error text error text'}
      </FormHelperText>
    </>
  );
};

// export
export default TextField;
