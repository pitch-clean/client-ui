// react
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { updateFormFieldError, updateFormFieldValue } from '../../../redux/actions/RegisterActions';
// constants
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// main
const SelectField = ({
  reducerName,
  formName,
  fieldName,
  label,
  valuesArr,
  updateFxn,
  updateErrorFxn,
  validCheckFxn,
}) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const val = useSelector(s => s.forms[reducerName][formName].fields[fieldName].value);
  const err = useSelector(s => s.forms[reducerName][formName].fields[fieldName].error);
  const isOptional = useSelector(s => s.forms[reducerName][formName].fields[fieldName].isOptional);
  // dispatch(
  //   updateErrorFxn(formName, fieldName, !isOptional && !val ? 'Field cannot be empty' : ''),
  // );

  // event handlers
  const handleChange = e => {
    dispatch(updateFxn(formName, fieldName, e.target.value));
  };
  const optionArr = [<option aria-label="None" value="" />];
  for (let idx = 0; idx < valuesArr.length; idx += 1) {
    const element = valuesArr[idx];
    optionArr.push(<option value={element.value}>{element.label}</option>);
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
      <Select
        native
        error={err}
        // value={fieldName === 'country' ? 'USA' : val}
        onChange={handleChange}
        label={label}
        inputProps={{
          name: fieldName,
          id: 'outlined-age-native-simple',
        }}
        // disabled={fieldName === 'country'}
        required={!isOptional}
      >
        {optionArr}
      </Select>
      <FormHelperText style={{ color: err ? `red` : 'transparent' }}>
        Please select a value
      </FormHelperText>
    </FormControl>
  );
};

// export
export default SelectField;