// react
import React from 'react';
// utils
import { makeStyles } from '@material-ui/core/styles';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: `0 2px`,
    flex: 1,
  },
}));

/**
 * main
 * TODO: Create the card that shows up when you click on the link
 *      Build card element
 *      Create get request to pull list of profiles
 *      When this card element renders:
 *          background blurs and darkens
 *          defaults to rendering above the likes
 *          if likes is at the bottom of the page, it has to render above the likes 
 *          if likes is at the top of the page, it has to render above the likes 
 */
const ShowProfilesThatLikedPost = ({  }) => {
  // init hooks
  const classes = useStyles();
  // build
  const listOfAccounts = [];

  return (
    <div className={`ShowProfilesThatLikedPost ${classes.root}`}>
      {listOfAccounts}
    </div>
  );
};

// export
export default ShowProfilesThatLikedPost;
