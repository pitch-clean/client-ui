// react
import React from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// components
import LoginInfoForm from './profileForms/LoginInfoForm';
import ProfileTypeForm from './profileForms/ProfileTypeForm';
import InvestorPurposeForm from './profileForms/InvestorPurposeForm';
import InvestorPiiForm from './profileForms/InvestorPiiForm';
import HorizontalNonLinearAlternativeLabelStepper from '../elements/HorizontalNonLinearAlternativeLabelStepper';
// style
import './profileForms/ProfileForms.css';
// constants
const reducerName = 'register';

/**
 * This creates a profile and posts on personal
 * Refreshing just repopulates fields from existing form in database
 */
const CreateProfileForm = () => {
  // state
  // const firstName = useSelector(s => s.register.loginInfo.fields.firstName.value);

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
        redirectAddress="/login"
        reducerName="register"
      />
      <div className="signIn" style={{ fontSize: `15px`, margin: `10px 0` }}>
        <div>Already have an account?</div>
        <Link to="/login" style={{ fontSize: `13px` }}>
          Log In
        </Link>
      </div>
    </div>
  );
};

// export
export default CreateProfileForm;
