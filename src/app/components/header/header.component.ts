import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/authService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private readonly authService: AuthService) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  login(): void {
    this.authService.authenticate();
  }

  logout(): void {
    this.authService.logout();
  }
}
