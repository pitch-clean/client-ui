// react
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Card,
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
// constants
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100px',
    border: `1px solid black`,
    margin: `20px 0 0 0`,
  },
  card: {
    justifyContent: 'start',
    alignItems: 'start',
    padding: `0 10px`,
    paddingTop: `10px`,
    minHeight: `100px`,
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
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  body: {
    padding: `0 5px`,
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
  header: {
    paddingBottom: 0,
  },
  connection: {
    lineHeight: 1.1,
  },
  listItem: {
    padding: `0 10px`,
    margin: 0,
  },
}));
const envProfilePath = 'profile';
const envCompanyPath = 'company';
// seed
const recommendedConnections = [
  {
    profileId: 0,
    alias: 'harrisgreg49920',
    firstName: `Greg`,
    lastName: `Harris`,
    position: 'Senior Vice President',
    currentEmployer: 'Brooklane Renewables',
    organizationSlug: 'brooklane-renewables',
    city: 'New York',
    stateProvince: 'NY',
  },
  {
    profileId: 1,
    alias: 'sdaly-234',
    firstName: `Sarah`,
    lastName: `Daly`,
    position: 'Managing Director',
    currentEmployer: 'Vertex Capital',
    organizationSlug: 'vertex-capital',
    city: 'Washington',
    stateProvince: 'DC',
  },
  {
    profileId: 2,
    alias: 'petetaylor393',
    firstName: `Pete`,
    lastName: `Taylor`,
    position: 'Associate',
    currentEmployer: 'Atrium Solar LLC',
    organizationSlug: 'atrium-solar-llc',
    city: 'Nashville',
    stateProvince: 'TN',
  },
  {
    profileId: 3,
    alias: 'sashacarlton2',
    firstName: `Sasha`,
    lastName: `Carlton`,
    position: 'Senior Analyst',
    currentEmployer: 'Sunwind Asset Management',
    organizationSlug: 'sunwind-asset-management',
    city: 'Salt Lake City',
    stateProvince: 'UT',
  },
  {
    profileId: 4,
    alias: 'laurencunningham',
    firstName: `Lauren`,
    lastName: `Cunningham`,
    position: 'Partner and COO',
    currentEmployer: 'Solstice Capital',
    organizationSlug: 'solstice-capital',
    city: 'Seattle',
    stateProvince: 'WA',
  },
];

// main
const LSSuggestedConnections = () => {
  // init hooks
  const classes = useStyles();
  // state
  const [recommendedConnectionsArr, setRecommendedConnectionsArr] = useState([]);
  // build
  const buildProfileCard = (profileObj, idx) => {
    const {
      _id,
      firstName,
      lastName,
      position,
      currentEmployer,
      image,
      alias,
      organizationSlug,
    } = profileObj;
    return (
      <React.Fragment key={`inv-${_id}`}>
        {idx !== 0 && <Divider className={classes.divider} component="div" />}
        <ListItem dense className={`${classes.listItem} w100`}>
          <ListItemAvatar>
            <Avatar alt="Profile Picture" src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <MuiLink
                component={Link}
                to={`/${envProfilePath}/${alias}`}
                color="inherit"
                variant="inherit"
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
                    {currentEmployer}
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
      </React.Fragment>
    );
  };
  const buildSCProfileList = profilesArr => {
    return (
      <Card className={`${classes.card} w100`}>
        <List>
          {profilesArr.map((profileObj, idx) => {
            return buildProfileCard(profileObj, idx);
          })}
        </List>
      </Card>
    );
  };
  // effects
  useEffect(() => {
    // fetch recommended profiles
    const payload = recommendedConnections;
    setRecommendedConnectionsArr(payload);
  }, []);
  return (
    <Paper className={`${classes.root} LSProfile w100 flexcol`} outlined elevation={3}>
      <CardHeader
        className={`w100 ${classes.header}`}
        title={
          <Typography variant="h6" component="h1" color="textPrimary">
            Suggested Connections
          </Typography>
        }
      />
      <Divider className={classes.divider} variant="middle" component="div" />
      {buildSCProfileList(recommendedConnectionsArr)}
    </Paper>
  );
};

// export
export default LSSuggestedConnections;
