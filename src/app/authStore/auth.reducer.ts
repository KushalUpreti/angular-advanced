import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

export const authFeatureKey = 'authState';

export const authReducer = createReducer(
  authInitialState,
  on(AuthActions.logIn, (state, payload) => {
    const loginState = payload.isLoggedIn;
    return { ...state, isLoggedIn: loginState };
  }),
  on(AuthActions.logOut, (state, payload) => {
    const loginState = payload.isLoggedIn;
    return { ...state, isLoggedIn: loginState };
  })
);
