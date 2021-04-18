// react
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// utils
import Joi from 'joi';
import { fixedWidth, fixedHeight } from '../../utils/styleFxns';
import { login } from '../../../utils/requests';
import {
  updateLoginField,
  updateLoginStatus,
  resetLoginForm,
} from '../../../redux/actions/AuthActions';
// components
import TextField from '../../forms/fields/TextField';

console.log('pro', process.pid)
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
        firstName: 'Test User',
        username: 'test-user-123',
        email: username,
        education,
        employment,
        about,
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
  const dispatch = useDispatch();
  // state
  const usernameRedux = useSelector(s => s.auth.login.fields.username.value);
  const passwordRedux = useSelector(s => s.auth.login.fields.password.value);
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);
  if (isAuthenticated) {
    dispatch(resetLoginForm());
    return <Redirect to="/" />;
  }
  // effects
  // style
  /**@type {React.CSSProperties} */
  const style = {
    ...fixedWidth(50, '%'),
    justifyContent: `start`,
  };
  /**@type {React.CSSProperties} */
  const ctnrStyle = {
    boxShadow: `0px 0px 20px 8px rgba(0, 0, 0, 0.200)`,
    marginTop: `10%`,
    flex: `unset`,
    backgroundColor: 'whitesmoke',
  };
  /**@type {React.CSSProperties} */
  const titleStyle = {
    padding: `10px 0 0 0`,
    fontSize: `20px`
  };
  /**@type {React.CSSProperties} */
  const inputCtnrStyle = {
    flex: `unset`,
    justifyContent: `space-around`,
    alignItems: `start`,
    padding: `15px 30px`,
  };
  /**@type {React.CSSProperties} */
  const inputStyle = {
    ...fixedHeight(40, 'px'),
    fontSize: `18px`,
    padding: `10px`,
    margin: `5px 0`,
  };
  /**@type {React.CSSProperties} */
  const inputTitleStyle = {
    alignItems: `start`,
  };
  /**@type {React.CSSProperties} */
  const submitStyle = {
    ...fixedHeight(40, 'px'),
    bottom: 0,
    // backgroundColor: `black`,
    borderTop: '1px solid grey',
    borderTopRightRadius: `0`,
    borderTopLeftRadius: `0`,
    cursor: `pointer`,
  };

  return (
    <div style={style} className="flexcol f1 page">
      <div style={ctnrStyle} className="flexcol ctnr w100">
        <div style={titleStyle}>Sign in to Envest</div>
        {/* eslint-disable-next-line */}
        <div
          className="InputCtnr flexcol w100"
          style={inputCtnrStyle}
          onKeyDown={keyDownHandler(usernameRedux, passwordRedux, dispatch)}
        >
          <TextField
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
            formName="login"
            fieldName="password"
            label="Password"
            validator={Joi.string().min(8).max(255)}
            reducerName="auth"
            updateFxn={updateLoginField}
          />
        </div>
        {/* eslint-disable-next-line */}
        <div
          className="w100 flexcol noselect"
          style={submitStyle}
          onClick={() => submitLogin(usernameRedux, passwordRedux, dispatch)}
        >
          Submit
        </div>
      </div>
    </div>
  )
};

// export
export default LoginForm;
