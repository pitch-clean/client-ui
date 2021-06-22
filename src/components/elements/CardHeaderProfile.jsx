// react
import React from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  CardHeader,
  Avatar,
  Paper,
  Link as MuiLink,
  Typography,
} from '@material-ui/core';
// components
// constants
const useStyles = makeStyles(theme => ({
  container: {
    margin: '2px 0'
  },
  root: {
    padding: `0`,
    justifyContent: 'start',
    textAlign: `start`,
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  cardHeaderContent: {},
  avatar: {
    height: `60px`,
    width: `60px`,
  },
  title: {
    marginTop: `-5px`,
    fontSize: '15px',
    '& *': {
      fontWeight: 600,
    },
  },
  subheader: {
    fontSize: '.8rem',
  },
}));

/**
 * main
 */
const CardHeaderProfile = ({ type, thumbnail, alias, title, subheader }) => {
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
    <Paper elevation={1} className={classes.container}>
      <CardHeader
        className={`CardHeaderProfile ${classes.root} w100`}
        classes={{
          content: classes.cardHeaderContent,
        }}
        avatar={ alias && avatarElem }
        title={ title && titleElem }
        subheader={subheader && <Typography color="textSecondary" className={classes.subheader}>{subheader}</Typography>}
      />
    </Paper>
  );
};

// export
export default CardHeaderProfile;
