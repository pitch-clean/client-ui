// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    // minHeight: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paper: {
    // width: `100%`,
    // height: `100%`,
  },
  settingsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  sub: {
    padding: '15px 20px',
    flexFlow: 'column',
    justifyContent: 'flex-start',
  },
  typography: {
    display: 'block',
    fontWeight: 700,
    fontSize: `1.5rem`,
  },
}));

/**
 * view
 *
 */
const MsgTitleNamesView = () => {
  // init hooks
  const classes = useStyles();
  const activeConversationIdx = useSelector(s => s.view.messages.activeConversationIdx);
  const activeConversationObj = useSelector(s => s.view.messages.conversationsArr[activeConversationIdx]);
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const { participants } = activeConversationObj;
  const nonSelfParticipants = participants.filter(({ _id: participantId }) => participantId !== activeProfileId);
  let allNamesStr = [];
  const thumbnailArr = [];
  console.log(nonSelfParticipants)
  for (let i = 0; i < nonSelfParticipants.length; i += 1) {
    const participantProfile = nonSelfParticipants[i];
    const {
      active: { organization, title },
      pii: { firstName, lastName },
      images: {
        profile: { thumbnail },
      },
    } = participantProfile;
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
    <Typography className={classes.typography} variant="body1">
      {allNamesStr}
    </Typography>
  );
};
/**
 * main
 *
 */
const MsgTitle = () => {
  // init hooks
  const classes = useStyles();
  // state
  const conversationsCt = useSelector(s => s.view.messages.conversationsArr.length);

  return (
    <Paper square background="primary" className={`MsgTitle ${classes.root} flexrow w100`}>
      <div className={`${classes.sub} flexcol h100`}>
        {conversationsCt > 0 && <MsgTitleNamesView />}
      </div>
      <div className={`settings ${classes.settingsContainer} flexcol h100`}>
        <MoreHorizIcon />
      </div>
    </Paper>
  );
};

// export
export default MsgTitle;
