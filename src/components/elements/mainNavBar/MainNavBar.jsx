// react
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
  // state
  const activeProfile = useSelector(s => s.auth.activeProfile);
  // effects
  useEffect(() => {
    console.log(ref1.current.getBoundingClientRect())
  }, [ref1]);

  return (
    <div
      className="w100 flexrow MainNavBar"
      style={{
        ...fixedHeight(40, 'px'),
        justifyContent: 'space-between',
      }}
    >
      <Link
        to={{ pathname: '/' }}
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
      {!activeProfile && <InfoGroup />}
      <ProfileLoginRegister />
    </div>
  );
};

// export
export default MainNavBar;
