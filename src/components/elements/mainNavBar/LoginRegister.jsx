// react
import React from 'react';
import { Link } from 'react-router-dom';

// main
const LoginRegister = () => {
  // style
  /**@type {React.CSSProperties} */
  const linkStyle = {
    textDecoration: `none`,
    margin: `5px`,
    padding: `7px`,
    backgroundColor: `rgba(65, 63, 63, 0.42)`,
  }

  return (
    <div className="h100 flexrow" >
      <Link to={`/login`} className="ctnr flexrow navBarLink" style={linkStyle} >Login</Link>
      <Link to={`/register`} className="ctnr flexrow navBarLink" style={linkStyle} >Register</Link>
    </div>
  )
};

// export
export default LoginRegister;
