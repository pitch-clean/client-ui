// react
import React, {useState} from 'react';
import {fixedWidth, fixedHeight} from '../../utils/styleFxns';
// utils
import {login} from '../../../utils/requests';
// event handlers
const updateInputField = (e, stateUpdateFxn) => {
  e.preventDefault();
  stateUpdateFxn(e.currentTarget.value);
};
const submitLogin = async (username, password) => {
  console.log('submitting', username)
  const loginUrl = 'http://localhost:8000/login';
  const body = {username, password};
  try {
    const res = await login(loginUrl, body); 
    console.log('response here', res);
  } catch (error) {
    console.error('error HERE:', error)
  }
};
const keyDownHandler = (e, username, password) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    submitLogin(username, password)
  }
};
// main
const LoginForm = () => {
  // state
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // style
  /**@type {React.CSSProperties} */
  const style = {
    ...fixedWidth(30, '%'),
    justifyContent: `start`,
  };
  /**@type {React.CSSProperties} */
  const ctnrStyle = {
    marginTop: `10%`,
    border: `1px solid grey`,
    color: `whitesmoke`,
    boxShadow: `0px 0px 20px 8px rgba(0, 0, 0, 0.200)`,
    flex: `unset`,
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
    backgroundColor: `black`,
    borderTopRightRadius: `0`,
    borderTopLeftRadius: `0`,
    cursor: `pointer`,
  };

  return (
    <div style={style} className="flexcol h100" >
      <div style={ctnrStyle} className="flexcol ctnr w100" >
        <div style={titleStyle} >
          Sign in to Envest
        </div>
        <div className="InputCtnr flexcol ctnr w100" style={inputCtnrStyle} >
          <div className="w100 flexcol" style={inputTitleStyle} >
            <div>Username</div>
            <input
              style={inputStyle}
              className="w100"
              type="text"
              placeholder="..."
              value={username}
              onChange={e => updateInputField(e, setUsername)}
              onKeyDown={e => keyDownHandler(e)}
              autoFocus
            />
          </div>
          <div className="w100 flexcol" style={inputTitleStyle} >
            <div>Password</div>
            <input
              style={inputStyle}
              className="w100"
              type="password"
              placeholder="..."
              value={password}
              onChange={e => updateInputField(e, setPassword)}
              onKeyDown={e => keyDownHandler(e)}
            />
          </div>
        </div>
        <div className="w100 ctnr flexcol noselect" style={submitStyle} onClick={() => submitLogin(username, password)} >
          Submit
        </div>
      </div>
    </div>
  )
};

// export
export default LoginForm;
