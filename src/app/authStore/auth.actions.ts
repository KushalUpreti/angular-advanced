import { createAction, props } from '@ngrx/store';

export const logIn = createAction(
  '[Auth Component] Login',
  props<{ isLoggedIn: boolean }>()
);

export const logOut = createAction(
  '[Auth Component] Logout',
  props<{ isLoggedIn: boolean }>()
);
