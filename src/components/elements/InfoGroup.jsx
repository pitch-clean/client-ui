// react
import React from 'react';
import {Link} from 'react-router-dom';

// main
const InfoGroup = () => {
  // style
  /**@type {React.CSSProperties} */
  const style = {
    flex: 1,
    padding: `0 40px`,
    justifyContent: `end`,
  };
  /**@type {React.CSSProperties} */
  const linkStyle = {
    margin: `0 10px`,
    padding: `10px`,
    textDecoration: `none`,
    color: `whitesmoke`,
  };

  return (
    <div style={style} className="h100 flexrow" >
      <Link to="/offerings" style={linkStyle} >Offerings</Link>
      <Link to="/investors" style={linkStyle} >For Investors</Link>
      <Link to="/sponsors" style={linkStyle} >For Sponsors</Link>
    </div>
  )
};

// export
export default InfoGroup;
