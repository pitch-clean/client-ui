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
    value: 'seniorDebt',
    label: 'Senior Debt',
  },
  {
    value: 'mezzanineDebt',
    label: 'Mezzanine Debt',
  },
  {
    value: 'subordinateDebt',
    label: 'Subordinate Debt',
  },
  {
    value: 'preferredEquity',
    label: 'Preferred Equity',
  },
  {
    value: 'commonEquity',
    label: 'Common Equity',
  },
];

/**
 * main
 */
const AssetClassForm = ({ reducerName, formName, message }) => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid item className={`AssetClassForm ${classes.root}`}>
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
export default AssetClassForm;
