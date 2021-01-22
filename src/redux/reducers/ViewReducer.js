import * as types from '../types/ViewTypes';

const initialState = {
    currentView: 'home',
    isDarkMode: true,
};

export default function ViewReducer(state=initialState, action) {
    switch(action['type']) {
        case types.CURRENT_VIEW: return {...state, currentView: action['payload']};
        case types.IS_DARK_MODE: return {...state, isDarkMode: action['payload']};
        default: return {...state};
    }
}