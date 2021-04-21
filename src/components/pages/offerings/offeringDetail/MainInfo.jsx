// react
import React from 'react';
import {Link} from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Divider,
  ListItem,
  ListItemText,
  Typography,
  Link as MuiLink,
} from '@material-ui/core';
import { calculateTermLength, formatPctStr, calcOfferSize } from '../../../utils/printFxns';
// components
import InvestmentProgress from './InvestmentProgress';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    width: '100%',
    minHeight: 200,
    height: 200,
    backgroundColor: '#333533',
    borderRadius: '0',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& *': {
      // color: 'whitesmoke',
    },
  },
  left: {
    height: `100%`,
    padding: `30px 50px`,
    paddingLeft: '70px',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    '& *': {
      color: 'whitesmoke',
    },
  },
  leftBottom: {},
  bottomCard: {
    margin: 5,
    marginLeft: 0,
    marginRight: '30px',
    height: '100%',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // verticalAlign: 'center',
    // textAlign: 'start',
  },
  right: {
    height: `100%`,
  },
}));
// build fxns
const buildStatElem = (title, number) => {
  let printNumber = number;
  if (number === typeof 0.1 || number === typeof 10) {
    printNumber = formatPctStr(number);
  }
  return (
    <div
      className="statContainer flexcol"
      style={{
        alignItems: 'flex-start',
      }}
    >
      <div
        className="stat"
        style={{
          fontSize: '20px',
          fontWeight: 600,
        }}
      >
        {printNumber}
      </div>
      <div
        className="title"
        style={{
          fontSize: '12px',
          fontWeight: 300,
        }}
      >
        {title}
      </div>
    </div>
  );
};
const calculateProgressPercent = () => {
  const progressPercent = 10;
  return progressPercent;
};

// main
const MainInfo = ({ offeringObj }) => {
  // init hooks
  const classes = useStyles();
  const termLength = calculateTermLength(
    offeringObj.dtInvestmentTermEnd - offeringObj.dtInvestmentTermStart,
  );
  const { title, sponsorSlug, sponsor, financials, slug, images, content } = offeringObj;
  return (
    <Grid container className={`${classes.root} w100`}>
      <Grid container direction="column" className={classes.left} xs={7}>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item>
            <Typography variant="h5">{title}</Typography>
          </Grid>
          <Grid item>
            <MuiLink
              component={Link}
              variant="subtitle1"
              color="textPrimary"
              className="offeringSponsor nowrap"
              to={`/organization/${sponsorSlug}`}
            >
              {sponsor}
            </MuiLink>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="flex-start" className={classes.leftBottom}>
          <Grid item className={classes.bottomCard}>{buildStatElem('Annual Interest', financials.interestAccrued)}</Grid>
          <Grid item className={classes.bottomCard}>{buildStatElem('Term', termLength)}</Grid>
          <Grid item className={classes.bottomCard}>{buildStatElem('Offering Size', calcOfferSize(financials.fundTarget))}</Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.right} xs={4}>
        <img className="h100" src={images.large} alt="" srcset="" height="100%" />
      </Grid>
    </Grid>
  );
};

// export
export default MainInfo;
