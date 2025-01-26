import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent{

  constructor(
    private userService: UserService, 
    private router: Router, 
    private authService: AuthService){}
  
  ngOnInit(): void {
    this.userService.getUsers();
  }
  
    onSubmit(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
  
      if (this.userService.userExists(email, password)) {
        console.log('User exists');
        this.authService.login(email);
        this.router.navigate(['/']);
      } else {
        window.alert("Wrong email or password!")
        console.log('User does not exist');
      }
    }
  }
  
