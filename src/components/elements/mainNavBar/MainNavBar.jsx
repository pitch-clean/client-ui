// react
import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
// components
import ProfileLoginRegister from './ProfileLoginRegister';
import InfoGroup from './InfoGroup';
// utils

import { fixedHeight } from '../../utils/styleFxns';

// main
const MainNavBar = () => {
  // init hooks
  const ref1 = useRef(null);
  // style
  /**@type {React.CSSProperties} */
  const homeLinkStyle = {
    
  };

  // effects
  useEffect(() => {
    console.log(ref1.current.getBoundingClientRect())
  }, [ref1]);
  return (
    <div
      className="w100 flexrow"
      style={{
        ...fixedHeight(40, 'px'),
        backgroundColor: `black`,
        justifyContent: `space-between`,
        padding: `0 5px`,
        color: `rgb(213, 220, 213)`,
        textDecoration: 'none',
      }}
    >
      <Link
        to={{pathname: "/"}}
        className="ctnr navBarLink"
        ref={ref1}
        style={{
          ...fixedHeight(100, '%'),
          padding: `10px`,
          margin: `0 30px`,
          backgroundColor: `rgb(64, 78, 64)`,
          textDecoration: 'inherit',
          border: `none`,
        }}
      >
        Envest
      </Link>
      <InfoGroup />
      <ProfileLoginRegister />
    </div>
  );
};

// export
export default MainNavBar;
