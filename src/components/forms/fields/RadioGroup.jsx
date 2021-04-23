// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import {
  Radio,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
const RadioGroup = ({
  reducerName,
  formName,
  fieldName,
  radioButtons,
  updateFxn,
  validUpdateFxn,
}) => {
  // init hooks
  const dispatch = useDispatch();
  const classes = useStyles();
  // state
  const val = useSelector(s => s[reducerName][formName].fields[fieldName].value);
  // callbacks
  const onChange = e => {
    dispatch(updateFxn(formName, fieldName, e.target.value));
    dispatch(validUpdateFxn(formName, true));
  };
  // build
  const buildButtons = radioButtons => {
    return radioButtons.map(buttonObj => {
      return (
        <FormControlLabel value={buttonObj.value} control={<Radio />} label={buttonObj.label} />
      );
    });
  };

  return (
    <FormControl component="fieldset" className={`RadioGroup ${classes.root}`}>
      <MuiRadioGroup aria-label="type" name="type1" value={val} onChange={onChange}>
        {buildButtons(radioButtons)}
      </MuiRadioGroup>
    </FormControl>
  );
};

// export
export default RadioGroup;
