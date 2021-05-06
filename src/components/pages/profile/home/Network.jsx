// react
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Typography,
  // CssBaseline,
} from '@material-ui/core';
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

// main
const Network = () => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const connections = useSelector(s => s.view.profile.viewProfile.connections);
  console.log('conns', connections)
  // effects
  useEffect(() => {
    dispatch(updateProfileTab('network'));
  }, []);
  const following = 98;
  const connectionCt = connections.length;

  return (
    <div className="Network w100">
      <>
        {/* <CssBaseline /> */}
        <Paper square className={classes.paper}>
          <Grid container direction="row" justify="flex-start" alignItems="center">
            <Chip
              avatar={<Avatar alt="test" src="" />}
              label={`${following} following`}
              variant="outlined"
            />
            <Chip
              avatar={<Avatar alt="test" src="" />}
              label={`${connectionCt} connections`}
              variant="outlined"
            />
          </Grid>
          <List className={classes.list}>
            {connections.map(obj => {
              const {
                _id,
                pii: { firstName, lastName },
                active: { position, organization, organizationSlug },
                city,
                stateProvince,
                image,
              } = obj;
              const primary = `${firstName} ${lastName}`;
              const secondary = `${position} at ${organization}`;
              const location = `${city}, ${stateProvince}`;
              return (
                <React.Fragment key={_id}>
                  <ListItem>
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
