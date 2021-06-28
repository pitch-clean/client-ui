// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  ListItem,
  ListItemAvatar,
  Typography,
  Avatar,
  ListItemText,
  Link as MuiLink,
} from '@material-ui/core';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    flexFlow: 'column',
    display: `flex`,
    borderBottom: '1px solid #f1f1f1',
  },
  subtitle: {
    display: 'block',
    lineHeight: 0.8,
  },
  body: {
    display: 'block',
    paddingTop: 10,
  },
  avatar: {
    backgroundColor: 'lightgrey',
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: `10px`,
  },
}));
const envProfilePath = 'profile';

/**
 * main
 *
 */
const MessageCard = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  // state
  const msgarr = useSelector(s => s.view.messages.messagesArr);
  const msgProfileAlias = useSelector(s => s.view.messages.messagesArr[idx].profile.alias);
  const thumbnail = useSelector(s => s.view.messages.messagesArr[idx].profile.images.profile.thumbnail);
  const msgProfilePosition = useSelector(s => s.view.messages.messagesArr[idx].profile.active.position);
  const msgProfileOrganization = useSelector(s => s.view.messages.messagesArr[idx].profile.active.organization);
  const msgProfileFirstName = useSelector(s => s.view.messages.messagesArr[idx].profile.pii.firstName);
  const msgProfileLastName = useSelector(s => s.view.messages.messagesArr[idx].profile.pii.lastName);
  const messageBody = useSelector(s => s.view.messages.messagesArr[idx].msgBody);
  // const messageId = useSelector(s => s.view.messages.messagesArr[idx]._id);
  // const dtCreated = useSelector(s => s.view.messages.messagesArr[idx].dtCreated);

  return (
    <Paper square elevation={0} className={`MessageCard ${classes.root} w100`}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Profile" src={thumbnail} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <MuiLink
                component={Link}
                to={`/${envProfilePath}/${msgProfileAlias}`}
                variant="body1"
                color="textPrimary"
              >
                {`${msgProfileFirstName} ${msgProfileLastName}`}
              </MuiLink>
              <Typography
                className={classes.subtitle}
                variant="caption"
                color="textSecondary"
              >
                {`${msgProfilePosition} at ${msgProfileOrganization.pii.name}`}
              </Typography>
            </>
          }
          secondary={
            <>
              <Typography
                className={classes.body}
                variant="body2"
                color="textPrimary"
              >
                {messageBody}
              </Typography>
            </>
          }
        />
      </ListItem>
    </Paper>
  );
};

// export
export default MessageCard;
