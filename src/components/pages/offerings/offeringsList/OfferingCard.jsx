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
  Link as MuiLink,
} from '@material-ui/core';
import { activateFavorite } from '../../../utils/eventHandlers';
import { calcOfferSize, calculateTermLength } from '../../../utils/printFxns';
// style
import './OfferingsList.css';
// constants
const filledStar = '\u2605';
const openStar = '\u2606';
const useStyles = makeStyles(theme => ({
  root: {
    // '& *': {},
  },
  gridItem: {
    backgroundColor: `#f8f0e4`,
    minWidth: `200px`,
    width: `300px`,
    maxWidth: `29%`,
    border: `1px solid beige`,
    margin: `20px 15px`,
  },
  gridImg: {
    maxHeight: `175px`,
    objectFit: `cover`,
    borderRadius: 0,
  },
  subHeader: {
    textAlign: 'start',
    padding: `0 10px`,
    lineHeight: 2.24,
    color: 'whitesmoke',
    backgroundColor: 'black',
    borderRadius: 0,
  },
  cardHeader: {},
  companyLink: {
    padding: 0,
    margin: 0,
    lineHeight: 1,
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
    fontSize: '12px',
    lineHeight: 1.5
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
      address: { provinceState, city },
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
    <GridListTile className={classes.gridItem} key={`asdfasdf--${idx}`}>
      <ListSubheader className={classes.subHeader} component="div">
        {financials.otherClass}
      </ListSubheader>
      <Link className="imgLink" to={`/offering/${offeringObj.slug}`}>
        <img className={classes.gridImg} src={card} alt="Not found" width="100%" />
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
                className={`${classes.companyLink} nowrap`}
                component={Link}
                variant="caption"
                color="textPrimary"
                to={`/organization/${sponsorSlug}`}
              >
                {sponsor}
              </MuiLink>
              <Typography
                className={classes.companyLink}
                component="p"
                variant="caption"
                color="textSecondary"
              >
                {`${provinceState}, ${city}`}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="middle" />
      <ListItem className={classes.lowerListItem}>
        <div className={`${classes.row} annualInterest item flexrow w100`} >
          <div>Annual Interest: </div>
          <div style={{ fontWeight: 500 }}>{` ${interestAccrued}%`}</div>
        </div>
        <Divider variant="fullWidth" />
        <div className={`${classes.row} termLength item flexrow w100`} >
          <div>Term length: </div>
          <div style={{ fontWeight: 500 }}>{` ${termLength}`}</div>
        </div>
        <Divider variant="middle" />
        <div className={`${classes.row} offeringSize item flexrow w100`} >
          <div>Offering Size: </div>
          <div style={{ fontWeight: 500 }}>{`${calcOfferSize(
            offeringObj.financials.fundTarget,
          )}`}</div>
        </div>
      </ListItem>
    </GridListTile>
  );
};

// export
export default OfferingCard;
