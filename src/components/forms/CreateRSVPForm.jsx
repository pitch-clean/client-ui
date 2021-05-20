// react
import React from 'react';
import { useHistory } from 'react-router';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import {
  updateActiveForm,
  checkIfAllValidForms,
  resetAllForms
} from '../../redux/actions/CreateRSVPActions';
// components
import HorizontalNonLinearAlternativeLabelStepper from '../elements/HorizontalNonLinearAlternativeLabelStepper';
import RsvpFirstFrom from './rsvpForms/BasicForm';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 10%`,
    minHeight: `50vh`
  }
}));
const reducerName = 'createRSVP';
const envRsvpRoute = 'rsvp';

/**
 * main
 * controls the form groups
 */
function CreateRSVPForm() {
  const classes = useStyles();
  const history = useHistory();

  const stepObjArr = [
    {
      header: 'Title',
      message: 'Upload media files here:',
      component: <RsvpFirstFrom formName="title" reducerName={reducerName} />,
      isOptional: false,
      formName: 'title'
    }
  ];

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={`CreateRSVPForm w100 ${classes.root}`}
    >
      <HorizontalNonLinearAlternativeLabelStepper
        stepObjsArr={stepObjArr}
        redirectPath={`/${envRsvpRoute}`}
        redirectRoute={`${envRsvpRoute}`}
        reducerName={reducerName}
        redirectPath={path => history.push(path)}
        updateActiveForm_={updateActiveForm}
        checkIfAllValidForms_={checkIfAllValidForms}
        resetAllForms_={resetAllForms}
      />
    </Grid>
  );
}

export default CreateRSVPForm;
