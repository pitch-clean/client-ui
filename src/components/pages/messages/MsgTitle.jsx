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
    minHeight: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {},
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
  const participants = useSelector(s => s.view.messages.activeConversationObj.participants);
  const activeProfileId = useSelector(s => s.auth.activeProfile._id);
  const nonSelfParticipants = participants.filter(({ _id: participantId }) => participantId !== activeProfileId);
  let titleStr = '';
  // if greater than 1 (direct message), print list of names.  Otherwize, proint name and position
  if (nonSelfParticipants.length > 1) {
    const allNamesArr = [];
    const thumbnailArr = [];
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
      fullName = `${firstName} ${lastName}`;
      if (nonSelfParticipants.length > 1) {
      } else {
        fullName = `${firstName} ${lastName} - ${title} ${organization}`;
      }
      allNamesArr.push(fullName);
      thumbnailArr.push(thumbnail);
    }
    titleStr = allNamesArr.join(', ');
  } else {
    const {
      pii: {
        firstName,
        lastName,
      },
      active: {
        position,
        organization: {
          pii: {
            name: orgName,
          },
        },
      },
    } = nonSelfParticipants[0];
    titleStr = `${firstName} ${lastName} - ${position} ${orgName}`;
  }
  
  return (
    <div className={`${classes.wrapper}`}>
      {/* div for pictures here */}
      <Typography className={classes.typography} variant="body1">
        {titleStr}
      </Typography>
    </div>
  );
};

/**
 * main
 */
const MsgTitle = () => {
  // init hooks
  const classes = useStyles();
  // state
  const activeConversationId = useSelector(s => s.view.messages.activeConversationObj._id);

  return (
    <Paper square background="primary" className={`MsgTitle ${classes.root} flexrow w100`}>
      <div className={`${classes.sub} flexcol h100`}>
        {activeConversationId && <MsgTitleNamesView />}
      </div>
      <div className={`settings ${classes.settingsContainer} flexcol h100`}>
        <MoreHorizIcon />
      </div>
    </Paper>
  );
};

// export
export default MsgTitle;
