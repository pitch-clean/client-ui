// react
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  CardContent,
  Divider,
  Avatar,
  CardHeader,
  Typography,
  Link as MuiLink,
} from '@material-ui/core';
import { Settings } from '@material-ui/icons';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100px',
    padding: `0 10px`,
    paddingTop: `10px`,
    border: '1px solid #e9e9e9',
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'start',
    padding: `10px 5%`,
  },
  divider: {
    minHeight: `1px`,
    minWidth: `75%`,
    marginTop: `10px`,
    marginBottom: `10px`,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  body: {
    padding: `0 5px`,
  },
}));
const envProfilePath = 'profile';
// fxns
const getCtMsg = (arr, unitStr) => {
  return `${arr.length} ${unitStr}`;
};
const buildName = (fName, lName) => {
  return `${fName} ${lName}`;
};

// main
const LSProfile = () => {
  // init hooks
  const classes = useStyles();
  // state
  const pii = useSelector(s => s.auth.activeProfile.pii);
  const alias = useSelector(s => s.auth.activeProfile.alias);
  const images = useSelector(s => s.auth.activeProfile.images);
  const active = useSelector(s => s.auth.activeProfile.active);
  const connections = useSelector(s => s.auth.activeProfile.connections);
  const following = useSelector(s => s.auth.activeProfile.following);
  const {
    firstName,
    lastName,
    residence: { city, stateProvince },
  } = pii;
  const {
    profile: { thumbnail },
  } = images;

  return (
    <Paper className={`${classes.root} LSProfile w100`} elevation={0}>
      <CardHeader
        className={`headSection w100`}
        avatar={
          <Link to={`/${envProfilePath}/${alias}`}>
            <Avatar className={classes.large} variant="rounded" src={thumbnail} />
          </Link>
        }
        title={
          <MuiLink component={Link} to={`/${envProfilePath}/${alias}`} color="inherit" variant="h6">
            {buildName(firstName, lastName)}
          </MuiLink>
        }
        subheader={`${city}, ${stateProvince}`}
      />
      <Divider className={classes.divider} variant="middle" component="div" />
      <CardContent className={`${classes.container} infoSection w100`}>
        <Typography className={classes.title} variant="h5" component="h6">
          {active[0].employer}
        </Typography>
        <Typography variant="subtitle1" component="h" color="textSecondary">
          {active[0].title}
        </Typography>
        <Typography
          style={{ paddingTop: `10px` }}
          variant="caption"
          component="h"
          color="textSecondary"
        >
          {`${getCtMsg(connections, 'Connections')} | ${getCtMsg(following, 'Following')}`}
        </Typography>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            margin: `5px`,
          }}
        >
          <Settings color="action" />
        </div>
      </CardContent>
    </Paper>
  );
};

// export
export default LSProfile;
