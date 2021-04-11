// react
import React from 'react';
import { useSelector } from 'react-redux';
// components
import ProfileDropDown from './ProfileDropDown';
import LoginRegister from './LoginRegister';

// main
const ProfileLoginRegister = () => {
  // init hooks
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);
  // style
  /**@type {React.CSSProperties} */
  const style = {
    boxShadow: `rgb(79, 76, 76) 0px 0px 4px -1px`,
    margin: `0 50px`,
    border: `none`,
    color: `white`,
  };
  return (
    <div className="h100 ctnr flexrow" style={style} >
      {isAuthenticated ? <ProfileDropDown /> : <LoginRegister />}
    </div>
  )
};

// export
export default ProfileLoginRegister;
