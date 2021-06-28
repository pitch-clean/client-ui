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
    margin: '2px 0',
  },
  containerModal: {
    margin: 0,
    minWidth: 0,
    flex: '1 1',
  },
  rootBase: {
    padding: 0,
    justifyContent: 'start',
    textAlign: `start`,
    marginTop: 7,
    marginBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    textDecorationLine: 'none',
    '& .MuiCardHeader-avatar *': {
      textDecorationLine: 'none',
    }
  },
  rootModal: {
    padding: 5,
    '& > * > *': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    '& > *': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },
  cardHeaderContent: {},
  avatarBase: {},
  avatarLikes: {
    height: `50px`,
    width: `50px`,
  },
  avatarComments: {
    height: `50px`,
    width: `50px`,
  },
  avatarSidebar: {
    height: `60px`,
    width: `60px`,
  },
  avatarModal: {
    height: `30px`,
    width: `30px`,
  },
  titleBase: {
    fontSize: '15px',
    '& *': {
      fontWeight: 700,
    },
  },
  titleLikes: {
    marginTop: `-5px`,
  },
  titleComments: {
    marginTop: `-15px`,
  },
  titleModal: {
    marginTop: `0`,
  },
  subheader: {
    fontSize: '.8rem',
  },
}));

/**
 * main
 */
const CardHeaderProfile = ({ type, thumbnail, alias, title, subheader, elevation = 0 }) => {
  // init hooks
  const classes = useStyles();
  let containerStyle = classes.container;
  let rootStyle = classes.rootBase;
  let avatarStyle = classes.avatarBase;
  let titleStyle = classes.titleBase;
  if (type === 'likes') {
    avatarStyle = `${avatarStyle} ${classes.avatarLikes}`;
    titleStyle = `${titleStyle} ${classes.titleLikes}`;
  } else if (type === 'comments') {
    avatarStyle = `${avatarStyle} ${classes.avatarComments}`;
    titleStyle = `${titleStyle} ${classes.titleComments}`;
  } else if (type === 'sidebar') {
    avatarStyle = `${avatarStyle} ${classes.avatarSidebar}`;
    titleStyle = `${titleStyle} ${classes.titleLikes}`;
  } else if (type === 'modal') {
    avatarStyle = `${avatarStyle} ${classes.avatarModal}`;
    titleStyle = ` ${titleStyle} ${classes.titleModal}`;
    rootStyle = `${rootStyle} ${classes.rootModal}`;
    containerStyle = `${containerStyle} ${classes.containerModal}`;
  }

  let avatarElem = <Avatar alt={title} src={thumbnail} className={avatarStyle} />;
  let titleElem = (
    <Typography
      color="inherit"
      variant="subtitle2"
      className={`${titleStyle}`}
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
  if (alias) {
    avatarElem = (
      <Link to={`/profile/${alias}`}>{avatarElem}</Link>
    );
  }

  return (
    <Paper elevation={elevation} className={`${containerStyle} w100`}>
      <CardHeader
        className={`CardHeaderProfile ${rootStyle} w100`}
        classes={{
          content: classes.cardHeaderContent,
        }}
        avatar={ avatarElem }
        title={ title && titleElem }
        subheader={subheader && <Typography color="textSecondary" className={classes.subheader}>{subheader}</Typography>}
      />
    </Paper>
  );
};

// export
export default CardHeaderProfile;
