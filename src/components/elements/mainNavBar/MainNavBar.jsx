// react
import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
// components
import ProfileLoginRegister from './ProfileLoginRegister';
import InfoGroup from './InfoGroup';
// utils
import { fixedHeight } from '../../utils/styleFxns';
// styles
import './MainNavBar.css';

// main
const MainNavBar = () => {
  // init hooks
  const ref1 = useRef(null);

  // effects
  useEffect(() => {
    console.log(ref1.current.getBoundingClientRect())
  }, [ref1]);

  return (
    <div
      className="w100 flexrow MainNavBar"
      style={{
        ...fixedHeight(40, 'px'),
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
        eFunded
      </Link>
      <InfoGroup />
      <ProfileLoginRegister />
    </div>
  );
};

// export
export default MainNavBar;
