// react
import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
// components
import ITCell from './ITCell';
// constants
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'space-between',
    borderTop: '1px solid #262826',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
}));
const instrumentMapping = {
  debt: 'Debt',
  equity: 'Equity',
  cash: 'Cash',
};
const calcMonths = (di, df) => {
  let months = 0;
  const dc = new Date();
  months = (df.getFullYear() - di.getFullYear()) * 12;
  months -= di.getMonth();
  months += df.getMonth();
  return months <= 0 ? 0 : months;
};
const calculateInterestPerInvestment = (distributionArr, principalInvested, term, fundTarget) => {
  // calc avg principal - total paid / term len
  const fundShare = principalInvested / fundTarget;
  // get full term months
  const termMonthsTotal = calcMonths(new Date(term.dtStart), new Date(term.dtEnd));
  const termMonthsCompleted = calcMonths(new Date(term.dtStart), new Date());
  // calc avg principal / month
  const avgMonthlyPrincipal = Math.round(100 * (fundShare * fundTarget/termMonthsTotal)) / 100;
  const estPrincipalReceived = avgMonthlyPrincipal * termMonthsCompleted
  let sum = 0;
  for (let i = 0; i < distributionArr.length; i += 1) {
    sum += distributionArr[i].amt;
  }
  const interest = sum - estPrincipalReceived;
  const interestRate = interest / estPrincipalReceived
  // (Math.round(num * 100) / 100).toFixed(2)
  const roundedInterest = (Math.round(100000 * interestRate) / 1000).toFixed(2);
  return `${roundedInterest}%`;
};
function formatDollar(num) {
  let p = num.toFixed(2).split(".");
  return ["$", p[0].split("").reverse().reduce(function(acc, num, i) {
      return num + (i && !(i % 3) ? "," : "") + acc;
  }, "."), p[1]].join("");
}

/**
 * main
 */
const ITCol = ({ label, title, investments }) => {
  // init hooks
  const classes = useStyles();
  // build
  const invColArr = investments.map((inv, idx) => {
    const {
      offering: {
        term,
        sponsor,
        financials,
        ...other
      },
      principalInvested,
      distributions,
      ...elsee
    } = inv;
    let input;
    if (label === 'date') {
      input = new Date(term.dtStart).toLocaleDateString();
    }
    if (label === 'sponsor') {
      input = sponsor.name;
    }
    if (label === 'instrument') {
      input = instrumentMapping[financials.instrument];
    }
    if (label === 'interest') {
      input = calculateInterestPerInvestment(distributions, principalInvested, term, financials.fundTarget);
    }
    if (label === 'principal') {
      input = formatDollar(principalInvested);
    }
    return <ITCell input={input} isFirstCol={idx === 0} isLastCol={idx === (investments.length - 1)} />;
  });

  return (
    <div
      className={`ITCol ${classes.root} flexcol`}
    >
      <ITCell isHeader input={title} />
      {invColArr}
    </div>
  );
};

// export
export default ITCol;
