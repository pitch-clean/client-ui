// react
import React from 'react';
// utils
import Joi from 'joi';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../fields/TextField';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
      display: 'flex',
    },
  },
}));
// const formName = 'loginInfo';

/**
 * This allows you to enter
 * SENDS A POST TO CREATE ENTRY IN DATABASE
 * User enters first & last name, email, password
 * dtRequest is appended
 */
const LoginInfoForm = () => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`${classes.root} LoginInfoForm flexcol w100`}>
      <TextField
        fieldName="firstName"
        label="Legal First Name"
        validator={Joi.string()
          .regex(/^[ a-zA-Z'-]+$/)
          .allow('')
          .max(50)}
      />
      <TextField
        fieldName="middleName"
        label="Middle Name/Initial"
        validator={Joi.string()
          .regex(/^[ a-zA-Z'-]+$/)
          .allow('')
          .max(50)}
      />
      <TextField
        fieldName="lastName"
        label="Legal Last Name"
        validator={Joi.string()
          .regex(/^[ a-zA-Z'-]+$/)
          .allow('')
          .max(50)}
      />
      <TextField
        fieldName="email"
        label="Email Address"
        validator={Joi.string().email({ tlds: { allow: false } })}
      />
      <TextField fieldName="password" label="Password" />
      <TextField fieldName="confirmPassword" label="Confirm Password" />
    </div>
  );
};

// export
export default LoginInfoForm;
