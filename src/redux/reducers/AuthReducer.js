import * as types from '../types/AuthTypes';

const initialState = {
  activeProfile: {profileName: 'derpy'},
  isAuthenticated: false,
};

export default function AuthReducer(state=initialState, action) {
  switch(action['type']) {
    case types.LOG_IN: return {...state, isAuthenticated: true, activeProfile: action['payload']};
    case types.LOG_OUT: return {...state, isAuthenticated: false, activeProfile: {}};
    default: return {...state};
  }
}