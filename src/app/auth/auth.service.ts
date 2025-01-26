import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//singleton
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());
  loggedInStatus = this.loggedIn.asObservable();

  constructor() {}

  private isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }

  login(email: string) {
    localStorage.setItem('loggedInUser', JSON.stringify({ email }));
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.loggedIn.next(false);
  }
}
