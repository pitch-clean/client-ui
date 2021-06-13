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
import TimeAndDate from './rsvpForms/TimeAndDate';
import Location from './rsvpForms/Location';
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
const CreateRSVPForm = () => {
  // init hooks
  const classes = useStyles();

  const stepObjArr = [
    {
      header: 'Basic info',
      message: '',
      component: <BasicForm formName="general" reducerName={reducerName} />,
      isOptional: false,
      formName: 'general',
    },
    // {
    //   header: 'Location',
    //   message: '',
    //   component: <Location formName="location" reducerName={reducerName} />,
    //   isOptional: false,
    //   formName: 'location'
    // },
    {
      header: 'Time and Date',
      message: '',
      component: <TimeAndDate formName="timeAndDate" reducerName={reducerName} />,
      isOptional: false,
      formName: 'timeAndDate',
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
