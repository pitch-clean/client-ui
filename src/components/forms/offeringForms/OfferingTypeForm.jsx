// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  updateFormFieldValue,
  updateFormValid,
} from '../../../redux/actions/CreateOfferingActions';
// components
import RadioGroup from '../fields/RadioGroup';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
}));
const radioButtons = [
  {
    value: 'projectFinance',
    label: 'Project Finance',
  },
  {
    value: 'offloading',
    label: 'Offloading',
  },
  {
    value: 'ventureCapital',
    label: 'Venture Capital',
  },
  {
    value: 'refinancing',
    label: 'Refinancing',
  },
];

/**
 * main
 */
const OfferingTypeForm = ({ reducerName, formName, message }) => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid item className={`OfferingTypeForm ${classes.root}`}>
      <RadioGroup
        reducerName={reducerName}
        formName={formName}
        fieldName="type"
        label={message}
        updateFxn={updateFormFieldValue}
        validUpdateFxn={updateFormValid}
        radioButtons={radioButtons}
      />
    </Grid>
  );
};

// export
export default OfferingTypeForm;
