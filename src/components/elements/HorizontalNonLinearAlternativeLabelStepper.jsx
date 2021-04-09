// react
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Proptypes from 'prop-types';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: `10px`,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  submitButton: {
    width: `300px`,
  },
  backButton: {
    marginRight: theme.spacing(1),
    backgroundColor: `whitesmoke`,
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
const completedSteps = completed => {
  return completed.size;
};
const allStepsCompleted = (completed, totalSteps) => {
  return completedSteps(completed) === totalSteps;
};
const isLastStep = (activeStep, totalSteps) => {
  return activeStep === totalSteps - 1;
};
const isStepComplete = (completed, step) => {
  return completed.has(step);
};

// main
const HorizontalNonLinearAlternativeLabelStepper = ({ stepObjsArr, handleSubmit }) => {
  // init hooks
  const classes = useStyles();
  // state
  const [activeStep, setActiveStep] = useState(0);
  const [completed] = useState(new Set());
  const isFormValid = useSelector(s => s.register[stepObjsArr[activeStep].formName].isFormValid);
  console.log('in the nw', isFormValid)
  // constants
  const totalSteps = stepObjsArr.length;

  // fxns
  const handleNext = () => {
    const newActiveStep =
      isLastStep(activeStep) && !allStepsCompleted(completed, totalSteps)
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          stepObjsArr.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleStep = step => () => {
    setActiveStep(step);
  };

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
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(completed, index)}
                {...buttonProps}
              >
                {label.header}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <div>
          <Typography className={classes.instructions}>
            {stepObjsArr[activeStep].message}
          </Typography>
          <div>
            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
              Back
            </Button>
            <Button
              disabled={!completed.has(activeStep) || stepObjsArr[activeStep].isOptional}
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              Next
            </Button>
            {stepObjsArr[activeStep].component}
            <Button
              disabled={!isFormValid}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submitButton}
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
  handleSubmit: Proptypes.shape({}).isRequired,
};

// export
export default HorizontalNonLinearAlternativeLabelStepper;
