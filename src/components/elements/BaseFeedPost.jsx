// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  CardContent,
  Typography,
  Paper,
} from '@material-ui/core';
import PostHeader from './post/PostHeader';
// constants
const useStyles = makeStyles(theme => ({
  cardRoot: {
    margin: `5px 0`,
    padding: `10px`,
    boxShadow: `
      0px 2px 1px -1px rgba(0,0,0,0.03),
      0px 1px 1px 0px rgba(0,0,0,0.02),
      0px 1px 3px 0px rgba(0,0,0,0.01)
    `,
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardBody: {
    textAlign: 'start',
  },
}));
const buildName = (fName, lName) => {
  return `${fName} ${lName}`;
};
const buildLocation = (city, stateProv) => {
  return `${city}, ${stateProv}`;
};

// main
const BaseFeedPost = ({ postObj, idx: postIdx, isProfile }) => {
  // init hooks
  const classes = useStyles();
  // state
  const viewProfile = useSelector(s => s.view.profile.viewProfile);
  // destructure
  const { body } = postObj;

  return postObj ? (
    <Paper elevation={0} className={`BaseFeedPost ${classes.cardRoot} w100`}>
      <PostHeader postObj={postObj} />
      <PostContent postObj={postObj} />
    </Paper>
  ) : (
    <div />
  );
};

// export
export default BaseFeedPost;
