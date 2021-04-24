// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, ListItem, ListItemText, Typography } from '@material-ui/core';
import { calcOfferSize, formatPctStr } from '../../utils/printFxns';
// components
import PieChart from './PieChart';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    height: `100%`,
    width: `100%`,
  },
  left: {
    position: 'relative',
    padding: 0,
    margin: 0,
    // height: '100%',
    // minHeight: '100%',
    borderRadius: '0',
    '& *': {
      color: 'whitesmoke',
    },
  },
  summary: {
    width: `80%`,
    minWidth: `80%`,
    padding: 0,
    margin: 0,
    '& .MuiListItem-gutters': {
      padding: '8px 20px',
    },
  },
  group: {
    padding: `8px 12px`,
    width: `80%`,
    maxWidth: `80%`,
    flexFlow: 'row',
  },
  small: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    minHeight: '100%',
    '& .MuiListItemText-multiline': {
      marginTop: 0,
      marginBottom: 0,
    },
    padding: `10px 15px`,
  },
  dataVal: {
    fontSize: '2.2rem',
    alignSelf: 'start',
  },
  dataLabel: {
    fontSize: '1.2rem',
    alignSelf: 'start',
    // width: 0,
  },
}));
const envPortfolioPath = 'portfolio';
// fxns
const printDollarAmt = num => {
  const p = num.toFixed(2).split('.');
  return [
    '$',
    p[0]
      .split('')
      .reverse()
      .reduce((_acc, _num, i) => {
        return _num + (i && !(i % 3) ? ',' : '') + _acc;
      }, '.'),
    p[1],
  ].join('');
};
const calcTotalProfileValue = investmentsArr => {
  let sum = 0;
  for (let idx = 0; idx < investmentsArr.length; idx += 1) {
    const { principalInvested, distributions } = investmentsArr[idx];
    let distributionSum = 0;
    for (let j = 0; j < distributions.length; j += 1) {
      distributionSum += distributions[j].amt;
    }
    sum += principalInvested + distributionSum;
  }
  const dollarAmtStr = printDollarAmt(sum);
  return dollarAmtStr;
};
// seed
const interestAccrued = 0.097;
const principleOutstanding = 70000;
const balanceOfWallet = 32000;

/**
 * main
 * banner (already created)
 *    IN PROGRESS portfolio (already created) - but has pie chart and diff styling
 */
const Portfolio = () => {
  // init hooks
  const classes = useStyles();
  const investments = useSelector(s => s.auth.activeProfile.investments);
  const totalProfileValueStr = calcTotalProfileValue(investments);
  const outstandingPrincipal = calcOfferSize(principleOutstanding);
  const annualInterestStr = formatPctStr(interestAccrued);
  const walletBalance = calcOfferSize(balanceOfWallet);

  return (
    <Grid className={`${classes.root} Portfolio`} direction="row" justify="space-between" container>
      <Grid
        className={`${classes.left} f1`}
        direction="column"
        justify="space-between"
        alignItems="center"
        container
        spacing={3}
      >
        <Grid className={classes.summary} item>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  component="div"
                  variant="h1"
                  color="textPrimary"
                  style={{ fontSize: '40px', letterSpacing: 1 }}
                >
                  Account Summary
                </Typography>
              }
              secondary={
                <Typography
                  component="div"
                  variant="h5"
                  color="textSecondary"
                  style={{ padding: `7px 0` }}
                >
                  {`Total Value: ${totalProfileValueStr}`}
                </Typography>
              }
            />
          </ListItem>
        </Grid>
        <Grid container className={classes.group}>
          <Grid>
            <Grid item className={classes.small}>
              <ListItemText
                className={classes.small}
                primary={
                  <Typography color="textPrimary" className={classes.dataVal}>
                    {outstandingPrincipal}
                  </Typography>
                }
                secondary={
                  <Typography color="textSecondary" className={classes.dataLabel}>
                    Principal
                  </Typography>
                }
              />
            </Grid>
          </Grid>
          <Divider orientation="vertical" style={{backgroundColor: `#595959`}} />
          <Grid>
            <Grid item className={classes.small}>
              <ListItemText
                className={classes.small}
                primary={
                  <Typography color="textPrimary" className={classes.dataVal}>
                    {annualInterestStr}
                  </Typography>
                }
                secondary={
                  <Typography nowrap color="textSecondary" className={classes.dataLabel}>
                    Annual Interest
                  </Typography>
                }
              />
            </Grid>
          </Grid>
          <Divider orientation="vertical" style={{backgroundColor: `#595959`}} />
          <Grid>
            <Grid item className={classes.small}>
              <ListItemText
              nowrap
                className={classes.small}
                primary={
                  <Typography color="textPrimary" className={classes.dataVal}>
                    {walletBalance}
                  </Typography>
                }
                secondary={
                  <Typography nowrap color="textSecondary" className={classes.dataLabel}>
                    Wallet Balance
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <PieChart />
    </Grid>
  );
};

// export
export default Portfolio;
