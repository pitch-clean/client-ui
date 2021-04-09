// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { fixedHeight } from '../../utils/styleFxns';

// main
const InfoGroup = () => {
  // style
  /** @type {React.CSSProperties} */
  const style = {
    padding: `0 40px`,
    justifyContent: `end`,
  };
  /** @type {React.CSSProperties} */
  const linkStyle = {
    padding: `0 20px`,
    textDecoration: `none`,
  };
  /** @type {React.CSSProperties} */
  const dividerStyle = {
    backgroundColor: `grey`,
    padding: `.5px`,
    margin: `5px 0`,
    ...fixedHeight(70, '%'),
    zIndex: 100,
  };

  return (
    <div style={style} className="h100 flexrow f1">
      <Link to="/offerings" style={linkStyle} className="navBarLink h100 flexcol">
        Offerings
      </Link>
      <div style={dividerStyle} className="" />
      <Link to="/investors" style={linkStyle} className="navBarLink h100 flexcol">
        For Investors
      </Link>
      <div style={dividerStyle} className="" />
      <Link to="/sponsors" style={linkStyle} className="navBarLink h100 flexcol">
        For Sponsors
      </Link>
    </div>
  );
};

// export
export default InfoGroup;
