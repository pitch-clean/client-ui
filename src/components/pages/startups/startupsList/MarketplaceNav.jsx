// react
import React from 'react';
import { useLocation } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import MPFilter from './MPFilter';
import CreateFundingPage from './CreateFundingPage';
// constants
const useStyles = makeStyles(theme => ({
  container: {
    minHeight: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  MarketplaceNav: {
    maxWidth: 1300,
    justifyContent: 'space-between',
  },
}));

/**
 * main
 */
const MarketplaceNav = ({}) => {
  // init hooks
  const classes = useStyles();
  const { pathname } = useLocation();

  return pathname === '/marketplace' ? (
    <div className={`${classes.container} flexrow w100`}>
      <div className={`${classes.MarketplaceNav} flexrow h100`}>
        <MPFilter />
        <CreateFundingPage />
      </div>
    </div>
  ): <div />;
};

// export
export default MarketplaceNav;
