// react
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// utils
import { fixedHeight, fixedWidth } from '../../utils/styleFxns';
import { mouseDownFocusBlur, showHideDropdown } from '../../utils/eventHandlers';

// main
const ProfileDropDown = () => {
  // init hooks
  const parentRef = useRef(null);
  const dropDownRef = useRef(null);
  // state
  const firstName = useSelector(s => s.auth.activeProfile.firstName);
  const username = useSelector(s => s.auth.activeProfile.username);
  // style
  /**@type {React.CSSProperties} */
  const dropDownStyle = {
    ...fixedWidth(300, 'px'),
    ...fixedHeight(400, 'px'),
    backgroundColor: `#4c4a4a`,
    display: `none`,
    position: `absolute`,
    top: `99%`,
    right: 0,
    zIndex: 100000,
    border: 0,
    outline: 0,
    color: 'white',
  };
  const dropDownList = () => {
    const elemArr = [];
    return elemArr;
  };

  return (
    <Link to={`/profile/${username}`}>
      {/* eslint-disable-next-line */}
      <div
        className="flexcol"
        onMouseMove={() => {
          parentRef.current.focus();
        }}
        // onMouseDown={e => mouseDownFocusBlur(e, parentRef, dropDownRef)}
        // onFocus={() => showHideDropdown(dropDownRef, true)}
        // onBlur={() => showHideDropdown(dropDownRef, false)}
        onMouseOut={() => {
          parentRef.current.blur();
        }}
        // eslint-disable-next-line
        tabIndex={0}
        ref={parentRef}
        style={{
          padding: `10px 25px`,
          cursor: `default`,
          position: `relative`,
          margin: `0`,
          border: 0,
          outline: 0,
          color: 'white',
        }}
      >
        {firstName}
        {/* <div className="profileDropDown inactive" style={dropDownStyle} ref={dropDownRef}>
          {dropDownList()}
        </div> */}
      </div>
    </Link>
  )
};

// export
export default ProfileDropDown;
