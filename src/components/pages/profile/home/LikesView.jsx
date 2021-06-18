// react
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  CardHeader,
  Typography,
  List,
  Divider,
} from '@material-ui/core';
import { getLikesByQuery } from '../../../utils/queries';
// components
import BaseFeedPost from '../../../elements/BaseFeedPost';
// constants
const useStyles = makeStyles(theme => ({
  root: {
  },
  likesContainer: {},
}));
const init = {};

/**
 * main
 */
const LikesView = () => {
  console.log('showing likesview')
  // init hooks
  const classes = useStyles();
  // state
  const viewProfileId = useSelector(s => s.view.profile.viewProfile._id);
  const [likesArrsObj, likesArrsObjSet] = useState();
  // build
  const likesElemsArr = [];
  ['startups', 'posts'].forEach((likeGroup) => {
    const likesArr = likesArrsObj[likeGroup];
    const nestedElemArr = [];
    for (let idx = 0; idx < likesArr.length; idx += 1) {
      const obj = likesArr[idx];
      nestedElemArr.push(
        <>
          {idx !== 0 && <Divider className={classes.divider} component="div" />}
          {likeGroup === 'posts' && <BaseFeedPost postObj={obj} />}
          {/* {<div className={``}>
            {obj}
          </div>} */}
        </>
      );
    }
    likesElemsArr.push(
      <div className={`container ${classes.likesContainer}`}>
        {nestedElemArr}
      </div>
    );

    return (
      <>
        {/* {idx !== 0 && <Divider className={classes.divider} component="div" />} */}
      </>
    );
  });
  // effects
  useEffect(async () => {
    const resLikesArrsObj = await getLikesByQuery(viewProfileId, 'profile', window);
    console.log(resLikesArrsObj);
    likesArrsObjSet(resLikesArrsObj);
  }, []);

  return (
    <Paper
      elevation={0}
      className={`LikesView ${classes.root} w100 flexcol`}
    >
      {likesElemsArr}
    </Paper>
  );
};

// export
export default LikesView;
