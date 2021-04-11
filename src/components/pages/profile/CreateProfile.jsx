// react
import React from 'react';
// components
import CreateProfileForm from '../../forms/CreateProfileForm';
// style
import './CreateEditProfile.css';

/**
 * MAIN
 * TODOs: Need to toggle dark/light theme
 */
const CreateProfile = () => {

  return (
    <div className="CreateProfile w100 flexrow h100" >
      <CreateProfileForm />
    </div>
  )
};

// export
export default CreateProfile;
