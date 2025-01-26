import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'icr-prodavnica-ljubimaca';

  isLoggedIn: boolean = false;

  isChatOpen = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedInStatus.subscribe(status => {
      this.isLoggedIn = status;
  });
  }

  logout() {
    this.authService.logout();

  }
  
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
}