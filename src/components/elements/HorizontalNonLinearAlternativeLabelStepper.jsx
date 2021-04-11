// react
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Proptypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import {
  updateActiveForm,
  checkIfAllValidForms,
  resetAllForms,
} from '../../redux/actions/RegisterActions';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: `10px`,
  },
  theDiv: {
    display: `flex`,
    flexFlow: 'row',
  },
  nextButton: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  submitButton: {
    width: `100%`,
    marginTop: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
// fxns
const handleNext = (setActiveStep, activeStep, dispatch, formName) => () => {
  dispatch(updateActiveForm(formName));
  setActiveStep(activeStep + 1);
};
const handleBack = (dispatch, formName, setActiveStep) => () => {
  dispatch(updateActiveForm(formName));
  setActiveStep(prevActiveStep => prevActiveStep - 1);
};

// main
const HorizontalNonLinearAlternativeLabelStepper = ({
  stepObjsArr,
  reducerName,
  redirectAddress,
}) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const [activeStep, setActiveStep] = useState(0);
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(0);
  const isActiveFormValid = useSelector(s => s[reducerName].activeForm.isFormValid);
  const areAllFormsValid = useSelector(s => s[reducerName].areAllFormsValid);
  const validForms = useSelector(s => s[reducerName].validForms);
  const stepCount = stepObjsArr.length;
  console.log(isActiveFormValid)
  // callbacks
  const handleSubmit = () => {
    // TODO: create route and service on backend to log in successfully
    const isSuccess = true;
    setIsRequestSuccessful(isSuccess);
  };
  // effects
  useEffect(() => {
    dispatch(checkIfAllValidForms());
  }, [isActiveFormValid]);
  useEffect(() => {
    return () => {
      console.log('resetting')
      dispatch(resetAllForms());
    };
  }, []);
  // logic
  // reset form and redirect
  if (isRequestSuccessful) {
    return <Redirect to={redirectAddress} />;
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {stepObjsArr.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (stepObjsArr[index].isOptional) {
            buttonProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          return (
            <Step key={label.header} {...stepProps}>
              <StepLabel completed={validForms[label.formName]}>{label.header}</StepLabel>
              {label.header}
            </Step>
          );
        })}
      </Stepper>
      <div>
        <div>
          <div>
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
                )}
                className={classes.backbutton}
              >
                Back
              </Button>

              <Button
                disabled={!isActiveFormValid || activeStep >= stepCount - 1}
                variant="outlined"
                color="primary"
                onClick={handleNext(
                  setActiveStep,
                  activeStep,
                  dispatch,
                  activeStep < stepCount - 1 ? stepObjsArr[activeStep + 1].formName : '',
                )}
                className={classes.nextButton}
              >
                Next
              </Button>
            </div>
            <Button
              disabled={!areAllFormsValid}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submitButton}
              endIcon={<SendIcon />}
              size="large"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// proptypes
HorizontalNonLinearAlternativeLabelStepper.propTypes = {
  stepObjsArr: Proptypes.shape([]).isRequired,
};

// export
export default HorizontalNonLinearAlternativeLabelStepper;
