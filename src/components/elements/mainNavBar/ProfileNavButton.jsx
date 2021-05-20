// react
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, ButtonBase, Link as MuiLink } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 15px`,
    border: `1px solid whitesmoke`,
    borderRadius: '7px',
  },
  createOffering: {
    padding: `0 15px`,
    margin: `0 45px`,
  },
}));
// TODO add env vars
const envOfferingsPath = 'create-offering';
const envProfilePath = 'profile';

/**
 * main
 */
const ProfileNavButton = () => {
  // init hooks
  const classes = useStyles();
  // state
  const firstName = useSelector(s => s.auth.activeProfile.pii.firstName);
  const alias = useSelector(s => s.auth.activeProfile.alias);
  const profileClass = useSelector(s => s.auth.activeProfile.profileClass);
  // const activeProfile = useSelector(s => s.auth.activeProfile);

  return (
    <Grid container direction="row">
      {/* new here below */}
      {profileClass === 'sponsor' && (
        <MuiLink color="inherit" component={Link} to={`/${envOfferingsPath}`}>
          <Typography
            className={classes.createOffering}
            variant="subtitle1"
            color="inherit"
            component="div"
          >
            Create Offering
          </Typography>
        </MuiLink>
      )}
      {/* above */}
      <MuiLink color="inherit" component={Link} to={`/${envProfilePath}/${alias}`}>
        <ButtonBase className={classes.root} variant="outlined">
          <Typography variant="subtitle1" color="inherit" component="div">
            {firstName}
          </Typography>
        </ButtonBase>
      </MuiLink>
    </Grid>
  );
};

// export
export default ProfileNavButton;
