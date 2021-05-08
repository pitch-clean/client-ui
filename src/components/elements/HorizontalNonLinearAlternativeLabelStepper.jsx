// react
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Proptypes from 'prop-types';
import clsx from 'clsx';
// import {
//   updateActiveForm,
//   checkIfAllValidForms,
//   resetAllForms,
// } from '../../redux/actions/RegisterActions';
// seed
import { profile } from '../../seed/testAuthProfile';
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
  paper: {
    minWidth: '60%',
    maxWidth: '900px',
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
  },
}));
const useIconStyles = makeStyles({
  root: {
    zIndex: 1,
    width: 30,
    height: 30,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid #707070',
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: '#CECECE',
  },
  completed: {
    backgroundColor: '#CECECE',
  },
});

// rendering step icon
function StepIcon(props) {
  const classes = useIconStyles();
  const { active, completed } = props;
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {String(props.icon)}
    </div>
  );
}

// fxns
const handleNext = (setActiveStep, activeStep, dispatch, formName, updateActiveForm_) => () => {
  dispatch(updateActiveForm_(formName));
  setActiveStep(activeStep + 1);
};
const handleBack = (dispatch, formName, setActiveStep, updateActiveForm_) => () => {
  dispatch(updateActiveForm_(formName));
  setActiveStep(prevActiveStep => prevActiveStep - 1);
};

// main
const HorizontalNonLinearAlternativeLabelStepper = ({
  stepObjsArr,
  reducerName,
  redirectPath,
  redirectAction,
  redirectRoute,
  updateActiveForm_,
  checkIfAllValidForms_,
  resetAllForms_,
}) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // state
  const [activeStep, setActiveStep] = useState(0);
  const isActiveFormValid = useSelector(s => s[reducerName].activeForm.isFormValid);
  const areAllFormsValid = useSelector(s => s[reducerName].areAllFormsValid);
  const validForms = useSelector(s => s[reducerName].validForms);
  const stepCount = stepObjsArr.length;
  // callbacks
  const handleSubmit = () => {
    // TODO: create route and service on backend to log in successfully
    const testRes = (() => profile)();
    let path = redirectPath;
    if (redirectRoute === 'offering') {
      path = `${redirectPath}/${testRes.investments[1].offering.slug}`;
    }
    history.push(path);
  };
  // effects
  useEffect(() => {
    dispatch(checkIfAllValidForms_());
  }, [isActiveFormValid]);
  useEffect(() => {
    return () => {
      dispatch(resetAllForms_());
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
              <StepLabel StepIconComponent={StepIcon} completed={validForms[label.formName]}>
                {label.header}
              </StepLabel>
              {label.header}
            </Step>
          );
        })}
      </Stepper>
      <Grid container direction="column" justify="start" alignItems="center">
        <Paper 
          className={classes.paper}
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
                updateActiveForm_,
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
                updateActiveForm_,
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
