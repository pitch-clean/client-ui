// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, Typography, Avatar, Tab } from '@material-ui/core';
import { updateActiveConversation } from '../../../redux/actions/ViewActions';
// components
// constants
const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      background: 'whitesmoke',
    },
  },
  active: {
    opacity: 1,
  },
  overflow: {
    flex: `1 1 auto`,
    width: `100%`,
    margin: 0,
    padding: `0`,
    paddingTop: 10,
    '& .MuiCardHeader-content': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    '& .MuiTypography-root': {
      textAlign: 'start',
      padding: 0,
    },
    '& *': {
      textTransform: `none`,
    },
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginTop: `-3px`,
    '& .MuiCardHeader-avatar': {
      marginRight: 0,
    },
  },
}));
export const buildListOfUserNames = (participants, _id, profMap) => {
  const nonSelfParticipants = participants.filter(p => p !== _id);
  const allNamesArr = [];
  const thumbnailArr = [];
  for (let i = 0; i < nonSelfParticipants.length; i += 1) {
    const profileId = nonSelfParticipants[i];
    const {
      pii: { firstName, lastName },
      images: {
        profile: { thumbnail },
      },
    } = profMap[profileId];
    const fullName = `${firstName} ${lastName}`;
    allNamesArr.push(fullName);
    thumbnailArr.push(thumbnail);
  }
  const allNamesStr = allNamesArr.join(', ');
  return { allNamesStr, thumbnailArr };
};
/**
 * main
 * TODO: QUERY THE MESSAGES FOR A SINGLE CONVERSATION AFTER CLICKING ON A CONVERSATION CARD
 */
const ConversationCard = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const profileMap = useSelector(s => s.view.messages.profileMap);
  const activeConversationIdx = useSelector(s => s.view.messages.activeConversationIdx);
  const _id = useSelector(s => s.auth.activeProfile._id);
  const participants = useSelector(s => s.auth.activeProfile.conversations[idx].participants);
  const lastMessage = useSelector(s => s.auth.activeProfile.conversations[idx].lastMessage);
  const conversationId = useSelector(s => s.auth.activeProfile.conversations[idx].conversationId);

  const { allNamesStr, thumbnailArr } = buildListOfUserNames(participants, _id, profileMap);

  return (
    <Tab
      textColor="inherit"
      disableRipple
      className={classes.root}
      classes={{
        root: activeConversationIdx === idx ? classes.active : {},
      }}
      onClick={() => dispatch(updateActiveConversation({ idx, conversationId }))}
      style={{
        borderTop: idx > 0 ? '1px solid #dfdfdf' : '',
        minWidth: `100%`,
      }}
      label={
        <CardHeader
          className={classes.overflow}
          avatar={<Avatar className={classes.avatar} src={thumbnailArr[0]} />}
          title={
            <Typography
              noWrap
              className={classes.overflow}
              color="textPrimary"
              component="div"
              variant="subtitle2"
            >
              {allNamesStr}
            </Typography>
          }
          subheader={
            <Typography
              noWrap
              className={classes.overflow}
              variant="caption"
              component="div"
              color="textSecondary"
            >
              {lastMessage.text}
            </Typography>
          }
        />
      }
      value={idx}
    />
  );
};

// export
export default ConversationCard;
