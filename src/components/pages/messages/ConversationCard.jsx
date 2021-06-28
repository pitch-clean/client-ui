// react
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, Typography, Avatar, Tab } from '@material-ui/core';
import { updateActiveConversation, updateMessagesArr } from '../../../redux/actions/views/MessagesActions';
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
    textAlign: 'start',
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
export const buildListOfUserNames = (participants, activeProfileId) => {
  const nonSelfParticipants = participants.filter(({ _id: participantId }) => participantId !== activeProfileId);
  const allNamesArr = [];
  const thumbnailArr = [];
  for (let i = 0; i < nonSelfParticipants.length; i += 1) {
    const participantProfile = nonSelfParticipants[i];
    const {
      pii: { firstName, lastName },
      images: {
        profile: { thumbnail },
      },
    } = participantProfile;
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
const ConversationCard = ({ tabIdx }) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const activeConversationIdx = useSelector(s => s.view.messages.activeConversationIdx);
  const conversationObj = useSelector(s => s.view.messages.conversationsArr[tabIdx]);
  const activeProfileId = useSelector(s => s.auth.activeProfile._id); // current user's id
  const { participants, messages } = conversationObj;
  const lastMessage = messages[messages.length - 1];
  const previewText = lastMessage ? `${lastMessage.profile.pii.firstName}: ${lastMessage.msgBody}` : 'New Conversation';
  const { allNamesStr, thumbnailArr } = buildListOfUserNames(participants, activeProfileId);

  return (
    <Tab
      textColor="inherit"
      disableRipple
      className={classes.root}
      classes={{
        root: activeConversationIdx === tabIdx ? classes.active : {},
      }}
      onClick={() => {
        // dispatch(updateMessagesArr([]));
        activeConversationIdx !== tabIdx &&
        dispatch(updateActiveConversation({ idx: tabIdx }))
      }}
      style={{
        borderTop: tabIdx > 0 ? '1px solid #dfdfdf' : '',
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
              color="textSecondary"
            >
              {previewText}
            </Typography>
          }
        />
      }
      value={tabIdx}
    />
  );
};

// export
export default ConversationCard;
