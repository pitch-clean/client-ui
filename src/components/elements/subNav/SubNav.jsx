// react
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Tab, Tabs, Collapse } from '@material-ui/core';
import { updateL1 } from '../../../redux/actions/ViewActions';
// components
import Portfolio from './Portfolio';
import Portfolio2 from './Portfolio2';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#333533',
    // transitionProperty: `height`,
    // transitionDuration: `0.2s`,
    // transitionTimingFunction: `ease-out`,
  },
  nav: {
    padding: 0,
    margin: 0,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    width: `200px`,
    margin: '0 20px',
    '& .MuiInputLabel-outlined.MuiInputLabel-marginDense[data-shrink=false]': {
      transform: `translate(14px, 9px) scale(1)`,
    },
    '& label': {
      fontSize: `15px`,
    },
    '& input': {
      paddingTop: 9,
      paddingBottom: 6,
      fontSize: `13px`,
    },
    '& input:focus': {
      color: 'red',
      borderColor: 'red',
      borderWidth: 2,
    },
  },
}));
const envFeedPath = 'feed';
const envOfferingsPath = 'offerings';
const envPortfolioPath = 'portfolio';
const envMessagesPath = 'messages';
const l1Map = {
  [envFeedPath]: 0,
  [envOfferingsPath]: 1,
  [envPortfolioPath]: 2,
  [envMessagesPath]: 3,
};

/**
 * main
 * banner (already created)
 *    IN PROGRESS portfolio (already created) - but has pie chart and diff styling
 *    DONE nav (already created)
 */
const SubNav = () => {
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
  if (!isAuthenticated) {
    return <div />;
  }
  // const unMountStyle = () => { // css for unmount animation
  //   this.setState({
  //     style: {
  //       fontSize: 60,
  //       opacity: 0,
  //       transition: 'all 1s ease',
  //     }
  //   })
  // }
  return (
    <Grid className={`w100 ${classes.root}`} container>
      {/* {l1Path === envOfferingsPath && <Portfolio />} */}
      {/* {l1Path === envPortfolioPath && <Portfolio2 />} */}
      <Grid className={`w100 ${classes.nav} flexrow`} container alignItems="stretch">
        <Tabs value={l1Map[l1Path]} indicatorColor="secondary" textColor="primary" centered>
          <Link to="/feed">
            <Tab label="Newsfeed" textColor="primary" />
          </Link>
          <Link to={`/${envOfferingsPath}`}>
            <Tab label="Marketplace" textColor="primary" />
          </Link>
          <Link to={`/${envPortfolioPath}`}>
            <Tab label="Portfolio" textColor="primary" />
          </Link>
          <Link to={`/${envMessagesPath}`}>
            <Tab label="Messages" textColor="primary" />
          </Link>
        </Tabs>
        <form
          onSubmit={e => {
            e.preventDefault();
            alert('Submitting');
          }}
        >
          <TextField className={classes.search} label="Search" variant="outlined" color="primary" size="small" />
        </form>
      </Grid>
    </Grid>
  );
};

// export
export default SubNav;
