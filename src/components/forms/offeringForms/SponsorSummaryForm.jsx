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
import LargeTextField from '../fields/LargeTextField';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '300px',
    maxWidth: `100%%`,
    paddingLeft: `20px`,
    paddingRight: `20px`,
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      minWidth: 270,
      paddingLeft: `20px`,
      paddingRight: `20px`,
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
const SponsorSummaryForm = ({ formName, reducerName }) => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={`SponsorSummaryForm ${classes.root}`}
    >
      <LargeTextField
        fieldName="sponsorSummary"
        label="Sponsor Summary"
        reducerName={reducerName}
        formName={formName}
        updateFxn={updateFormFieldValue}
        updateErrorFxn={updateFormFieldError}
        validCheckFxn={checkIfValidForm}
        autoFocus
      />
    </Grid>
  );
};

// export
export default SponsorSummaryForm;
