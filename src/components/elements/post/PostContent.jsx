// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  CardContent,
  Typography,
  Link as MuiLink,
} from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  body: {
    textAlign: 'start',
  },
}));

/**
 * main
 * view component
 * this is used in 
 */
const PostContent = ({ postObj, view }) => {
  // init hooks
  const classes = useStyles();
  // destructuring
  const {
    _id: postId,
    body,
  } = postObj;
  let component = (
    <CardContent className={`PostContent ${classes.root}`}>
      <Typography
        className={`${classes.body}`}
        variant="body2"
        color="textPrimary"
      >
        {body}
      </Typography>
    </CardContent>
  );
  if (view === 'feed') {
    component = (
      <MuiLink
        component={Link}
        to={`/post/${postId}`}
        underline="none"
      >
        {component}
      </MuiLink>
    );
  }

  return component;
};

// export
export default PostContent;
