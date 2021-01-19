// react
import React from 'react';
import { Link } from 'react-router-dom';
// components
import NavBarItem from './NavBarItem';

// main
const LoginRegister = () => {
  // style
  /**@type {React.CSSProperties} */
  const style = {
    display: `flex`,
    flexFlow: `row`,

  };
  /**@type {React.CSSProperties} */
  const linkStyle = {
    textDecoration: `none`,
    color: `black`,
    margin: `5px`,
    padding: `5px`,
    backgroundColor: `white`,
  }
  /**@type {React.CSSProperties} */
  const subStyle = {
    padding: `5px`,
  }

  return (
    <div className="h100 flexrow" style={style} >
      <Link to={`/login`} className="ctnr flexrow" style={linkStyle} >Login</Link>
      <Link to={`/register`} className="ctnr flexrow" style={linkStyle} >Register</Link>
    </div>
  )
};

// export
export default LoginRegister;
