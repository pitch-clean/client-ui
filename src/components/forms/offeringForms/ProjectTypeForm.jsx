// react
import React from 'react';
// utils
import Joi from 'joi';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm,
  updateFormValid,
} from '../../../redux/actions/CreateOfferingActions';
// components
import TextField from '../fields/TextField';
import RadioGroup from '../fields/RadioGroup';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
}));
const radioButtons = [
  {
    value: 'solar',
    label: 'Solar',
  },
  {
    value: 'wind',
    label: 'Wind',
  },
  {
    value: 'infrastructure',
    label: 'Infrastructure',
  },
  {
    value: 'batteryStorage',
    label: 'Battery Storage',
  },
];

/**
 * main
 */
const ProjectTypeForm = ({ reducerName, formName }) => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid item className={`ProjectTypeForm ${classes.root}`}>
      <RadioGroup
        reducerName={reducerName}
        formName={formName}
        fieldName="type"
        label="Please select the type of project to list"
        updateFxn={updateFormFieldValue}
        validUpdateFxn={updateFormValid}
        radioButtons={radioButtons}
      />
      <TextField
        fieldName="other"
        label="Other"
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
export default ProjectTypeForm;
