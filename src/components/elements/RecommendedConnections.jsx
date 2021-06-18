// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  CardHeader,
  Typography,
  List,
  Divider,
} from '@material-ui/core';
// components
import ProfileCard from '../elements/ProfileCard';
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
  list: {
    width: `100%`,
  },
}));

/**
 * profile
 */
const RecommendedConnections = () => {
  // init hooks
  const classes = useStyles();
  // state
  const recommendedConnectionsArr = useSelector(s => s.view.recommendedConnections) || [];
  // build
  const buildRPArr = recommendedConnectionsArr.map((profileObj, idx) => {
    return (
      <>
        {idx !== 0 && <Divider className={classes.divider} component="div" />}
        <ProfileCard profileObj={profileObj} idx={idx} />
      </>
    );
  });

  return (
    <Paper
      elevation={0}
      className={`RecommendedConnections ${classes.root} w100 flexcol`}
    >
      <CardHeader
        className={`${classes.header} w100`}
        title={
          <Typography variant="h6" component="h1" color="textPrimary">
            Suggested Connections
          </Typography>
        }
      />
      <Divider className={classes.divider} variant="middle" component="div" />
      <List className={classes.list}>
        {buildRPArr}
      </List>
    </Paper>
  );
};

// export
export default RecommendedConnections;
