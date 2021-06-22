// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { updateProfileMap } from '../../../redux/actions/views/MessagesActions';
// components
import MsgLS from './MsgLS';
import MsgMain from './MsgMain';
// seed
import { users1 } from '../../../seed/queryUsersById';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'space-between',
    alignItems: 'start',
  },
}));

/**
 * main
 */
const MessagesView = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const profileMap = useSelector(s => s.view.messages.profileMap);
  // console.log('profileMapprofileMap', profileMap)
  // effects
  // get the mappings for profiles
  useEffect(() => { // DEPRECATED
    dispatch(updateProfileMap(users1)); // DEPRECATED
  }, []); // DEPRECATED

  return profileMap ? (
    <div className={`MessagesView ${classes.root} flexrow h100`}>
      <MsgLS />
      <MsgMain />
    </div>
  ) : (
    <div />
  );
};

// export
export default MessagesView;
