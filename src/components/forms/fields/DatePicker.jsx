// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker as MuiDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
// constants
const useStyles = makeStyles(() => ({
  root: {
    '& .Mui-focused.Mui-focused': {
      color: '#333'
    }
  },
  helperText: {
    lineHeight: 0,
    marginBottom: `8px`
  }
}));

const DatePicker = ({
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
  format,
  variant
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
  //   debugger;

  const onchange = date => {
    dispatch(updateFxn(formName, fieldName, date));
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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiDatePicker
        margin={'normal'}
        disableToolbar
        disablePast
        className={classes.root}
        label={label}
        autoFocus={autoFocus}
        required={!isOptional}
        value={val}
        variant={variant}
        format={format}
        onChange={onchange}
        onBlur={onblur}
      />
      <FormHelperText
        error={err}
        id="component-error-text"
        style={{ color: err ? 'red' : 'transparent' }}
        className={classes.helperText}
      >
        {err || 'error text error text error text error text'}
      </FormHelperText>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
