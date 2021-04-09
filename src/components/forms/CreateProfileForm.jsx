// react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// components
import LoginInfoForm from './profileForms/LoginInfoForm';
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
  const [formData, setFormData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const stepObjsArr = [
    {
      header: 'Basic Info',
      message: 'Enter basic account info',
      component: <LoginInfoForm formObj={{ formData, setFormData }} setIsFormValid={setIsFormValid} />,
      isOptional: false,
      formName: 'loginInfo',
    },
    {
      header: 'Second info',
      message: 'New second info',
      component: <LoginInfoForm formObj={{ formData, setFormData }} setIsFormValid={setIsFormValid} />,
      isOptional: false,
      formName: 'secondInfo',
    },
    {
      header: 'Third info',
      message: 'New third info',
      component: <LoginInfoForm formObj={{ formData, setFormData }} setIsFormValid={setIsFormValid} />,
      isOptional: false,
      formName: 'thirdInfo',
    },
  ];

  return (
    <div className="CreateProfileForm flexcol w100">
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
