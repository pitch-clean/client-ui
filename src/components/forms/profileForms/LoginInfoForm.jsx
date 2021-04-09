// react
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import Joi from 'joi';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { updateProfileForm, updateFormValid } from '../../../redux/actions/RegisterActions';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
      display: 'flex',
      lineHeight: `400px`,
    },
  },
}));

/**
 * This allows you to enter
 * SENDS A POST TO CREATE ENTRY IN DATABASE
 * User enters first & last name, email, password
 * dtRequest is appended
 */
const LoginInfoForm = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const loginInfoData = useSelector(s => s.register.loginInfo);
  // console.log(loginInfoData);
  const [firstName, setFirstName] = useState({
    value: '',
    validator: Joi.string()
      .regex(/^[ a-zA-Z'-]+$/)
      .allow('')
      .max(50),
    error: '',
  });
  const [middleName, setMiddleName] = useState({
    value: '',
    validator: Joi.string()
      .regex(/^[ a-zA-Z'-]+$/)
      .allow('')
      .max(50),
    error: '',
  });
  const [lastName, setLastName] = useState({
    value: '',
    validator: Joi.string()
      .regex(/^[ a-zA-Z'-]+$/)
      .allow('')
      .max(50),
    error: '',
  });
  const [email, setEmail] = useState({
    value: '',
    validator: Joi.string().email({ tlds: { allow: false } }),
    error: '',
  });
  const [pwd, setPwd] = useState({ value: '', validator: Joi.string().min(8).max(255), error: '' });
  const [confirmPwd, setConfirmPwd] = useState({
    value: '',
    validator: Joi.any().equal(pwd.value),
    error: '',
  });
  const checkIsValidForm = error => {
    const fields = [confirmPwd, pwd, email, lastName, middleName, firstName];
    if (error) {
      dispatch(updateFormValid('loginInfo', false));
      return false;
    }
    for (let idx = 0; idx < fields.length; idx += 1) {
      const element = fields[idx];
      if (element.error || !element.value) {
        dispatch(updateFormValid('loginInfo', false));
        return false;
      }
    }
    dispatch(updateFormValid('loginInfo', true));
    return true;
  };
  const validateField = (obj, setter, checkIsValidForm, e, fieldName) => {
    // eslint-disable-next-line
    !obj.validator && console.error('Please set validator');
    // eslint-disable-next-line
    !obj.value && console.error('Please set obj value');

    const { error } = obj.validator.validate(obj.value);
    const newObj = { ...obj, error: error && error.message };
    setter(newObj);
    checkIsValidForm(error);
    dispatch(updateProfileForm('loginInfo', { [fieldName]: obj.value }));
  };

  return (
    <div className="LoginInfoForm flexcol w100">
      {/* eslint-disable-next-line */}
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={e => {
          // console.log(e)
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            // run submit
          }
        }}
      >
        <TextField
          variant="outlined"
          value={firstName.value}
          label="Legal First Name"
          error={firstName.error}
          helperText={firstName.error}
          onChange={e => setFirstName({ ...firstName, value: e.target.value })}
          onBlur={e => validateField(firstName, setFirstName, checkIsValidForm, e, 'firstName')}
          required
        />
        <TextField
          variant="outlined"
          value={middleName.value}
          label="Middle Name/Initial"
          error={middleName.error}
          helperText={middleName.error}
          onChange={e => setMiddleName({ ...middleName, value: e.target.value })}
          onBlur={e => validateField(middleName, setMiddleName, checkIsValidForm, e, 'middleName')}
        />
        <TextField
          variant="outlined"
          value={lastName.value}
          label="Legal Last Name"
          error={lastName.error}
          helperText={lastName.error}
          onChange={e => setLastName({ ...lastName, value: e.target.value })}
          onBlur={e => validateField(lastName, setLastName, checkIsValidForm, e, 'lastName')}
          required
        />
        <TextField
          variant="outlined"
          value={email.value}
          label="Email Address"
          error={email.error}
          helperText={email.error}
          onChange={e => setEmail({ ...email, value: e.target.value })}
          onBlur={e => validateField(email, setEmail, checkIsValidForm, e, 'email')}
          required
        />
        <TextField
          variant="outlined"
          value={pwd.value}
          label="Password"
          type="password"
          error={pwd.error}
          helperText={pwd.error}
          onChange={e => setPwd({ ...pwd, value: e.target.value })}
          onBlur={e => validateField(pwd, setPwd, checkIsValidForm, e, 'password')}
          required
        />
        <TextField
          variant="outlined"
          value={confirmPwd.value}
          type="password"
          label="Confirm Password"
          error={confirmPwd.error}
          helperText={confirmPwd.error}
          onChange={e => setConfirmPwd({ ...confirmPwd, value: e.target.value })}
          onBlur={e => {
            const newVal = Joi.any().valid(pwd.value).error(new Error('Passwords do not match'));
            validateField(
              { ...confirmPwd, validator: newVal },
              setConfirmPwd,
              checkIsValidForm,
              e,
              'checkPassword',
            );
            // setConfirmPwd({ ...confirmPwd, error: error && error.message });
          }}
          required
        />
      </form>
    </div>
  );
};

// export
export default LoginInfoForm;
