// react
import React from 'react';
import {Link} from 'react-router-dom';

// main
const NavBarItem = ({title}) => {
  // style
  /**@type {React.CSSProperties} */
  const style = {
    padding: `10px 25px`,
    cursor: `default`,
    position: `relative`,
    margin: `0`,
    border: 0,
    outline: 0,
  };

  return (
    <Link className="h100 flexrow" style={style} ></Link>
  )
};

// export
export default NavBarItem;
