// react
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  CardActions,
  Button,
} from '@material-ui/core';
import { Put } from '../../../utils/requests';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'start'
  },
  button: {},
}));
const onClick = (window, startupId, activeProfileId, isSuccessfulSubmitSet, errorSet) => async () => {
  console.log('handling click')
  // send request to add activeProfileId to interest list for startup
  const url = `${window.env.api.startups}/interest`;
  const body = {
    activeProfileId,
    startupId,
  };
  try {
    const resJSON = await Put(url, body);
    console.log('submitting interest', resJSON);
    isSuccessfulSubmitSet(true);
  } catch (err) {
    errorSet(err)
  }
};
const postTypeMapping = {
  offering: 'View Offering',
  interest: 'Submit Interest',
  // rsvp: 'RSVP',
};

/**
 * main
 */
const InterestPIC = ({ postObj }) => {
  // init hooks
  const classes = useStyles();
  // state
  const [isSuccessfulSubmit, isSuccessfulSubmitSet] = useState(false);
  const [error, errorSet] = useState('');
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const {
    startup: startupId,
    postType,
  } = postObj;
  if (isSuccessfulSubmit) {
    return <Redirect to={`/${window.env.client.startup}/${startupId}`} />;
  }
  if (error) {
    console.log('error', error);
  }
  let msg = postTypeMapping[postType];

  return (
    <CardActions
      className={`InterestPIC ${classes.root}`}
      disableSpacing
    >
      <Button
        className={`button ${classes.button}`}
        variant="contained"
        size="small"
        disableRipple
        onClick={onClick(window, startupId, activeProfileId, isSuccessfulSubmitSet, errorSet)}
      >
        {msg}
      </Button>
    </CardActions>
  );
};

// export
export default InterestPIC;
