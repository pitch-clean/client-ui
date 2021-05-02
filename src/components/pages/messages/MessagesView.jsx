// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { updateProfileMap } from '../../../redux/actions/ViewActions';
// components
import MsgLS from './MsgLS';
import MsgMain from './MsgMain';
// seed
import { users1 } from '../../../seed/queryUsersById';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flexFlow: 'row',
    flex: 1,
    maxHeight: `100%`,
  },
}));

/**
 * main
 *
 */
const MessagesView = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const profileMap = useSelector(s => s.view.messages.profileMap);
  // effects
  // get the mappings for profiles
  useEffect(() => {
    dispatch(updateProfileMap(users1));
  }, []);

  return profileMap ? (
    <Grid container className={`MessagesView w100 ${classes.root}`}>
      <MsgLS />
      <MsgMain />
    </Grid>
  ) : (
    <div />
  );
};

// export
export default MessagesView;
