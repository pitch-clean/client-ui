// react
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
// utils
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
} from '@material-ui/core';
import MPSearchItem from './MPSearchItem';
import { updateStartupsArr } from '../../../../redux/actions/ViewActions';
import { Get } from '../../../../utils/requests';
// components
// constants
const useStyles = makeStyles(theme => ({
  container: {
    minHeight: 50,
    backgroundColor: 'white',
  },
  root: {
    justifyContent: 'start',
  },
  item: {
    padding: 5,
    margin: 5,
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
const SearchFilter = ({}) => {
  // init hooks
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // state
  const startupsArr = useSelector(s => s.view.startup.startupsArr);
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
        dispatch(updateStartupsArr(res));
        console.log('resres', res);
      } catch (err) {
        console.log(err);
      }
    }
  }, [filterFR, filterFT, filterSector]);

  return pathname === '/marketplace' ? (
    <div className={`SearchFilter ${classes.container} flexrow w100`}>
      <div className={`root ${classes.root} flexrow`}>
        <Button
          className={`container flexcol ${classes.navIconHide} nowrap`}
          variant="contained"
          disabled={filterFR.length + filterFT.length + filterSector.length === 0}
          onClick={() => {filterSectorSet([]); filterFRSet([]); filterFTSet([])}}
        >
          Reset Filters
        </Button>
        <MPSearchItem
          label={'Funding Round'}
          menuItems={[...new Set([...fundingItems, ['Seed', 'Series A', 'Series B', 'Series C']])]}
          getter={filterFR}
          setter={filterFRSet}
        />
        <MPSearchItem
          label={'Product Sector'}
          menuItems={sectorItems}
          getter={filterSector}
          setter={filterSectorSet}
        />
        <MPSearchItem
          label={'Financial Instrument'}
          menuItems={finInstrumentItems}
          getter={filterFT}
          setter={filterFTSet}
        />
        {/* <ClickAwayListener>
          <div className={`item ${classes.item} flexrow`}>{'search'}</div>
        </ClickAwayListener> */}
      </div>
    </div>
  ): <div />;
};

// export
export default SearchFilter;
