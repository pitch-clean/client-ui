// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, ListItem, ListItemText, Typography } from '@material-ui/core';
import { calcOfferSize, formatPctStr } from '../../utils/printFxns';
// constants
const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    backgroundColor: '#262826',
    alignItems: 'center',
  },
  root: {
    justify: 'space-between',
    padding: 0,
    margin: 0,
    width: '100%',
    maxWidth: '1300px',
    borderRadius: '0',
    '& *': {
      color: 'whitesmoke',
    },
  },
  summary: {
    padding: 0,
    // paddingLeft: 20,
    margin: 0,
    '& .MuiListItem-gutters': {
      padding: '8px 0',
      paddingLeft: 15,
    },
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
    margin: `0 10px`,
  },
  smallGroup: {
    justifyContent: 'center',
    width: '70%',
    marginRight: '20px',
  },
}));
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
    <div className={`${classes.container} flexcol`}>
      <div className={`${classes.root} flexrow Portfolio`}>
        <Grid className={classes.summary} container>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  variant="h5"
                  color="textPrimary"
                  style={{ letterSpacing: 1.3, fontSize: 30, fontWeight: 600 }}
                >
                  Account Summary
                </Typography>
              }
              secondary={
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  style={{ letterSpacing: 1.3, fontSize: 18, fontWeight: 300 }}
                >
                  {`Total Value: ${totalProfileValueStr}`}
                </Typography>
              }
            />
          </ListItem>
        </Grid>
        <Grid container direction="row" className={classes.smallGroup}>
          <Grid item xs={3} className={classes.small}>
            <ListItemText
              className={classes.small}
              primary={
                <Typography align="center" variant="h5" color="textPrimary">
                  {outstandingPrincipal}
                </Typography>
              }
              secondary={
                <Typography align="center" variant="caption" color="textSecondary">
                  Principal
                </Typography>
              }
            />
          </Grid>
          <Divider orientation="vertical" />
          <Grid item xs={3} className={classes.small}>
            <ListItemText
              className={classes.small}
              primary={
                <Typography align="center" variant="h5" color="textPrimary">
                  {annualInterestStr}
                </Typography>
              }
              secondary={
                <Typography align="center" variant="caption" color="textSecondary">
                  Annual Interest
                </Typography>
              }
            />
          </Grid>
          <Divider orientation="vertical" />
          <Grid item xs={3} className={classes.small}>
            <ListItemText
              className={classes.small}
              primary={
                <Typography align="center" variant="h5" color="textPrimary">
                  {walletBalance}
                </Typography>
              }
              secondary={
                <Typography align="center" variant="caption" color="textSecondary">
                  Wallet Balance
                </Typography>
              }
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

// export
export default Portfolio;
