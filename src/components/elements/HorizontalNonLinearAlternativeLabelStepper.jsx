// react
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// utils
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';
import { Post } from '../../utils/requests';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: `10px`,
    minHeight: '60vh',
  },
  stepper: {
    width: `100vw`,
    minWidth: '100vw',
    maxWidth: '100vw',
  },
  step: {
    "& $completed": {
      color: "lightgreen"
    },
    "& $active": {
      color: "pink"
    },
    "& $disabled": {
      color: "red"
    },
  },
  theDiv: {
    display: `flex`,
    flexFlow: 'row',
    padding: `10px 100px`,
  },
  nextButton: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  submitButton: {
    width: `100%`,
    
    marginTop: theme.spacing(1),
    backgroundColor: '#3b9aee',
    fontWeight: '500',
    color: theme.palette.primary.light,
    '& MuiButton-label': {
      fontWeight: 600,
    },
    '&:disabled': {
      color: theme.palette.primary.dark,
    },
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    minWidth: '60%',
    maxWidth: '900px',
  },
}));
// fxns
const handleNext = (setActiveStep, activeStep, dispatch, formName, updateActiveForm) => () => {
  dispatch(updateActiveForm(formName));
  setActiveStep(activeStep + 1);
};
const handleBack = (dispatch, formName, setActiveStep, updateActiveForm) => () => {
  dispatch(updateActiveForm(formName));
  setActiveStep(prevActiveStep => prevActiveStep - 1);
};

// main
const HorizontalNonLinearAlternativeLabelStepper = ({
  stepObjsArr,
  reducerName,
  redirectRoute,
  apiRoute,
  updateActiveForm,
  checkIfAllValidForms,
  resetAllForms,
  customSubmitComponent,
}) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // state
  const [activeStep, setActiveStep] = useState(0);
  const isActiveFormValid = useSelector(s => s.forms[reducerName].activeForm.isFormValid);
  const areAllFormsValid = useSelector(s => s.forms[reducerName].areAllFormsValid);
  const validForms = useSelector(s => s.forms[reducerName].validForms);
  const stepCount = stepObjsArr.length;
  // callbacks
  const handleSubmit = (redirectRoute, apiRoute) => async () => {
    // TODO: create route and service on backend to log in successfully
    let path;
    // send request
    try {
      const url = `/${apiRoute}`;
      const resJSON = await Post(url, validForms, {}, true);
      const { _id: id, alias } = resJSON;
      if (['offering', 'rsvp'].includes(redirectRoute)) {
        path = `/${redirectRoute}/${id}`;
      } else {
        path = `/${redirectRoute}/${alias}`;
      }
      // redirect browser
      history.push(path);
    } catch (err) {
      console.log(err);
    }
  };
  // effects
  useEffect(() => {
    console.log('is checkin all valid')
    dispatch(checkIfAllValidForms());
  }, [isActiveFormValid]);
  useEffect(() => {
    return () => {
      dispatch(resetAllForms());
    };
  }, []);

  return (
    <div className={classes.root}>
      <Stepper className={classes.stepper} alternativeLabel nonLinear activeStep={activeStep}>
        {stepObjsArr.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (stepObjsArr[index].isOptional) {
            buttonProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          return (
            <Step
              classes={{ root: classes.step, completed: classes.completed }}
              key={label.header}
              {...stepProps}
            >
              <StepLabel completed={validForms[label.formName]}>{label.header}</StepLabel>
              {label.header}
            </Step>
          );
        })}
      </Stepper>
      <Grid container direction="column" justify="start" alignItems="center">
        <Paper
          className={`${classes.paper} flexcol`}
        >
          <Typography className={classes.instructions}>
            {stepObjsArr[activeStep].message}
          </Typography>
          {stepObjsArr[activeStep].component}
          <div className={classes.theDiv}>
            <Button
              variant="outlined"
              color="default"
              disabled={activeStep === 0}
              onClick={handleBack(
                dispatch,
                activeStep > 0 ? stepObjsArr[activeStep - 1].formName : '',
                setActiveStep,
                updateActiveForm,
              )}
              className={classes.backbutton}
            >
              Back
            </Button>

            <Button
              disabled={!isActiveFormValid || activeStep >= stepCount - 1}
              variant="outlined"
              color="secondary"
              onClick={handleNext(
                setActiveStep,
                activeStep,
                dispatch,
                activeStep < stepCount - 1 ? stepObjsArr[activeStep + 1].formName : '',
                updateActiveForm,
              )}
              className={classes.nextButton}
            >
              Next
            </Button>
          </div>
          {
            customSubmitComponent ? customSubmitComponent : 
            <Button
              disabled={!areAllFormsValid}
              variant="contained"
              color="primary"
              onClick={handleSubmit(redirectRoute, apiRoute)}
              className={classes.submitButton}
              endIcon={<SendIcon />}
              size="large"
            >
              Submit
            </Button>
          }
        </Paper>
      </Grid>
    </div>
  );
};

// proptypes
HorizontalNonLinearAlternativeLabelStepper.propTypes = {
  stepObjsArr: Proptypes.shape([]).isRequired,
};

// export
export default HorizontalNonLinearAlternativeLabelStepper;
