// react
import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Link as MuiLink } from '@material-ui/core';
import Joi from 'joi';
import { Get, login, Post } from '../../../utils/requests';
import {
  updateLoginField,
  updateLoginStatus,
  resetLoginForm,
  updateFormFieldValue,
  checkIfValidForm,
} from '../../../redux/actions/AuthActions';
// components
import TextField from '../../forms/fields/TextField';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'space-between',
  },
  leftBlock: {
    minWidth: `50%`,
    width: `50%`,
    height: 'auto',
    backgroundColor: `#171717`,
  },
  rightBlock: {
    minWidth: `50%`,
    maxWidth: `50%`,
    width: `50%`,
    padding: `0 5%`,
    height: 'auto',
  },
  formContainer: {
    padding: `0 30px`,
    paddingTop: `20px`,
    minWidth: 0,
    width: `100%`,
  },
  title: {
    padding: `10px 0`,
    fontSize: `20px`,
  },
  text: {
    flex: 1,
    minWidth: `100%`,
    width: `100%`,
    maxWidth: `100%`,
    '& .MuiTextField-root': {
      minWidth: `100%`,
      width: `100%`,
      maxWidth: `100%`,
    },
  },
  submit: {
    padding: `10px 0`,
    marginTop: '25px',
    cursor: `pointer`,
    color: 'whitesmoke',
    fontWeight: 400,
  },
}));

// event handlers
const submitLogin = async (username, password, dispatch) => {
  // TODO create routes and services to connect to backend and actually log in
  const testing = true;
  console.log('submitting', username, password, dispatch)
  if (testing) {
    const url = `${window.env.api.login}`;
    const body = {
      email: username,
      password,
    };
    const loginResponse = await Post(url, body);
    if (loginResponse) {
      dispatch(updateLoginStatus(loginResponse));
    } else {
      alert('Incorrect Email and/or Password');
      return;
    }
  } else {
    const loginResponse = await Post(url, body);
    if (loginResponse) {
      dispatch(updateLoginStatus(loginResponse));
    } else {
      alert('Incorrect Email and/or Password');
      return;
    }
  }
};
const keyDownHandler = (username, password, dispatch) => e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitLogin(username, password, dispatch);
  }
};
const reducerName = 'auth';
const formName = 'login';

// main
const LoginView = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const usernameRedux = useSelector(s => s.auth.login.fields.email.value);
  const passwordRedux = useSelector(s => s.auth.login.fields.password.value);
  const isAuthenticated = useSelector(s => s.auth.activeProfile._id);
  const isValid = useSelector(s => s.auth.login.isValid);
  // effects
  useEffect(() => {
    dispatch(resetLoginForm());
  }, []);
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className={`LoginView ${classes.root} page flexrow f1`}>
      <div className={`${classes.leftBlock} h100`} />
      <Paper square className={`${classes.rightBlock} flexcol h100`}>
        <Paper square elevation={3} className={`${classes.formContainer}`}>
          <div className={`${classes.title}`}>Sign in to Pitchclean</div>
          <TextField
            fieldName="email"
            label="Email"
            reducerName={reducerName}
            formName={formName}
            updateFxn={updateFormFieldValue}
            validCheckFxn={checkIfValidForm}
            onKeyDown={keyDownHandler(usernameRedux, passwordRedux, dispatch)}
            autoFocus
          />
          <TextField
            fieldName="password"
            label="Password"
            reducerName={reducerName}
            formName={formName}
            updateFxn={updateFormFieldValue}
            validCheckFxn={checkIfValidForm}
            onKeyDown={keyDownHandler(usernameRedux, passwordRedux, dispatch)}
            isUpdateOnChange
          />
          <div
            style={{
              backgroundColor: `rgb(27, 132, 29)`,
            }}
            className={`w100 flexcol noselect ${classes.submit}`}
            onClick={() => submitLogin(usernameRedux, passwordRedux, dispatch)}
          >
            Submit
          </div>
          <div className="flexrow" style={{padding: '20px 0'}}>
            {/* <div style={{padding: '0 10px'}}>New to pitchclean?</div> */}
            <MuiLink
              component={'div'}
              color="inherit"
              variant="subtitle2"
              style={{padding: '0 10px'}}
              underline="none"
            >
              New to pitchclean?
            </MuiLink>
            <MuiLink
              component={Link}
              to={`/${window.env.client.register}`}
              color="inherit"
              variant="subtitle2"
            >
              Register here!
            </MuiLink>
          </div>
        </Paper>
      </Paper>
    </div>
  );
};

// export
export default LoginView;
