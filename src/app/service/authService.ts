import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { logIn, logOut } from '../authStore/auth.actions';
import { selectAuth } from '../authStore/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor(private readonly store: Store) {
    store.pipe(select(selectAuth)).subscribe((isLoggedIn) => {
      console.log('Login state: ' + isLoggedIn);
      this.isLoggedIn = isLoggedIn;
    });
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  authenticate(): void {
    this.store.dispatch(logIn({ isLoggedIn: true }));
  }

  logout(): void {
    this.store.dispatch(logOut({ isLoggedIn: false }));
  }
}
