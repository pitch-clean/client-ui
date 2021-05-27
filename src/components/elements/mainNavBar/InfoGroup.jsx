// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { fixedHeight } from '../../utils/styleFxns';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Link as MuiLink } from '@material-ui/core';
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

/**
 * main
 */
const InfoGroup = () => {
  // init hooks
  const classes = useStyles();
  // state
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated);

  return isAuthenticated ? (
    <div className={`h100 f1 flexrow ${classes.root}`}>
      <MuiLink
        component={Link}
        to={`/${window.env.client.sponsor}`}
        className={`navBarLink h100 flexcol ${classes.link}`}
      >
        Raise Capital
      </MuiLink>
      <MuiLink
        component={Link}
        to={`/${window.env.client.invest}`}
        className={`navBarLink h100 flexcol ${classes.link}`}
      >
        Invest
      </MuiLink>
      <MuiLink
        component={Link}
        to={`/${window.env.client.functionality}`}
        className={`navBarLink h100 flexcol ${classes.link}`}
      >
        How it works
      </MuiLink>
    </div>
  ) : <div />;
};

// export
export default InfoGroup;
