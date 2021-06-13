// react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  GridListTile,
  ListSubheader,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Paper,
  Link as MuiLink,
} from '@material-ui/core';
import { activateFavorite } from '../../utils/eventHandlers';
import { calcOfferSize, calculateTermLength } from '../../utils/printFxns';
// style
// import './OfferingsList.css';
// constants
const filledStar = '\u2605';
const openStar = '\u2606';
const useStyles = makeStyles(theme => ({
  divider: {
    width: `100%`,
    margin: 1,
  },
  root: {
    backgroundColor: `#eee`,
    minWidth: `200px`,
    width: `350px`,
    maxWidth: `29%`,
    margin: `15px 10px`,
    alignSelf: 'flex-start',
    backgroundColor: 'whitesmoke',
    boxShadow: `
      0px 2px 1px -1px rgba(0,0,0,0.03),
      0px 1px 1px 0px rgba(0,0,0,0.02),
      0px 1px 3px 0px rgba(0,0,0,0.01)
    `,
    borderRadius: '5px',
  },
  subHeader: {
    textAlign: 'start',
    padding: `0 10px`,
    lineHeight: 2.24,
    color: 'whitesmoke',
    backgroundColor: '#262826',
    borderRadius: 0,
    fontSize: '0.9rem',
    borderRadius: '10px 10px 0 0 ',
  },
  cardHeader: {
    fontSize: '1.2rem',
  },
  company: {
    padding: 0,
    margin: 0,
    lineHeight: 1,
    fontSize: '0.875rem',
  },
  location: {
    padding: 0,
    margin: 0,
    lineHeight: 1,
    fontSize: '0.875rem',
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    maxWidth: `100%`,
    '& *': {
      whiteSpace: `nowrap`,
      overflowX: `hidden`,
      textOverflow: `ellipsis`,
    },
  },
  lowerListItem: {
    maxWidth: `100%`,
    display: 'flex',
    flexFlow: 'column',
  },
  row: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  imgLink: {
    gridArea: 'image',
    overflow: 'hidden',
    '& img': {
      maxHeight: `200px`,
      objectFit: `cover`,
      borderRadius: 0,
    },
  },
}));
const test = true;
// callback
const onClickFavorite = () => {};

// main
const OfferingCard = ({ idx }) => {
  // init hooks
  const classes = useStyles();
  // TODO: make this state reliant on the offering object
  const [isFavorited, setIsFavorited] = useState(false);
  const offeringObj = useSelector(s => s.offerings.offeringsArr[idx]);
  const {
    images: { card },
    financials,
    location: {
      address: { stateProvince, city },
    },
    sponsor,
    sponsorSlug,
    title,
  } = offeringObj;
  const termLength = calculateTermLength(
    offeringObj.dtInvestmentTermEnd - offeringObj.dtInvestmentTermStart,
  );
  const interestAccrued = Math.round(10000 * financials.interestAccrued) / 100;

  return (
    <Paper className={`OfferingCard ${classes.root}`} key={`asdfasdf--${idx}`} elevation={0}>
      <ListSubheader className={classes.subHeader}>
        {financials.otherClass}
      </ListSubheader>
      <Link className={`imgLink ${classes.imgLink}`} to={`/offering/${offeringObj.slug}`}>
        <img src={card} alt="Not found" width="100%" />
      </Link>
      <ListItem className={classes.listItem}>
        <ListItemText
          primary={
            <MuiLink
              color="textPrimary"
              variant="subtitle1"
              className={`${classes.cardHeader} nowrap`}
              component={Link}
              to={`/offering/${offeringObj.slug}`}
            >
              {title}
            </MuiLink>
          }
          secondary={
            <>
              <MuiLink
                className={`${classes.company} nowrap`}
                component={Link}
                variant="caption"
                color="textPrimary"
                to={`/organization/${sponsorSlug}`}
              >
                {sponsor}
              </MuiLink>
              <Typography
                className={classes.location}
                component="p"
                variant="caption"
                color="textSecondary"
              >
                {`${stateProvince}, ${city}`}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="middle" />
      <ListItem className={classes.lowerListItem}>
        <div className={`${classes.row} annualInterest item flexrow w100`}>
          <div>Expected Return: </div>
          <div style={{ fontWeight: 500 }}>{` ${interestAccrued}%`}</div>
        </div>
        <Divider variant="fullWidth" className={classes.divider} />
        <div className={`${classes.row} termLength item flexrow w100`}>
          <div>Net Present Value: </div>
          <div style={{ fontWeight: 500 }}>{` ${calcOfferSize(
            offeringObj.financials.fundTarget,
          )}`}</div>
        </div>
        <Divider variant="fullWidth" className={classes.divider} />
        <div className={`${classes.row} offeringSize item flexrow w100`}>
          <div>Offering Size: </div>
          <div style={{ fontWeight: 500 }}>{`${calcOfferSize(
            offeringObj.financials.fundTarget,
          )}`}</div>
        </div>
      </ListItem>
    </Paper>
  );
};

// export
export default OfferingCard;
