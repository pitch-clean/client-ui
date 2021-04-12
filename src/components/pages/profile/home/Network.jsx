// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { updateProfileTab } from '../../../../redux/actions/ViewActions';
// constants
const useStyles = makeStyles(theme => ({
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  inline: {
    display: 'inline',
  },
}));
// seed
const arr = [
  {
    _id: 0,
    firstName: `Jamie`,
    lastName: `Harris`,
    position: 'Senior Vice President',
    currentEmployer: 'Brooklane Renewables',
    city: 'New York',
    stateProvince: 'NY',
  },
  {
    _id: 1,
    firstName: `Tom`,
    lastName: `Daly`,
    position: 'Managing Director',
    currentEmployer: 'Vertex Capital',
    city: 'Washington',
    stateProvince: 'DC',
  },
  {
    _id: 2,
    firstName: `Maya`,
    lastName: `Taylor`,
    position: 'Associate',
    currentEmployer: 'Atrium Solar LLC',
    city: 'Nashville',
    stateProvince: 'TN',
  },
  {
    _id: 3,
    firstName: `Ben`,
    lastName: `Carlton`,
    position: 'Senior Analyst',
    currentEmployer: 'Sunwind Asset Management',
    city: 'Salt Lake City',
    stateProvince: 'UT',
  },
  {
    _id: 4,
    firstName: `Jennifer`,
    lastName: `Cunningham`,
    position: 'Partner and COO',
    currentEmployer: 'Solstice Capital',
    city: 'Seattle',
    stateProvince: 'WA',
  },
];

// main
const Network = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  const match = useRouteMatch();
  console.log('Network match', match);
  // state
  // const activeProfile = useSelector(s => s.auth.activeProfile.alias);

  // effects
  useEffect(() => {
    dispatch(updateProfileTab('network'));
  }, []);
  const following = 98;
  const connections = 839;

  return (
    <div className="Network w100">
      <>
        <CssBaseline />
        <Paper square className={classes.paper}>
          <Grid container direction="row" justify="flex-start" alignItems="center">
            <Chip
              avatar={<Avatar alt="test" src="" />}
              label={`${following} following`}
              variant="outlined"
            />
            <Chip
              avatar={<Avatar alt="test" src="" />}
              label={`${connections} connections`}
              variant="outlined"
            />
          </Grid>
          <List className={classes.list}>
            {arr.map(obj => {
              const {
                _id,
                firstName,
                lastName,
                position,
                currentEmployer,
                city,
                stateProvince,
                image,
              } = obj;
              const primary = `${firstName} ${lastName}`;
              const secondary = `${position} at ${currentEmployer}`;
              const location = `${city}, ${stateProvince}`;
              return (
                <React.Fragment key={_id}>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={image} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={primary}
                      secondary={
                        <>
                          <Typography component="p" variant="subtitle2" color="textPrimary">
                            {secondary}
                          </Typography>
                          <Typography component="p" variant="caption" color="textSecondary">
                            {location}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                </React.Fragment>
              );
            })}
          </List>
        </Paper>
      </>
    </div>
  );
};

// export
export default Network;
