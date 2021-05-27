// react
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { updateL1 } from '../../../redux/actions/ViewActions';
// components
import StyledTabs from './StyledTabs';
import StyledTab from './StyledTab';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'end',
    margin: 0,
    padding: 0,
    paddingLeft: 10,
    color: `whitesmoke`,
  },
}));

/**
 * main
 */
const CenterNavGroup = () => {
  const l1Map = {
    [window.env.client.feed]: 0,
    [window.env.client.offerings]: 1,
    [window.env.client.portfolio]: 2,
    [window.env.client.messages]: 3,
  };
  // init hooks
  const classes = useStyles();
  const loc = useLocation();
  const dispatch = useDispatch();
  // state
  const l1Path = loc.pathname.split('/')[1];
  // effects
  useEffect(() => {
    dispatch(updateL1(l1Path));
  }, [l1Path]);

  return (
    <div className={`CenterNavGroup ${classes.root} flexrow`}>
      <StyledTabs value={l1Map[l1Path]} indicatorColor="secondary" textColor="primary" centered>
        <Link className={`navBarLink`} to={`/${window.env.client.feed}`}>
          <StyledTab label="Newsfeed" textColor="primary" />
        </Link>
        <Link className={`navBarLink`} to={`/${window.env.client.offerings}`}>
          <StyledTab label="Marketplace" textColor="primary" />
        </Link>
        <Link className={`navBarLink`} to={`/${window.env.client.portfolio}`}>
          <StyledTab label="Portfolio" textColor="primary" />
        </Link>
        <Link className={`navBarLink`} to={`/${window.env.client.messages}`}>
          <StyledTab label="Messages" textColor="primary" />
        </Link>
      </StyledTabs>
    </div>
  );
};

// export
export default CenterNavGroup;
