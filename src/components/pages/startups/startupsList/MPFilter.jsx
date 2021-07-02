// react
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// utils
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import MPFilterItem from './MPFilterItem';
import { updateStartupsArr } from '../../../../redux/actions/ViewActions';
import { Get } from '../../../../utils/requests';
// components
// constants
const useStyles = makeStyles(theme => ({
  MPFilter: {
    justifyContent: 'start',
  },
  navIconHide: {
    display: 'relative',
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
  },
}));

/**
 * main
 */
const MPFilter = ({}) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  // state
  const currentPageNumber = useSelector(s => s.view.startup.currentPage) || 1;
  const startupsArr = useSelector(s => s.view.startup.startupsArr);
  const fundingRounds = useSelector(s => s.view.startup.filters.fundingRounds) || [];
  const fundingTypes = useSelector(s => s.view.startup.filters.fundingTypes) || [];
  const sectors = useSelector(s => s.view.startup.filters.sectors) || [];
  const [filterFR, filterFRSet] = useState([]);
  const [filterFT, filterFTSet] = useState([]);
  const [filterSector, filterSectorSet] = useState([]);
  const fundingItems = [];
  const sectorItems = [];
  const finInstrumentItems = [];
  for (let idx = 0; idx < startupsArr.length; idx += 1) {
    const fundingRound = startupsArr[idx].fundingRounds[0].round;
    const fundingType = startupsArr[idx].fundingRounds[0].type;
    const sector = startupsArr[idx].sector;
    if (!fundingItems.includes(fundingRound)) fundingItems.push(fundingRound);
    if (!sectorItems.includes(sector)) sectorItems.push(sector);
    if (!finInstrumentItems.includes(fundingType)) finInstrumentItems.push(fundingType);
  }
  // effects
  useEffect(async () => {
    if (filterFR.length + filterFT.length + filterSector.length > 0) {
      try {
        const frQuery = filterFR.join(',');
        const ftQuery = filterFT.join(',');
        const sectorQuery = filterSector.join(',');
        const url = `${window.env.api.startups}/filter?fundRound=${frQuery}&fundType=${ftQuery}&sector=${sectorQuery}`;
        const { response, error } = await Get(url);
        if (error) throw error;
        // const { startupsArr } = response;
        dispatch(updateStartupsArr(response));
        console.log('resres', url, response);
      } catch (err) {
        console.log(err);
      }
    } else {
      const url = `${window.env.api.startups}?page=${currentPageNumber}`;
      try {
        const { response, error } = await Get(url);
        dispatch(updateStartupsArr(response));
      } catch (err) {
        console.log(err);
      }
    }
  }, [filterFR, filterFT, filterSector]);

  return (
    <div className={`${classes.MPFilter} flexrow`}>
      <Button
        className={`${classes.navIconHide} flexcol nowrap`}
        variant="contained"
        disabled={filterFR.length + filterFT.length + filterSector.length === 0}
        onClick={() => {filterSectorSet([]); filterFRSet([]); filterFTSet([])}}
      >
        Reset Filters
      </Button>
      <MPFilterItem
        label={'Funding Round'}
        menuItems={fundingRounds}
        getter={filterFR}
        setter={filterFRSet}
      />
      <MPFilterItem
        label={'Product Sector'}
        menuItems={sectors}
        getter={filterSector}
        setter={filterSectorSet}
      />
      <MPFilterItem
        label={'Financial Instrument'}
        menuItems={fundingTypes}
        getter={filterFT}
        setter={filterFTSet}
      />
    </div>
  );
};

// export
export default MPFilter;
