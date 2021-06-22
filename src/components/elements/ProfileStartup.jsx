// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  CardContent,
  Typography,
  CardHeader,
  Paper,
  Avatar,
  IconButton,
  Link as MuiLink,
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// components
import PostInteractionContainer from './pic/PostInteractionContainer';
// constants
const useStyles = makeStyles(theme => ({
  cardRoot: {
    margin: `5px 0`,
    padding: `10px`,
    boxShadow: `
      0px 2px 1px -1px rgba(0,0,0,0.03),
      0px 1px 1px 0px rgba(0,0,0,0.02),
      0px 1px 3px 0px rgba(0,0,0,0.01)
    `,
  },
  cardHeader: {
    padding: `10px`,
    justifyContent: 'start',
    textAlign: `start`,
  },
  avatar: {
    backgroundColor: 'lightblue',
    width: theme.spacing(9),
    height: theme.spacing(9),
    margin: 0,
    marginRight: `-7px`,
  },
  cardHeaderContent: {
    marginTop: `22px`,
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardBody: {
    textAlign: 'start',
  },
  subtitle: {
    display: 'block',
    marginTop: `-3px`,
  },
  body: {
    textAlign: 'start',
  },
}));

/**
 * view component for a single post on the Profile feed
 * @param {int} postIdx
 * @returns
 */
const ProfileStartup = ({ idx: startupIdx }) => {
  // init hooks
  const classes = useStyles();
  // state
  const startupObj = useSelector(s => s.view.profile.likes.startups[startupIdx]);
  const startupId = useSelector(s => s.view.profile.likes.startups[startupIdx]._id);
  const thumbnail = useSelector(s => s.view.profile.likes.startups[startupIdx].images.thumbnail);
  const title = useSelector(s => s.view.profile.likes.startups[startupIdx].title);
  const city = useSelector(s => s.view.profile.likes.startups[startupIdx].location.address.city);
  const provinceState = useSelector(s => s.view.profile.likes.startups[startupIdx].location.address.provinceState);
  const subtitle = `${city}, ${provinceState}`;
  console.log('startupObj', startupObj)
  // const startupId = useSelector(s => s.view.profile.likes.startups[startupIdx]._id);
  // const postType = useSelector(s => s.view.profile.startups[startupIdx].postType);
  // const startupProfile = useSelector(s => s.view.profile.likes.startups[startupIdx].profile);
  // destructure
  // const startupProfileId = startupProfile._id;

  return startupObj ? (
    <Paper elevation={0} className={`ProfileStartup ${classes.cardRoot} w100`}>
      <CardHeader
        className={`StartupHeader ${classes.root} w100`}
        classes={{
          content: classes.cardHeaderContent,
        }}
        avatar={
          <Link to={`/startup/${startupId}`}>
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
            to={`/startup/${startupId}`}
            color="inherit"
            variant="subtitle2"
          >
            {title}
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
      <div className={`StartupHeader ${classes.root}`}></div>
      {/* <StartupContent postObj={postObj} /> */}
      <MuiLink
        component={Link}
        to={`/startup/${startupId}`}
        underline="none"
      >
        <CardContent className={`PostContent ${classes.content}`}>
          <Typography
            className={`${classes.body} flexcol`}
            variant="body2"
            color="textPrimary"
          >
            {/* {body} */}
            <div>
              {`${startupObj.slogan}`}
            </div>
            <div>
              {`Investors: ${startupObj.investors.length}`}
            </div>
            <div>
              {`Partners: ${startupObj.partners.length}`}
            </div>
            <div>
              {`Sector: ${startupObj.sector}`}
            </div>
          </Typography>
        </CardContent>
      </MuiLink>
      <PostInteractionContainer startupObj={startupObj} idx={startupIdx} isProfile />
    </Paper>
  ) : (
    <div />
  );
};

// export
export default ProfileStartup;
