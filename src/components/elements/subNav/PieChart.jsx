// react
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// utils
import * as d3 from 'd3';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// constants
const height = 280;
const width = 375;
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    color: `white`,
    minWidth: width,
    width,
    height: height - 35,
    boxSizing: 'content-box',
    '& svg': {
      maxHeight: `100%`,
    },
  },
}));

const margin = 30;
const radius = Math.min(width, height) / 2 - margin;
const sumAllDistributionsByMonth = (monthObj, distArr) => {
  for (let i = 0; i < distArr.length; i += 1) {
    const distObj = distArr[i];
    const month = (new Date(distObj.date)).getMonth();
    monthObj[month] += distObj.amt;
  }
  return monthObj;
};
const sumAllDistributions = distArr => {
  let sum = 0;
  for (let i = 0; i < distArr.length; i += 1) {
    const distObj = distArr[i];
    sum += distObj.amt;
  }
  return sum;
};

// main
const DonutGraph = () => {
  // init hooks
  const classes = useStyles();
  // state
  const [svgElem, setSvgElem] = useState({});
  const l1 = useSelector(s => s.view.main.l1);
  const investments = useSelector(s => s.auth.activeProfile.investments);
  const buildInvestmentsObj = investmentsArr => {
    // financials
    const investmentsObj = {};
    for (let idx = 0; idx < investmentsArr.length; idx += 1) {
      const investmentObj = investmentsArr[idx];
      const {
        offering: { financials },
        distributions,
      } = investmentObj;
      const { instrument } = financials;
      investmentsObj[instrument] = !investmentsObj[instrument]
        ? sumAllDistributions(distributions)
        : investmentsObj[instrument] + sumAllDistributions(distributions);
    }
    return investmentsObj;
  };
  const data = buildInvestmentsObj(investments);
  // effects
  useEffect(() => {
    if (d3.select('.DonutGraph > svg').empty()) {
      const svg = d3.select('.DonutGraph')
        .append('svg')
          .attr('width', width)
          .attr('height', height)
          .style('margin-top', `-20px`)
        .append('g')
          .attr('transform', `translate(${width / 2},${height / 2})`);
      // set the color scale
      const color = d3.scaleOrdinal()
        .domain(Object.keys(data))
        .range(d3.schemeDark2);

      // Compute the position of each group on the pie:
      const pie = d3.pie()
        .sort(null) // Do not sort group by size
        .value(function (d) { return d.value; });
      const dataReady = pie(d3.entries(data));

      // The arc generator
      const arc = d3.arc()
        .innerRadius(radius * 0.5) // This is the size of the donut hole
        .outerRadius(radius * 0.8);

      // // Another arc that won't be drawn. Just for labels positioning
      const outerArc = d3.arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9);

      // // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      svg
        .selectAll('allSlices')
        .data(dataReady)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function(d){ return(color(d.data.key)) })
        .attr("stroke", "whitesmoke")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)
        .style("color", "white");

      // Add the polylines between chart and labels:
      svg
        .selectAll('allPolylines')
        .data(dataReady)
        .enter()
        .append('polyline')
          .attr("stroke", "whitesmoke")
          .style("fill", "none")
          .attr("stroke-width", 1)
          .attr('points', function(d) {
            const posA = arc.centroid(d) // line insertion in the slice
            const posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
            const posC = outerArc.centroid(d); // Label position = almost the same as posB
            const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
            posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
            return [posA, posB, posC]
          });

      // Add the polylines between chart and labels:
      svg
        .selectAll('allLabels')
        .data(dataReady)
        .enter()
        .append('text')
          .text( function(d) { return d.data.key.charAt(0).toUpperCase() + d.data.key.slice(1) } )
          .attr('transform', function(d) {
            const pos = outerArc.centroid(d);
            const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
            return 'translate(' + pos + ')';
          })
          .style('text-anchor', function(d) {
            const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            return (midangle < Math.PI ? 'start' : 'end')
          })
          .attr('stroke', function() {return 'whitesmoke'});
        setSvgElem(svg)
    }
    return () => {
      l1 !== 'portfolio' && d3.select('.DonutGraph > svg').remove();
    };
  }, []);

  return <Grid className={`${classes.root} DonutGraph`} />;
};

// export
export default DonutGraph;
