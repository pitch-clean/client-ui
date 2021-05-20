// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  CardHeader,
  Avatar,
  Link as MuiLink,
  Typography,
} from '@material-ui/core';
// components
// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: `0`,
    justifyContent: 'start',
    textAlign: `start`,
  },
  cardHeaderContent: {},
  avatar: {
    height: `50px`,
    width: `50px`,
  },
  title: {
    marginTop: `-15px`,
    fontWeight: 600,
    fontSize: '15px',
  },
}));

/**
 * main
 */
const CardHeaderProfile = ({ type, thumbnail, alias, title }) => {
  // init hooks
  const classes = useStyles();
  let avatarElem;
  let titleElem;
  if (type === 'likes') {
    avatarElem = (
      <Link to={`/profile/${alias}`}>
        <Avatar aria-label="profile pic" src={thumbnail} className={classes.avatar} />
      </Link>
    );
    titleElem = (
      <Typography
        color="inherit"
        variant="subtitle2"
        className={`${classes.title}`}
      >
        {alias ? (
          <MuiLink
            component={Link}
            to={`/profile/${alias}`}
            color="inherit"
            variant="subtitle2"
          >
            {title}
          </MuiLink>
        ) : title}
      </Typography>
    );
  } else if (type === 'comments') {
    avatarElem = (
      <Link to={`/profile/${alias}`}>
        <Avatar aria-label="profile pic" src={thumbnail} className={classes.avatar} />
      </Link>
    );
    titleElem = (
      <Typography
        color="inherit"
        variant="subtitle2"
        className={`${classes.title}`}
      >
        {alias ? (
          <MuiLink
            component={Link}
            to={`/profile/${alias}`}
            color="inherit"
            variant="subtitle2"
          >
            {title}
          </MuiLink>
        ) : title}
      </Typography>
    );
  }

  return (
    <CardHeader
      className={`CardHeaderProfile ${classes.root} w100`}
      classes={{
        content: classes.cardHeaderContent,
      }}
      avatar={ alias && avatarElem }
      title={ title && titleElem }
    />);
};

// export
export default CardHeaderProfile;
