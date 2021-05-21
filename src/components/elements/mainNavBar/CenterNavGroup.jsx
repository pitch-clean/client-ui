// react
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
// utils
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Tab, Tabs } from '@material-ui/core';
import { updateL1 } from '../../../redux/actions/ViewActions';
// constants
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    width: 70,
    '& > span': {
      maxWidth: 70,
      width: 70,
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
const StyledTab = withStyles(theme => ({
  root: {
    padding: `0px 20px`,
    minWidth: `100%`,
    maxWidth: `100%`,
    width: `100%`,
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    color: `whitesmoke`,
    fontSize: theme.typography.pxToRem(15),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#262826',
    justifyContent: 'center',
    color: `whitesmoke`,
  },
  nav: {
    width: '100%',
    maxWidth: '1300px',
    padding: 0,
    paddingLeft: 10,
    margin: 0,
    marginLeft: '-30px',
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
      color: 'black',
      borderColor: 'black',
      borderWidth: 2,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
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
 */
const CenterNavGroup = () => {
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
    // <Grid className={`w100 ${classes.root} flexcol`}>
      <div className={`CenterNavGroup ${classes.nav} flexrow`}>
        <StyledTabs value={l1Map[l1Path]} indicatorColor="secondary" textColor="primary" centered>
          <Link to={`/${envFeedPath}`}>
            <StyledTab label="Newsfeed" textColor="primary" />
          </Link>
          <Link to={`/${envOfferingsPath}`}>
            <StyledTab label="Marketplace" textColor="primary" />
          </Link>
          <Link to={`/${envPortfolioPath}`}>
            <StyledTab label="Portfolio" textColor="primary" />
          </Link>
          <Link to={`/${envMessagesPath}`}>
            <StyledTab label="Messages" textColor="primary" />
          </Link>
        </StyledTabs>
      </div>
    // </Grid>
  );
};

// export
export default CenterNavGroup;
