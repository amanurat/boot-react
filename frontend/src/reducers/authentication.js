import { createReducer } from './createReducer';

import { LOGIN_SUCCESS, LOGIN_FAILED } from 'actions/login';
import { LOGOUT } from 'actions/logout';

const initialState = {
  isAuthenticated: false,
  token: null
};

export default createReducer(initialState, {
  [LOGIN_SUCCESS]: (state, data) => {
    localStorage.setItem('auth-token', data.token);
    console.log('Login successful');
    return {
      ...state,
      isAuthenticated: true,
      token: data.token
    };
  },
  [LOGIN_FAILED]: (state, data) => {
    console.warn('Login failed');
    localStorage.removeItem('auth-token');
    return {
      ...state,
      isAuthenticated: false,
      token: null
    };
  },
  [LOGOUT]: (state, data) => {
    console.log('Logout');
    localStorage.removeItem('auth-token');
    return {
      ...state,
      isAuthenticated: false,
      token: null
    };
  }
});
