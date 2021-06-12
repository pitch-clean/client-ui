// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  updateActiveForm,
  checkIfAllValidForms,
  resetAllForms
} from '../../redux/actions/CreateRSVPActions';
// components
import HorizontalNonLinearAlternativeLabelStepper from '../elements/HorizontalNonLinearAlternativeLabelStepper';
import BasicForm from './rsvpForms/BasicForm';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 10%`,
    minHeight: `50vh`
  }
}));
const reducerName = 'createRSVP';

/**
 * main
 * controls the form groups
 */
function CreateRSVPForm() {
  // init hooks
  const classes = useStyles();

  const stepObjArr = [
    {
      header: 'Title',
      message: 'Upload media files here:',
      component: <BasicForm formName="general" reducerName={reducerName} />,
      isOptional: false,
      formName: 'general',
    },
  ];

  return (
    <div
      className={`CreateRSVPForm ${classes.root} w100 flexrow`}
    >
      <HorizontalNonLinearAlternativeLabelStepper
        stepObjsArr={stepObjArr}
        redirectRoute={window.env.client.rsvp}
        apiRoute={window.env.api.rsvps}
        reducerName={reducerName}
        updateActiveForm_={updateActiveForm}
        checkIfAllValidForms_={checkIfAllValidForms}
        resetAllForms_={resetAllForms}
      />
    </div>
  );
};

// export
export default CreateRSVPForm;
