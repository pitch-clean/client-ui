// react
import React, {useState, useEffect} from 'react';
import FormTextField from '../../elements/FormTextField';
// utils
import {fixedWidth, fixedHeight} from '../../utils/styleFxns';
import {register} from '../../../utils/requests';
import {updateInputField} from '../../utils/formFxns';
import {validateUsername} from './validationFxns';
// constants
const formData = {};
const validationObj = {
  checkType: function(input, targetStr) {
    if (typeof input !== targetStr) {
      return 'Please enter a string'
    } else {
      return null;
    }
  },
  checkLength: function(input, targetLength) {
    if (input.length < targetLength) {
      return `Please enter a value greater than ${targetLength}`;
    } else {
      return null;
    }
  },
  checkUsername: function(input) {
    if (this.checkType()) {

    } else if (this.checkLength()) {

    }
  },

};
// event handlers
const validateForm = () => {
  
};
const submitRegisterForm = async formData => {
  console.log('submitting the registration form, formData:', formData)
  // const res = await register();
};
const keyDownHandler = (e, formData) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const isFormValid = validateForm(formData);
    if (isFormValid) {
      console.log('form is valid')
      const res = submitRegisterForm(formData);
      console.log('response for form submission', res)
    }
  }
};

// main
const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSponsor, setIsSponsor] = useState(false);
  const [isInvestor, setIsInvestor] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // style
  /**@type {React.CSSProperties} */
  const style = {
    ...fixedWidth(60, '%'),
    justifyContent: `start`,
    boxShadow: `0px 0px 20px 8px rgba(0, 0, 0, 0.200)`,
  };
  /**@type {React.CSSProperties} */
  const ctnrStyle = {
    justifyContent: `start`,
    ...fixedWidth(60, '%'),
  };
  /**@type {React.CSSProperties} */
  const titleStyle = {
    padding: `10px 0`,
    fontSize: `22px`,
    flex: `0`,
    backgroundColor: `rgb(32, 32, 32)`,
    border: `none`,
  };
  /**@type {React.CSSProperties} */
  const submitStyle = {
    ...fixedHeight(40, 'px'),
    bottom: 0,
    backgroundColor: `black`,
    borderTopRightRadius: `0`,
    borderTopLeftRadius: `0`,
    cursor: `pointer`,
  };
  // useEffect(() => {

  // }, [username]);
  useEffect(() => {

  }, [isSubmitting]);

  return (
    <div
      style={style}
      className="flexcol h100 ctnr"
      onKeyDown={e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const isFormValid = null//validateForm(formData);
          if (isFormValid) {
            console.log('form is valid')
            // const res = submitRegisterForm(formData);
            // console.log('response for form submission', res)
          }
        }
      }}
    >
      <div style={ctnrStyle} className="flexcol h100" >
        <div style={titleStyle} className="ctnr w100" >
          Create your account
        </div>
        <FormTextField title='Username' value={username} stateUpdateFxn={setUsername} isPassword={false} validateFxn={validateUsername} />
        <FormTextField title='Password' value={password} stateUpdateFxn={setPassword} isPassword={true} /*validateClass={validatePassword} */ />
        <FormTextField title='Email Address' value={email} stateUpdateFxn={setEmail} isPassword={false} /*validateClass={validateEmail} */ />
        <FormTextField title='First Name' value={firstName} stateUpdateFxn={setFirstName} isPassword={false} /*validateClass={validateFirstName} */ />
        <FormTextField title='Last Name' value={lastName} stateUpdateFxn={setLastName} isPassword={false} /*validateClass={validateLastName} */ />
        <div className="w100 flexcol noselect" style={submitStyle} onClick={() => submitRegisterForm(formData)} >
          Submit
        </div>
      </div>
    </div>
  )
};

// export
export default RegisterForm;
