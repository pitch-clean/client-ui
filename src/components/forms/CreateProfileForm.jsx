// react
import React from 'react';
import { Link } from 'react-router-dom';
// components
import LoginInfoForm from './profileForms/LoginInfoForm';
import ProfileTypeForm from './profileForms/ProfileTypeForm';
import InvestorInfoForm from './profileForms/InvestorInfoForm';
import HorizontalNonLinearAlternativeLabelStepper from '../elements/HorizontalNonLinearAlternativeLabelStepper';
// style
import './profileForms/ProfileForms.css';

/**
 * This creates a profile and posts on personal
 * Refreshing just repopulates fields from existing form in database
 */
const CreateProfileForm = () => {
  const handleSubmit = () => {};

  // state
  const stepObjsArr = [
    {
      header: 'Login Info',
      message: 'Create a new profile',
      component: <LoginInfoForm />,
      isOptional: false,
      formName: 'loginInfo',
    },
    {
      header: 'Account Type',
      message: 'Business or Investor Account',
      component: <ProfileTypeForm />,
      isOptional: false,
      formName: 'profileType',
    },
    {
      header: 'Investment purpose and history',
      message: 'Select all that apply',
      component: <InvestorInfoForm />,
      isOptional: false,
      formName: 'investmentPurpose',
    },
  ];

  return (
    <div className="CreateProfileForm flexcol w100 h100">
      <HorizontalNonLinearAlternativeLabelStepper
        stepObjsArr={stepObjsArr}
        handleSubmit={handleSubmit}
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
