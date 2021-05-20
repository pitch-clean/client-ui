// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm
} from '../../../redux/actions/CreateRSVPActions';
// components
import TextField from '../fields/TextField';
import LargeTextField from '../fields/LargeTextField';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '300px',
    maxWidth: `80%`,
    [theme.breakpoints.up('xs')]: {
      width: '70%',
      minWidth: 270,
      paddingLeft: `30px`,
      paddingRight: `7px`
    },
    '& .MuiTextField-root': {
      margin: `8px 0`,
      display: 'flex'
    }
  }
}));

/**
 * main
 */
const RsvpFirstFrom = ({ formName, reducerName }) => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={`RsvpFirstFrom ${classes.root} `}
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
    </Grid>
  );
};

// export
export default RsvpFirstFrom;
