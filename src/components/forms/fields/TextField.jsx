// react
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// utils
import Joi from 'joi';
import { TextField as MuiTextField } from '@material-ui/core';
// constants
const validateField = (obj, setter, checkIsValidForm, fieldName, dispatch, formName) => {
  const { error } = obj.validator.validate(obj.value);
  const newObj = { ...obj, error: error && error.message };
  setter(newObj);
  checkIsValidForm(error);
  dispatch(updateProfileForm(formName, { [fieldName]: obj.value }));
};

/**
 * Allows you to check if sponsor or investor
 */

const TextField = ({ fieldLabel, fieldKey, customValidator }) => {
  // init hooks
  const dispatch = useDispatch();
  // state
  const [input, setInput] = useState({
    value: '',
    validator:
      customValidator ||
      Joi.string()
        .regex(/^[ a-zA-Z'-]+$/)
        .allow('')
        .max(256),
    error: '',
  });

  return (
    <MuiTextField
      variant="outlined"
      value={input.value}
      label={fieldLabel}
      error={input.error}
      helperText={input.error}
      onChange={e => setInput({ ...input, value: e.target.value })}
      onBlur={e => validateField(input, setInput, checkIsValidForm, fieldKey, dispatch)}
      required
    />
  );
};

// export
export default TextField;
