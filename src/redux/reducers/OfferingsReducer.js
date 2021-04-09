import * as types from '../types/OfferingsTypes';

const initialState = {
  activeSortTitle: 'Name',
  offeringsArr: [],
};

export default function OfferingsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ACTIVE_SORT_TITLE:
      return { ...state, activeSortTitle: action.newSortTitleStr };
    case types.UPDATE_OFFERINGS_ARR:
      return { ...state, offeringsArr: action.offeringsArr };
    default:
      return { ...state };
  }
}
