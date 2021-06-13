// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import { KeyboardTimePicker as MuiTimePicker } from '@material-ui/pickers';
// constants
const useStyles = makeStyles(() => ({
  root: {
    '& .Mui-focused.Mui-focused': {
      color: '#333',
    }
  },
  dialogRoot: {
    '& .MuiButton-textPrimary': {
      color: '#6a6464'
    }
  },
  helperText: {
    lineHeight: 0,
    marginBottom: `8px`,
  }
}));

const TimePicker = ({
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
}) => {
  // init hooks
  const dispatch = useDispatch();
  const classes = useStyles();
  // state
  const val = useSelector(s => s[reducerName][formName].fields[fieldName].value);
  const err = useSelector(s => s[reducerName][formName].fields[fieldName].error);
  const reduxValidator = useSelector(s => s[reducerName][formName].fields[fieldName].validator);
  const isOptional = useSelector(s => s[reducerName][formName].fields[fieldName].isOptional);
  const validator_ = reduxValidator || validator;
  // fxns
  const onchange = time => {
    dispatch(updateFxn(formName, fieldName, time));
    if (isUpdateOnChange && updateErrorFxn && validCheckFxn) {
      const { error } = validator_
        ? validator_.validate(e.target.value)
        : validator_.validate(e.target.value);
      dispatch(updateErrorFxn(formName, fieldName, error && error.message));
      dispatch(validCheckFxn(formName, error));
    }
  };
  const onblur = () => {
    const { error } = validator_.validate(val);
    dispatch(updateErrorFxn(formName, fieldName, error && error.message));
    dispatch(validCheckFxn(formName, error));
  };

  return (
    <>
      <MuiTimePicker
        margin="normal"
        className={classes.root}
        label={label}
        autoFocus={autoFocus}
        required={!isOptional}
        value={val}
        onChange={onchange}
        onBlur={onblur}
        KeyboardButtonProps={{ 'aria-label': 'change time' }}
        DialogProps={{ className: classes.dialogRoot }}
        variant={variant}
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

export default TimePicker;
