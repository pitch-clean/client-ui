// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Link as MuiLink,
} from '@material-ui/core';
// components
// constants
const useStyles = makeStyles(theme => ({
  CreateFundingPage: {
    justifyContent: 'end',
  },
  button: {},
}));

/**
 * main
 */
const CreateFundingPage = ({}) => {
  // init hooks
  const classes = useStyles();

  return (
    <MuiLink className={`${classes.CreateFundingPage} flexrow`} to={`/${window.env.client.createStartup}`} component={Link} underline="none">
      <Button className={`${classes.button} flexrow`} variant="contained" color="primary" disableElevation>
        Create Funding Page
      </Button>
    </MuiLink>
  );
};

// export
export default CreateFundingPage;
