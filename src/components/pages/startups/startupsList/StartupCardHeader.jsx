// react
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemText,
  Button,
  Link as MuiLink,
} from '@material-ui/core';
// import { updateStartupLikes, updateStartupReposts } from '../../../../redux/actions/ViewActions';
// import { Put } from '../../../../utils/requests';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: 'space-between',
    maxWidth: `100%`,
    '& *': {
      whiteSpace: `nowrap`,
      overflowX: `hidden`,
      textOverflow: `ellipsis`,
    },
  },
  cardHeader: {
    fontSize: '1.2rem',
  },
  fundingRound: {
    cursor: 'default',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
    '& *:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
}));
// fxns

/**
 * main
 */
const StartupCardHeader = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  // const dispatch = useDispatch();
  // state
  const activeProfile = useSelector(s => s.auth.activeProfile);
  // const astartp = useSelector(s => s.view.startup.startupsArr[idx]);
  const address = useSelector(s => s.view.startup.startupsArr[idx].location.address);
  const startupId = useSelector(s => s.view.startup.startupsArr[idx]._id);
  const title = useSelector(s => s.view.startup.startupsArr[idx].title);
  const fundingRounds = useSelector(s => s.view.startup.startupsArr[idx].fundingRounds);
  // destructuring
  const latestFundingRound = fundingRounds[fundingRounds.length - 1].round;
  const addressStr = `${address.city}, ${address.provinceState}`;

  return (
    <ListItem className={`StartupCardHeader ${classes.root} flexrow`}>
      <ListItemText
        primary={
          <MuiLink
            color="textPrimary"
            variant="subtitle1"
            className={`${classes.cardHeader} nowrap`}
            component={Link}
            to={`/${window.env.client.startup}/${startupId}`}
          >
            {title}
          </MuiLink>
        }
        secondary={addressStr}
      />
      <Button className={`${classes.fundingRound}`} disableElevation variant="contained">{latestFundingRound}</Button>
    </ListItem>
  );
};

// export
export default StartupCardHeader;
