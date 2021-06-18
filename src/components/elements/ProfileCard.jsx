// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  IconButton,
  Link as MuiLink,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { getProfileName } from '../utils/stateAccess';
// constants
const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    padding: `0 10px`,
    margin: `2px 0`,
  },
  profile: {
    fontSize: theme.typography.fontSize / 1.01,
    fontWeight: 600,
  },
  connection: {
    lineHeight: 1.1,
  },
  addIconButton: {
    padding: 2,
    margin: `5px 0`,
    minWidth: `unset`,
  },
  addIcon: {
    margin: 0,
    padding: 0,
    width: `unset`,
  },
}));

/**
 * main
 */
const ProfileCard = ({ profileObj, idx }) => {
  // destructure
  const {
    alias,
    pii,
    active: {
      position,
      organization,
      organizationId,
    },
    images: { thumbnail },
    _id: profileId,
  } = profileObj;
  // init hooks
  const classes = useStyles();

  return (
    <Paper
      className={`ProfileCard ${classes.root} w100`}
      elevation={0}
    >
      <ListItem dense className={`${classes.listItem} w100`}>
        <MuiLink
          component={Link}
          to={`/${window.env.client.profile}/${alias}`}
          underline="none"
        >
          <ListItemAvatar>
            <Avatar alt="Profile Picture" src={thumbnail} style={{ width: 45, height: 45 }} />
          </ListItemAvatar>
        </MuiLink>
        <ListItemText
          primary={
            <MuiLink
              component={Link}
              to={`/${window.env.client.profile}/${alias}`}
              color="inherit"
              variant="subtitle2"
              className={classes.profile}
              underline="hover"
            >
              {getProfileName(pii)}
            </MuiLink>
          }
          secondary={
            <>
              <Typography
                className={classes.connection}
                component="p"
                variant="caption"
                color="textSecondary"
              >
                {position}
              </Typography>
              <Typography component="p" variant="caption" color="textSecondary">
                <MuiLink
                  component={Link}
                  to={`/${window.env.client.profile}/${organization}`}
                  color="textSecondary"
                  className={classes.organization}
                  underline="hover"
                >
                  {organization}
                </MuiLink>
              </Typography>
            </>
          }
        />
        <IconButton className={`${classes.addIconButton}`} onClick={() => {}}>
          <PersonAddIcon className={`${classes.addIcon}`} />
        </IconButton>
      </ListItem>
    </Paper>
  );
};

// export
export default ProfileCard;
