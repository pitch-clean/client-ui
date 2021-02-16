import * as types from '../types/ViewTypes';

export const updateOfferingsArr = (isDarkMode) => dispatch => {
  dispatch({
    type: types.IS_DARK_MODE,
    isDarkMode,
  })
};