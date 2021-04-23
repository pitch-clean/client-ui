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
const BasicsForm = ({ formName, reducerName }) => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={`BasicsForm ${classes.root} `}
    >
      <TextField
        fieldName="investmentName"
        label="Investment Name"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        autoFocus
      />
      <TextField
        fieldName="sponsorName"
        label="Sponsor Name"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
      />
      <TextField
        fieldName="location"
        label="Location"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        isUpdateOnChange
      />
    </Grid>
  );
};

// export
export default BasicsForm;
