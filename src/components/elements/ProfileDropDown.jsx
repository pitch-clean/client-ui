// react
import React, {useRef} from 'react';
import { useSelector } from 'react-redux';
// utils
import { fixedHeight, fixedWidth } from '../utils/styleFxns';
// callbacks
const showHideDropdown = (dropDownRef, isFocused) => {
  dropDownRef.current.style.display = isFocused ? `flex` : `none`;
};

// main
const ProfileDropDown = () => {
  // init hooks
  const parentRef = useRef(null);
  const dropDownRef = useRef(null);
  // state
  const profileName = useSelector(s => s.auth.activeProfile.profileName);
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
  /**@type {React.CSSProperties} */
  const dropDownStyle = {
    ...fixedWidth(300, 'px'),
    ...fixedHeight(400, 'px'),
    backgroundColor: `blue`,
    display: `none`,
    position: `absolute`,
    top: `99%`,
    right: 0,
    zIndex: 100000,
    border: 0,
    outline: 0,
  }
  const dropDownList = () => {
    const elemArr = [];
    return elemArr;
  };
  return (
    <div
      className="flexcol"
      style={style}
      onMouseMove={() => {parentRef.current.focus()}}
      onClick={() => {parentRef.current.focus()}}
      onFocus={() => showHideDropdown(dropDownRef, true)}
      onBlur={() => showHideDropdown(dropDownRef, false)}
      onMouseOut={() => {parentRef.current.blur()}}
      tabIndex='0'
      ref={parentRef}
    >
        {profileName}
        <div
          className="profileDropDown inactive"
          style={dropDownStyle}
          ref={dropDownRef}
        >
          {dropDownList()}
        </div>
    </div>
  )
};

// export
export default ProfileDropDown;
