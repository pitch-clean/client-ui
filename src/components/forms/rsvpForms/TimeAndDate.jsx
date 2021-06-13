import 'date-fns';
// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  updateFormFieldValue,
  updateFormFieldError,
  checkIfValidForm
} from '../../../redux/actions/CreateRSVPActions';
import DateFnsUtils from '@date-io/date-fns';
import DatePicker from '../fields/DatePicker';
import TimePicker from '../fields/TimePicker';

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
function TimeAndDate({ formName, reducerName }) {
  // init hooks
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={`RsvpTimeAndDate ${classes.root} `}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          fieldName="date"
          label="Date"
          reducerName={reducerName}
          formName={formName}
          variant={'inline'}
          updateFxn={updateFormFieldValue}
          updateErrorFxn={updateFormFieldError}
          validCheckFxn={checkIfValidForm}
          format={'MM/dd/yyyy'}
          autoFocus
        />
        <TimePicker
          fieldName="date"
          label="Time"
          reducerName={reducerName}
          formName={formName}
          updateFxn={updateFormFieldValue}
          updateErrorFxn={updateFormFieldError}
          validCheckFxn={checkIfValidForm}
          autoFocus
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
}

export default TimeAndDate;
