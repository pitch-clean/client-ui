// react
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Joi from 'joi';
import { login } from '../../../utils/requests';
import {
  updateLoginField,
  updateLoginStatus,
  resetLoginForm,
} from '../../../redux/actions/AuthActions';
// components
import TextField from '../../forms/fields/TextField';
// seed
import { profile } from '../../../seed/testAuthProfile';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
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
    padding: `30px`,
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
  let res;
  let profileObj = {};
  if (testing) {
    if (username === 'test@test.com' && password === 'testpassword') {
      profileObj = profile;
    } else {
      alert('Incorrect Email and/or Password');
      return;
    }
    dispatch(updateLoginStatus(true, profileObj));
  } else {
    const loginUrl = 'http://localhost:8000/api/login';
    const body = { username, password };
    try {
      res = await login(loginUrl, body);
      console.log('response here', res);
      dispatch(updateLoginStatus(true, res));
    } catch (error) {
      console.error('error HERE:', error)
    }
  }
};
const keyDownHandler = (username, password, dispatch) => e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitLogin(username, password, dispatch);
  }
};

// main
const LoginForm = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const usernameRedux = useSelector(s => s.auth.login.fields.username.value);
  const passwordRedux = useSelector(s => s.auth.login.fields.password.value);
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);
  // effects
  useEffect(() => {
    dispatch(resetLoginForm());
  }, []);
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Grid container direction="row" justify="space-between" className={`${classes.root} w100 h100`}>
      <Grid item className={`h100 ${classes.leftBlock}`} />
      <Paper square className={`h100 ${classes.rightBlock} flexcol`}>
        <Paper square elevation={3} className={`${classes.formContainer}`}>
          <div className={`${classes.title}`}>Sign in to Pitchclean</div>
          <TextField
            className={classes.text}
            formName="login"
            fieldName="username"
            label="Email" // temporary
            validator={Joi.string()
              .email({ tlds: { allow: false } })
              .min(5)
              .max(128)}
            reducerName="auth"
            updateFxn={updateLoginField}
            autoFocus
          />
          <TextField
            className={classes.text}
            classes={{
              root: {
                width: `100%`,
                maxWidth: `100%`,
                minWidth: `100%`,
              },
            }}
            formName="login"
            fieldName="password"
            label="Password"
            validator={Joi.string().min(8).max(255)}
            reducerName="auth"
            updateFxn={updateLoginField}
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
        </Paper>
      </Paper>
    </Grid>
  );
};

// export
export default LoginForm;
