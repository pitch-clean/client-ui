// react
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// utils
import * as d3 from 'd3';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
// constants
const margin = { top: 30, right: 30, bottom: 70, left: 60 };
const height = 600 - margin.left - margin.right;
const useStyles = makeStyles(theme => ({
  root: {
    color: `black`,
    zIndex: 100,
    height: `100%`,
  },
}));
const d3Format = d3.format('.2s');
const customFormat = value => `$${d3Format(value)}`;
const formatDate = d3.timeFormat('%b %Y');
// fxns
const sumAllDistributionsByMonth = (invObj, distArr) => {
  for (let i = 0; i < distArr.length; i += 1) {
    const distObj = distArr[i];
    const dateStr = distObj.date;
    invObj[dateStr] = !invObj[dateStr] ? distObj.amt : distObj.amt + invObj[dateStr];
  }
  return invObj;
};
const buildInvestmentsArr = investmentsArr => {
  // financials
  const investmentsObj = {};
  for (let idx = 0; idx < investmentsArr.length; idx += 1) {
    const investmentObj = investmentsArr[idx];
    const { distributions } = investmentObj;
    sumAllDistributionsByMonth(investmentsObj, distributions);
  }
  const outputInvestmentsArr = [];
  const keyList = Object.keys(investmentsObj);
  const keyListSort = keyList.sort((a, b) => `${a.attr}`.localeCompare(b.attr));
  let cumSum = 0;
  for (let idx = 0; idx < keyListSort.length; idx += 1) {
    const date = keyListSort[idx];
    const amt = investmentsObj[date];
    cumSum += amt;
    outputInvestmentsArr.push({ date: formatDate(new Date(date)), amt: cumSum });
  }
  return outputInvestmentsArr;
};

// main
const BarChart = ({ widthProp }) => {
  // init hooks
  const classes = useStyles();
  // state
  const l1 = useSelector(s => s.view.main.l1);
  const investments = useSelector(s => s.auth.activeProfile.investments);
  // effects
  useEffect(() => {
    const data = buildInvestmentsArr(investments);
    if (d3.select('.BarChart > svg').empty()) {
      const svg = d3.select('.BarChart')
        .append('svg')
          .attr("width", widthProp * 0.75 + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append('g')
          .attr('transform', `translate(${  margin.left  },${  margin.top  })`);
      // x axis
      const x = d3.scaleBand()
        .range([0, widthProp * 0.75])
        .domain(data.map(function(d) { return d.date; }))
        .padding(0.2);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");
      // y axis
      const y = d3.scaleLinear()
        .domain([0, Math.max(...data.map(o => o.amt)) * 1.1])
        .range([height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y).tickFormat(customFormat));
      // add bars
      svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
          .attr("x", function(d) { return x(d.date); })
          .attr("y", function(d) { return y(d.amt); })
          .attr("width", x.bandwidth())
          .attr("height", function(d) { return height - y(d.amt); })
          .attr("fill", "#69b3a2")
          .attr("height", function(d) { return height - y(0); }) // always equal to 0
          .attr("y", function(d) { return y(0); });
      svg.selectAll("rect")
        .transition()
        .duration(800)
        .attr("y", function(d) { return y(d.amt); })
        .attr("height", function(d) { return height - y(d.amt); })
        .delay(function(d,i){return(i*100)});
    }
    return () => {
      l1 !== 'portfolio' && d3.select('.BarChart > svg').remove();
    };
  }, []);

  return <Paper elevation={1} className={`${classes.root} BarChart bar f1`} />;
};

// export
export default BarChart;
