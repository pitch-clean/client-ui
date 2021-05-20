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
  const messageObj = useSelector(s => s.view.messages.activeConversationObj.messages[idx]);
  const profileMap = useSelector(s => s.view.messages.profileMap);
  const profileObj = profileMap[messageObj.profile];
  const { text } = messageObj;
  const {
    alias,
    pii: { firstName, lastName },
    active: { title, organization },
    images: {
      profile: { thumbnail },
    },
  } = profileObj;

  return (
    <Paper square elevation={0} className={`MessageCard ${classes.root}`}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Profile" src={thumbnail} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <MuiLink
                component={Link}
                to={`/${envProfilePath}/${alias}`}
                variant="body1"
                color="textPrimary"
              >
                {`${firstName} ${lastName}`}
              </MuiLink>
              <Typography
                component="span"
                variant="caption"
                className={classes.subtitle}
                color="textSecondary"
              >
                {`${title} at ${organization}`}
              </Typography>
            </>
          }
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.body}
                color="textPrimary"
              >
                {text}
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
