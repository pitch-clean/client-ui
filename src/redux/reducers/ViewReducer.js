import * as types from '../types/ViewTypes';

const initialState = {
    currentView: 'home',
};

export default function ViewReducer(state=initialState, action) {
    switch(action['type']) {
        case types.CURRENT_VIEW: return {...state, currentView: action['payload']};
        default: return {...state};
    }
}