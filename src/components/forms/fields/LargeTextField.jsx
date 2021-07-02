// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { TextField as MuiTextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
// constants
const useStyles = makeStyles(() => ({
  root: {
    width: `100%`,
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
const LargeTextField = ({
  reducerName,
  formName,
  fieldName,
  label,
  autoFocus,
  updateFxn,
  updateErrorFxn,
  validCheckFxn,
  customClassName,
}) => {
  // init hooks
  const dispatch = useDispatch();
  const classes = useStyles();
  // state
  const val = useSelector(s => s.forms[reducerName][formName].fields[fieldName].value);
  const err = useSelector(s => s.forms[reducerName][formName].fields[fieldName].error);
  const validator = useSelector(s => s.forms[reducerName][formName].fields[fieldName].validator);
  const isOptional = useSelector(s => s.forms[reducerName][formName].fields[fieldName].isOptional);

  const onchange = e => {
    dispatch(updateFxn(formName, fieldName, e.target.value));
    const { error } = validator
      ? validator.validate(e.target.value)
      : validator.validate(e.target.value);
    dispatch(updateErrorFxn(formName, fieldName, error && error.message));
    dispatch(validCheckFxn(formName, error));
  };

  return (
    <>
      <MuiTextField
        className={classes.root}
        value={val}
        label={label}
        type="text"
        error={err}
        onChange={onchange}
        required={!isOptional}
        autoFocus={autoFocus}
        margin="dense"
        rows={4}
        variant="outlined"
        defaultValue={label}
        id="outlined-multiline-static"
        multiline
      />
      <FormHelperText
        error={err}
        id="component-error-text"
        style={{ color: err ? 'red' : 'transparent' }}
        className={classes.helperText}
      >
        {err || 'error'}
      </FormHelperText>
    </>
  );
};

// export
export default LargeTextField;
