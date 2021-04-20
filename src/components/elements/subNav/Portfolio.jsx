// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, Paper, ListItem, ListItemText, Typography } from '@material-ui/core';
import { calcOfferSize, formatPctStr } from '../../utils/printFxns';

// constants
const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    backgroundColor: '#333533',
    borderRadius: '0',
    '& *': {
      color: 'whitesmoke',
    },
  },
  summary: {
    padding: 0,
    margin: 0,
    '& .MuiListItem-gutters': {
      padding: '8px 30px',
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
  },
}));

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
const interestAccrued = 0.097;
const principleOutstanding = 70000;
const balanceOfWallet = 32000;

// main
const Portfolio = () => {
  // init hooks
  const classes = useStyles();
  // state
  const investments = useSelector(s => s.auth.activeProfile.investments);
  const totalProfileValueStr = calcTotalProfileValue(investments);
  const outstandingPrincipal = calcOfferSize(principleOutstanding);
  const annualInterestStr = formatPctStr(interestAccrued);
  const walletBalance = calcOfferSize(balanceOfWallet);
  return (
    <Grid
      className={`${classes.root} Portfolio`}
      direction="row"
      justify="space-between"
      alignItems="center"
      container
      spacing={1}
    >
      <Grid className={classes.summary} item xs={7}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <Typography component="div" variant="h5" color="textPrimary">
                Account Summary
              </Typography>
            }
            secondary={
              <Typography component="div" variant="subtitle2" color="textSecondary">
                {`Total Value: ${totalProfileValueStr}`}
              </Typography>
            }
          />
        </ListItem>
      </Grid>
      <Grid item container="row" xs={4}>
        <Grid item xs={3} className={classes.small}>
          <ListItemText
            className={classes.small}
            primary={
              <Typography component="div" variant="h5" color="textPrimary">
                {outstandingPrincipal}
              </Typography>
            }
            secondary={
              <Typography component="div" variant="caption" color="textSecondary">
                Outstanding Principal
              </Typography>
            }
          />
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={3} className={classes.small}>
          <ListItemText
            className={classes.small}
            primary={
              <Typography component="div" variant="h5" color="textPrimary">
                {annualInterestStr}
              </Typography>
            }
            secondary={
              <Typography component="div" variant="caption" color="textSecondary">
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
              <Typography component="div" variant="h5" color="textPrimary">
                {walletBalance}
              </Typography>
            }
            secondary={
              <Typography component="div" variant="caption" color="textSecondary">
                Wallet Balance
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

// export
export default Portfolio;
