// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm
} from '../../../redux/actions/CreateRSVPActions';
// components
import TextField from '../fields/TextField';
import LargeTextField from '../fields/LargeTextField';
import { useSelector } from 'react-redux';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '300px',
    maxWidth: `80%`,
    [theme.breakpoints.up('xs')]: {
      width: '70%',
      minWidth: 270,
      paddingLeft: `30px`,
      paddingRight: `7px`,
    },
    '& .MuiTextField-root': {
      margin: `8px 0`,
      display: 'flex',
    }
  }
}));

/**
 * main
 */
const BasicForm = ({ formName, reducerName }) => {
  // init hooks
  const classes = useStyles();
  const state = useSelector(s => s.createRSVP)
  console.log(state)

  return (
    <div
      className={`BasicForm ${classes.root} flexcol`}
    >
      <TextField
        fieldName="title"
        label="Title"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        autoFocus
      />
      <LargeTextField
        fieldName="description"
        label="Description"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        autoFocus
      />
    </div>
  );
};

// export
export default BasicForm;
