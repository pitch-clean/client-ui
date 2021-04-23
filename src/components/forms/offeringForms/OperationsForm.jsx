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
const FinancialProjectionsForm = ({ formName, reducerName }) => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={`OperationsForm ${classes.root}`}
    >
      <TextField
        fieldName="expectedAnnualMwh"
        label="Expected Annual MWH"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        autoFocus
      />
      <TextField
        fieldName="capacity"
        label="Capacity"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        isUpdateOnChange
      />
      <TextField
        fieldName="ppaTerm"
        label="PPA Term"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        isUpdateOnChange
      />
      <TextField
        fieldName="ppaPrice"
        label="PPA Price"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        isUpdateOnChange
      />
      <TextField
        fieldName="commercial"
        label="Commercial"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        isUpdateOnChange
      />
      <TextField
        fieldName="counterparty"
        label="Counterparty"
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
export default FinancialProjectionsForm;
