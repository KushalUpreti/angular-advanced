import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './authStore/auth.reducer';

export interface AppState {
  authState: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  authState: authReducer,
};
