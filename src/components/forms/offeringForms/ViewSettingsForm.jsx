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
    value: 'passwordProtected',
    label: 'Password Protected',
  },
  {
    value: 'firstConnections',
    label: 'First Connections',
  },
  {
    value: 'followers',
    label: 'Followers',
  },
  {
    value: 'publicViewing',
    label: 'Public Viewing',
  },
];

/**
 * main
 */
const ViewSettingsForm = ({ reducerName, formName, message }) => {
  // init hooks
  const classes = useStyles();

  return (
    <Grid item className={`ViewSettingsForm ${classes.root}`}>
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
export default ViewSettingsForm;
