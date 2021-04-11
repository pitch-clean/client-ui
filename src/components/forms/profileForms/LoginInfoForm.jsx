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
      width: `100%`,
      display: 'flex',
    },
  },
}));
const formName = 'loginInfo';

/**
 * User enters first & last name, email, password
 */
const LoginInfoForm = ({ reducerName }) => {
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
        reducerName={reducerName}
        formName={formName}
        autoFocus
      />
      <TextField
        fieldName="middleName"
        label="Middle Name/Initial"
        validator={Joi.string()
          .regex(/^[ a-zA-Z'-]+$/)
          .allow('')
          .max(50)}
        reducerName={reducerName}
        formName={formName}
      />
      <TextField
        fieldName="lastName"
        label="Legal Last Name"
        validator={Joi.string()
          .regex(/^[ a-zA-Z'-]+$/)
          .allow('')
          .max(50)}
        reducerName={reducerName}
        formName={formName}
      />
      <TextField
        fieldName="email"
        label="Email Address"
        validator={Joi.string().email({ tlds: { allow: false } })}
        reducerName={reducerName}
        formName={formName}
      />
      <TextField
        fieldName="password"
        label="Password"
        reducerName={reducerName}
        formName={formName}
      />
      <TextField
        fieldName="confirmPassword"
        label="Confirm Password"
        reducerName={reducerName}
        formName={formName}
      />
    </div>
  );
};

// export
export default LoginInfoForm;
