// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { fixedHeight } from '../../utils/styleFxns';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link as MuiLink } from '@material-ui/core';
// components
// import Sample from './Sample';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 40px`,
    justifyContent: `start`,
  },
  divider: {
    backgroundColor: `grey`,
    padding: `.5px`,
    margin: `5px 0`,
    ...fixedHeight(70, '%'),
    zIndex: 100,
  },
  link: {
    padding: `0 20px`,
    textDecoration: `none`,
  },
}));
const envSponsorPath = 'sponsor';
const envInvestPath = 'invest';
const envFunctionalityPath = 'functionality';

/**
 * main
 */
const InfoGroup = () => {
  // init hooks
  const classes = useStyles();

  return (
    <div className={`h100 f1 flexrow ${classes.root}`}>
      <MuiLink
        component={Link}
        to={`/${envSponsorPath}`}
        className={`navBarLink h100 flexcol ${classes.link}`}
      >
        Raise Capital
      </MuiLink>
      <MuiLink
        component={Link}
        to={`/${envInvestPath}`}
        className={`navBarLink h100 flexcol ${classes.link}`}
      >
        Invest
      </MuiLink>
      <MuiLink
        component={Link}
        to={`/${envFunctionalityPath}`}
        className={`navBarLink h100 flexcol ${classes.link}`}
      >
        How it works
      </MuiLink>
    </div>
  );
};

// export
export default InfoGroup;
