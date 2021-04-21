// react
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import Joi from 'joi';
import { login } from '../../../utils/requests';
import {
  updateLoginField,
  updateLoginStatus,
  resetLoginForm,
} from '../../../redux/actions/AuthActions';
// components
import TextField from '../../forms/fields/TextField';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  leftBlock: {
    minWidth: `50%`,
    // maxWidth: `50%`,
    width: `50%`,
    backgroundColor: `#171717`,
  },
  rightBlock: {
    minWidth: `50%`,
    maxWidth: `50%`,
    width: `50%`,
    padding: `0 5%`,
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
// seed
const education = [
  {
    organization: 'Yale Schoole of Management',
    degree: 'Masters in Business Administration',
    dtEnd: '2016-05-00T00:00:00Z',
    dtStart: '2014-08-00T00:00:00Z',
  },
  {
    organization: 'Bucknell University',
    degree: 'B.A. in Economics',
    dtEnd: '2013-05-00T00:00:00Z',
    dtStart: '2013-05-00T00:00:00Z',
  },
];
const employment = [
  {
    employer: 'Sungage Asset Management',
    title: 'Investments Director',
    dtEnd: '2020-05-00T00:00:00Z',
    dtStart: '2017-05-00T00:00:00Z'
  },
  {
    employer: 'Atrium Solar LLC',
    title: 'Senior Vice President',
    dtEnd: '2017-05-00T00:00:00Z',
    dtStart: '2014-05-00T00:00:00Z'
  },
  {
    employer: 'Wind Capital',
    title: 'Analyst',
    dtEnd: '2014-05-00T00:00:00Z',
    dtStart: '2013-05-00T00:00:00Z'
  }
];
const about = {
  profileBio:
    'As a Senior Vice President I manage all business development for the North West region of the United States for Vertex Capital’s solar project finance. With over 7 years of experience in the renewable finance sector, I am able to utilize my extensive network to access capital for our enterprise clients and oversee cashflow distribution to our investors.',
};
// event handlers
const submitLogin = async (username, password, dispatch) => {
  // TODO create routes and services to connect to backend and actually log in
  const testing = true;
  let res;
  let profileObj = {};
  if (testing) {
    if (username === 'test@test.com' && password === 'testpassword') {
      profileObj = {
        pii: {
          firstName: 'Test User',
        },
        username: 'test-user-123',
        email: username,
        education,
        employment,
        about,
        investments: [],
      };
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
  const activeProfile = useSelector(s => s.auth.activeProfile);
  if (activeProfile) {
    dispatch(resetLoginForm());
    return <Redirect to="/" />;
  }

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={`${classes.root} w100 h100 page`}
    >
      <Grid item className={`h100 ${classes.leftBlock}`} />
      <Paper square className={`h100 ${classes.rightBlock} flexcol`}>
        <Paper square elevation={3} className={`${classes.formContainer}`}>
          <div className={`${classes.title}`}>Sign in to Envest</div>
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
