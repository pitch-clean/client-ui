// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  CardHeader,
  Avatar,
  Typography,
  IconButton,
  Link as MuiLink,
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { getProfileNameFromPii } from '../../utils/stateAccess';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `10px`,
    justifyContent: 'start',
    textAlign: `start`,
  },
  postHeaderContent: {
    marginTop: `22px`,
  },
  avatar: {
    backgroundColor: 'lightblue',
    width: theme.spacing(9),
    height: theme.spacing(9),
    margin: 0,
    marginRight: `-7px`,
  },
  subtitle: {
    display: 'block',
    marginTop: `-3px`,
  },
}));

/**
 * main
 * view component
 */
const PostHeader = ({ postObj, view }) => {
  // init hooks
  const classes = useStyles();
  // destructuring
  const {
    profile: {
      pii,
      alias,
      active,
      images: {
        profile: {
          thumbnail,
        },
      },
    },
  } = postObj;
  let subtitle;
  if (active) {
    subtitle = `${active.organization.pii.name}`;
  } else {
    subtitle = `${pii.address.city}, ${pii.address.stateProvince}`;
  }

  return (
    <CardHeader
      className={`PostHeader ${classes.root} w100`}
      classes={{
        content: classes.cardHeaderContent,
      }}
      avatar={
        <Link to={`/profile/${alias}`}>
          <Avatar aria-label="profile pic" src={thumbnail} className={classes.avatar} />
        </Link>
      }
      action={
        <IconButton aria-label="settings">
          <MoreHorizIcon />
        </IconButton>
      }
      title={
        <MuiLink
          component={Link}
          to={`/profile/${alias}`}
          color="inherit"
          variant="subtitle2"
        >
          {getProfileNameFromPii(pii)}
        </MuiLink>
      }
      subheader={
        <Typography
          className={classes.subtitle}
          variant="caption"
          color="textSecondary"
        >
          {subtitle}
        </Typography>
      }
    />
  );
};

// export
export default PostHeader;