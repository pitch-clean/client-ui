// react
import React, { useEffect, useRef } from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import CenterNavGroup from './CenterNavGroup';
import RightNavGroup from './RightNavGroup';
import Logo from './Logo';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#212221',
    width: '100%',
    maxWidth: '1300px',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'rgb(213, 220, 213)',
    textDecoration: 'none',
    padding: 5,
  },
}));

/**
 * main
 */
const MainNavBar = () => {
  // init hooks
  const classes = useStyles();
  const ref1 = useRef(null);
  // effects
  useEffect(() => {
    console.log(ref1.current.getBoundingClientRect())
  }, [ref1]);

  return (
    <div className={`MainNavBar ${classes.root} w100 flexrow`} ref={ref1}>
      <Logo />
      <CenterNavGroup />
      <RightNavGroup />
    </div>
  );
};

// export
export default MainNavBar;
