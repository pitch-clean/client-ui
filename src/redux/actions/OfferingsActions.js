import * as types from '../types/OfferingsTypes';

export const setActiveSortTitle = (newSortTitleStr) => dispatch => {
  dispatch({
    type: types.SET_ACTIVE_SORT_TITLE,
    newSortTitleStr,
  })
};
export const updateOfferingsArr = (offeringsArr) => dispatch => {
  dispatch({
    type: types.UPDATE_OFFERINGS_ARR,
    offeringsArr,
  })
};
