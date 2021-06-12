// react
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { updateL1 } from '../../../redux/actions/ViewActions';
// components
import StyledTabs from './StyledTabs';
import StyledTab from './StyledTab';
import ProfileNavButton from './ProfileNavButton';
import LoginOrRegister from './LoginOrRegister';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
    padding: `0 40px`,
    color: `whitesmoke`,
    '& .MuiTabs-flexContainer': {
      justifyContent: 'space-between',
    },
  },
  tab: {
    flex: 1,
  },
}));

/**
 * main
 */
const CenterNavGroup = () => {
  const l1Map = {
    [window.env.client.feed]: 0,
    [window.env.client.marketplace]: 1,
    [window.env.client.messages]: 2,
    [window.env.client.profile]: 3,
  };
  // init hooks
  const classes = useStyles();
  const loc = useLocation();
  const dispatch = useDispatch();
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);
  const l1Path = loc.pathname.split('/')[1];
  // effects
  useEffect(() => {
    dispatch(updateL1(l1Path));
  }, [l1Path]);

  return (
    <StyledTabs className={`TabContainer ${classes.root} flexrow`} value={l1Map[l1Path]} indicatorColor="secondary" textColor="primary" >
      <Link className={`${classes.tab} navBarLink`} to={`/${window.env.client.feed}`}>
        <StyledTab label="Newsfeed" textColor="primary" />
      </Link>
      <Link className={`${classes.tab} navBarLink`} to={`/${window.env.client.marketplace}`}>
        <StyledTab label="Marketplace" textColor="primary" />
      </Link>
      <Link className={`${classes.tab} navBarLink`} to={`/${window.env.client.messages}`}>
        <StyledTab label="Messages" textColor="primary" />
      </Link>
      <div className={`${classes.tab} navBarLink`} >
        {isAuthenticated ? <ProfileNavButton /> : <LoginOrRegister />}
      </div>
    </StyledTabs>
  );
};

// export
export default CenterNavGroup;
