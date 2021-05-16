// react
import React, { useRef, useEffect } from 'react';
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
// constants
const useStyles = makeStyles(theme => ({
  root: {
    width: `100vw`,
    height: `100vh`,
    position: `fixed`,
    top: 0,
    left: 0,
    zIndex: 1,
  },
  background: {
    backgroundColor: '#80808075',
    width: `100vw`,
    height: `100vh`,
    position: `fixed`,
    top: 0,
    left: 0,
    zIndex: 2,
  },
  container: {
    width: `20%`,
    zIndex: 3,
    borderRadius: '5px',
    justifyContent: `start`,
  },
  header: {
    fontSize: `1.5rem`,
    borderBottom: '1px solid black',
    width: `100%`,
    padding: `5px 20px`,
    marginBottom: '5px',
  },
  list: {
    backgroundColor: 'white',
    overflow: 'scroll',
    width: `100%`,
    padding: `0px 15px`,
    borderRadius: '5px',
    maxHeight: 300,
    flex: 1,
  },
  cardHeader: {
    padding: `10px`,
    justifyContent: 'start',
    textAlign: `start`,
  },
}));

/**
 * main
 */
const ShowProfilesThatLikedPost = ({ setIsPopup, likesArr }) => {
  // init hooks
  const classes = useStyles();
  const ref = useRef();
  // build
  const profileCard = profile => {
    const {
      alias,
      images: {
        profile: {
          thumbnail,
        }
      },
      pii: {
        firstName,
        lastName,
        name,
      },
    } = profile;
    const title = name ? name : `${firstName} ${lastName}`;
    return (
      <CardHeader
        className={classes.cardHeader}
        classes={{
          content: classes.cardHeaderContent,
        }}
        avatar={
          <Link to={`/profile/${alias}`}>
            <Avatar aria-label="profile pic" src={thumbnail} className={classes.avatar} />
          </Link>
        }
        title={
          <MuiLink
            component={Link}
            to={`/profile/${alias}`}
            color="inherit"
            variant="subtitle2"
          >
            {title}
          </MuiLink>
        }
      />
    );
  };
  const profileCardList = likesArr.map(profile => profileCard(profile));
  // effect
  useEffect(() => {
    ref.current.focus();
  }, []);

  return  (
    <div className={`${classes.root} flexcol`} onKeyDown={e => e.key === 'Escape' && setIsPopup(false)} tabIndex="1" ref={ref}>
      <div className={`ShowProfilesThatLikedPost background ${classes.background}`} onClick={() => setIsPopup(false)}></div>
      <Paper className={`likes ${classes.container} flexcol`}>
        <div className={`header ${classes.header}`}>Likes</div>
        <div className={`list ${classes.list} hide-scrollbar`}>
          {profileCardList.length === 0 ? (
            <CardHeader
              className={classes.cardHeader}
              title={
                <Typography
                  color="inherit"
                  variant="subtitle2"
                >
                  No Likes Yet
                </Typography>
              }
            />
          ) : profileCardList}
        </div>
      </Paper>
    </div>
  );
};

// export
export default ShowProfilesThatLikedPost;
