// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link as MuiLink } from '@material-ui/core';
// components
import LoginInfoForm from './profileForms/LoginInfoForm';
import ProfileTypeForm from './profileForms/ProfileTypeForm';
import InvestorPurposeForm from './profileForms/InvestorPurposeForm';
import InvestorPiiForm from './profileForms/InvestorPiiForm';
import HorizontalNonLinearAlternativeLabelStepper from '../elements/HorizontalNonLinearAlternativeLabelStepper';
// style
import './profileForms/ProfileForms.css';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  signIn: {
    fontSize: `15px`,
    margin: `10px 0`,
  },
}));
const reducerName = 'register';
const envLoginRoute = 'login';

/**
 * MAIN
 * This creates a profile and posts on personal
 * Refreshing just repopulates fields from existing form in cookies/localstorage
 * TODO: Need to implement cookies for refreshing and clearing the cookie
 */
const CreateProfileForm = () => {
  // init hooks
  const classes = useStyles();

  const stepObjsArr = [
    {
      header: 'Login Info',
      message: 'Create a new profile',
      component: <LoginInfoForm reducerName={reducerName} />,
      isOptional: false,
      formName: 'loginInfo',
    },
    {
      header: 'Account Type',
      message: 'Business or Investor Account',
      component: <ProfileTypeForm reducerName={reducerName} />,
      isOptional: false,
      formName: 'profileType',
    },
    {
      header: 'Investment purpose and history',
      message: 'Select all that apply',
      component: <InvestorPurposeForm reducerName={reducerName} />,
      isOptional: false,
      formName: 'investorPurpose',
    },
    {
      header: `Personal information`,
      message: `Welcome,  Let's get started!`,
      // message: 'Please provide the following information so we can set up your account.',
      component: <InvestorPiiForm reducerName={reducerName} />,
      isOptional: false,
      formName: 'investorPii',
    },
  ];

  return (
    <div className="CreateProfileForm flexcol w100 h100">
      <HorizontalNonLinearAlternativeLabelStepper
        stepObjsArr={stepObjsArr}
        redirectAddress={`/${envLoginRoute}`}
        reducerName={reducerName}
      />
      <div className={`signIn ${classes.signIn}`}>
        <div>Already have an account?</div>
        <MuiLink component={Link} to={`/${envLoginRoute}`} style={{ fontSize: `13px` }}>
          Log In
        </MuiLink>
      </div>
    </div>
  );
};

// export
export default CreateProfileForm;
