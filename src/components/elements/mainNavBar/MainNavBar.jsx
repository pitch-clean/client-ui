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
  container: {
    backgroundColor: '#323e49',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  root: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1300px',
    padding: `5px 0`,
    textDecoration: 'none',
    color: '#1B2B41',
    position: 'sticky',
    top: 0,
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
    <div className={`container ${classes.container} w100 flexrow`} ref={ref1}>
      <div className={`MainNavBar ${classes.root} flexrow`}>
        <Logo />
        <CenterNavGroup />
        <RightNavGroup />
      </div>
    </div>
  );
};

// export
export default MainNavBar;
