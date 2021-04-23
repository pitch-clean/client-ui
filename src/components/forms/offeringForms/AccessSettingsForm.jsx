// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm,
} from '../../../redux/actions/CreateOfferingActions';
// components
import TextField from '../fields/TextField';
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
    },
  },
}));

/**
 * main
 */
const AccessSettingsForm = ({ reducerName, formName, message }) => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid item className={`AccessSettingsForm ${classes.root}`}>
      <TextField
        fieldName="adminAccess"
        label="Administrator Access"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        autoFocus
      />
      <TextField
        fieldName="inboxAccess"
        label="Inbox View Access"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
      />
    </Grid>
  );
};

// export
export default AccessSettingsForm;
