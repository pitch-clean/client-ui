// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { CardActions, Button } from '@material-ui/core';
// components
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: `0 2px`,
    flex: `0 1`,
    backgroundColor: '#fbfbfb',
  },
}));

/**
 * main
 * TODO: Create the component for comments
 */
const SocialItxnButton = ({ type, postId, postIdx }) => {
  // init hooks
  const classes = useStyles();

  return (
    <CardActions disableSpacing>
      <Button
        className={`${inArr ? classes.isLiked : ''}`}
        variant="contained"
        size="small"
        disableRipple
        onClick={onClick(postId, postProfileId, dispatch)}
      >
        {/* {msg} */}
      </Button>
    </CardActions>
  );
};

// export
export default SocialItxnButton;

