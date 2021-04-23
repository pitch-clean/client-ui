// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// utils
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
const CapitalStackChartForm = ({ formName, reducerName }) => {
  // init hooks
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={`CapitalStackChartForm ${classes.root}`}
    >
      <TextField
        fieldName="seniorDebt"
        label="Senior Debt"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        autoFocus
      />
      <TextField
        fieldName="mezzanineDebt"
        label="Mezzanine Debt"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        isUpdateOnChange
      />
      <TextField
        fieldName="preferredEquity"
        label="Preferred Equity"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        isUpdateOnChange
      />
      <TextField
        fieldName="commonEquity"
        label="Common Equity"
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
export default CapitalStackChartForm;
