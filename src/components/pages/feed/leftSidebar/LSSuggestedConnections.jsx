// react
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Avatar,
  CardHeader,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Button,
  Link as MuiLink,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
// seed
import { usersRecConnections } from '../../../seed/queryUsersById';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100px',
    margin: `20px 0 0 0`,
    padding: '0px 16px',
    paddingBottom: '5px',
    '& .MuiTypography-displayBlock': {
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      display: 'inline',
    },
  },
  header: {
    paddingBottom: 0,
    paddingLeft: 5,
  },
  divider: {
    minHeight: `1px`,
    height: `1px`,
    minWidth: `100%`,
  },
  profile: {
    fontSize: theme.typography.fontSize / 1.01,
    fontWeight: 600,
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
  connection: {
    lineHeight: 1.1,
  },
  listItem: {
    padding: `0 10px`,
    margin: `2px 0`,
  },
  list: {
    width: `100%`,
  },
}));
const envProfilePath = 'profile';
const envCompanyPath = 'company';

// main
const LSSuggestedConnections = () => {
  // init hooks
  const classes = useStyles();
  // state
  const [recommendedConnectionsArr, setRecommendedConnectionsArr] = useState([]);
  // build
  const buildProfileCard = (profileObj, idx, profile) => {
    console.log(profileObj.active.position)
    const {
      pii: { firstName, lastName },
      active: { position, organization, organizationSlug },
      images: {
        profile: { thumbnail },
      },
      alias,
    } = profileObj;
    return (
      <>
        {idx !== 0 && <Divider className={classes.divider} component="div" />}
        <Paper elevation={0}>
          <ListItem dense className={`${classes.listItem} w100`}>
            <MuiLink component={Link} to={`/${envProfilePath}/${alias}`}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={thumbnail} style={{ width: 45, height: 45 }} />
              </ListItemAvatar>
            </MuiLink>
            <ListItemText
              primary={
                <MuiLink
                  component={Link}
                  to={`/${envProfilePath}/${alias}`}
                  color="inherit"
                  variant="subtitle2"
                  className={classes.profile}
                >
                  {`${firstName} ${lastName}`}
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
                      to={`/${envCompanyPath}/${organizationSlug}`}
                      color="textSecondary"
                      className={classes.connection}
                    >
                      {organization}
                    </MuiLink>
                  </Typography>
                </>
              }
            />
            <Button className={`${classes.addIconButton}`}>
              <PersonAddIcon
                className={`${classes.addIcon}`}
                onClick={() => {
                  alert('Adding Connection');
                }}
              />
            </Button>
          </ListItem>
        </Paper>
      </>
    );
  };
  // effects
  useEffect(() => {
    // fetch recommended profiles
    const payload = usersRecConnections;
    setRecommendedConnectionsArr(payload);
  }, []);

  return (
    <Paper elevation={0} className={`${classes.root} LSSuggestedConnections w100 flexcol`}>
      <CardHeader
        className={`w100 ${classes.header}`}
        title={
          <Typography variant="h6" component="h1" color="textPrimary">
            Suggested Connections
          </Typography>
        }
      />
      <Divider className={classes.divider} variant="middle" component="div" />
      <List className={classes.list}>
        {Object.entries(recommendedConnectionsArr).map((profileEntryArr, idx) => {
          const [profile, profileObj] = profileEntryArr;
          return buildProfileCard(profileObj, idx, profile);
        })}
      </List>
    </Paper>
  );
};

// export
export default LSSuggestedConnections;
