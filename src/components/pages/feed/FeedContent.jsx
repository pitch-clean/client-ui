// react
import React, { useEffect, useState } from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List } from '@material-ui/core';
// components
import FeedPost from './FeedPost';
// seed
import { testPosts } from '../../../seed/testPosts';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '60%',
    padding: `10px`,
    margin: `0 5px`,
  },
  cardRoot: {
    margin: `10px`,
  },
  cardHeader: {
    padding: `10px`,
    justifyContent: 'start',
  },
  avatar: {
    backgroundColor: 'lightblue',
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: 0,
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardBody: {
    textAlign: 'start',
  },
}));

// TODO refactor to have lower level components make redux calls to prevent rerendering list
// main
const FeedContent = () => {
  // init hooks
  const classes = useStyles();
  // state
  const [postsArr, setPostsArr] = useState([]);
  // build
  const buildPostElemArr = arrOfPosts => {
    const arrOfPostElems = arrOfPosts.map((post, idx) => {
      return <FeedPost postObj={post} idx={idx} />;
    });
    return <List>{arrOfPostElems}</List>;
  };
  // effects
  // fetch initial posts on page load
  useEffect(() => {
    // TODO fetch
    const payload = testPosts;
    setPostsArr(payload);
  }, []);
  // TODO fetch additional posts when reaching the end
  // useEffect(() => {}, []);
  return (
    <Paper className={`${classes.root} FeedContainer flexcol f1`} outlined elevation={3}>
      {buildPostElemArr(postsArr)}
    </Paper>
  );
};

// export
export default FeedContent;
