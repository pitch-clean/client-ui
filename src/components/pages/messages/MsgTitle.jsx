// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    // width: `100%`,
  },
  paper: {
    // width: `100%`,
    // height: `100%`,
  },
  grid: {
    padding: '15px 20px',
    flexFlow: 'column',
    justifyContent: 'flex-start',
  },
  typography: {
    display: 'block',
  },
}));

/**
 * main
 *
 */
const MsgTitle = () => {
  // init hooks
  const classes = useStyles();
  // state
  const profileMap = useSelector(s => s.view.messages.profileMap);
  const conversationId = useSelector(s => s.view.messages.activeConversationId);
  const participants = useSelector(
    s => s.auth.activeProfile.conversations[conversationId].participants,
  );
  const _id = useSelector(s => s.auth.activeProfile._id);
  const nonSelfParticipants = participants.filter(p => p !== _id);

  let allNamesStr = [];
  const thumbnailArr = [];
  for (let i = 0; i < nonSelfParticipants.length; i += 1) {
    const profileId = nonSelfParticipants[i];
    const {
      active: { organization, title },
      pii: { firstName, lastName },
      images: {
        profile: { thumbnail },
      },
    } = profileMap[profileId];
    let fullName = '';
    if (nonSelfParticipants.length > 1) {
      fullName = `${firstName} ${lastName}`;
    } else {
      fullName = `${firstName} ${lastName} - ${title} ${organization}`;
    }
    allNamesStr.push(fullName);
    thumbnailArr.push(thumbnail);
  }
  allNamesStr = allNamesStr.join(', ');

  return (
    <Paper square background="primary" className={`MsgTitle ${classes.root}`}>
      <Grid container className={`MsgTitle ${classes.grid}`}>
        <Typography className={classes.typography} variant="body1">
          {allNamesStr}
        </Typography>
        {/* <Typography className={classes.typography} color="textSecondary" variant="body2" >
          {allNamesStr}
        </Typography> */}
      </Grid>
    </Paper>
  );
};

// export
export default MsgTitle;
