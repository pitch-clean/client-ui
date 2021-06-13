// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { GOOGLE_MAPS_API_KEY } from '../../../.secrets';
// import { PinDropOutlined } from '@material-ui/icons';
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm
} from '../../../redux/actions/CreateRSVPActions';
// components
import GMap from '../../elements/googleMaps/GMap';

const useStyles = makeStyles({
  root: {
    padding: '0 1.5rem',
  },
});

const Location = ({ formName, reducerName }) => {
  // init hooks
  const classes = useStyles();

  return (
    <div
      className={`RsvpLocationForm ${classes.root} flexcol`}
    >
      <GMap
        autoCompleteProps={{
          fieldName: 'location',
          label: 'Location',
          reducerName,
          formName,
          updateFxn: updateFormFieldValue,
          updateErrorFxn: updateFormFieldError,
          validCheckFxn: checkIfValidForm,
          autoFocus: true,
        }}
        apiKey={GOOGLE_MAPS_API_KEY}
      />
    </div>
  );
}

export default Location;
