// react
import React, { useState } from 'react';
// utils
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// constants
const useStyles = makeStyles((theme) => ({
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
  // state
  const [isFormValid, setIsFormValid] = useState();

  return (
    <div className="LoginInfoForm flexcol w100" >
      <form className={classes.root} autoComplete="off" onChange={(e) => {console.log(e)}} >
        <TextField variant="outlined" required  label="Legal First Name" />
        <TextField variant="outlined" label="Middle Name/Initial" />
        <TextField variant="outlined" required label="Legal Last Name" />
        <TextField variant="outlined" required label="Email Address" />
        <TextField variant="outlined" required type="password" label="Password" />
        <TextField variant="outlined" required type="password" label="Confirm Password" />
      </form>
    </div>
  )
};

// export
export default LoginInfoForm;
