import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {

  constructor(
    private userService: UserService, 
    private router: Router, 
    private authService: AuthService)
  {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    console.log(email);

    if (this.userService.emailExists(email)){
        window.alert("Email taken!")
        console.log("zauzet mejl");
    }
    else{
      console.log("ok mejl");
      const password = form.value.password;
      const cardNumber = form.value.cardNumber;
      this.userService.newUser(password, email, cardNumber)
      this.router.navigate(['/login']);
    }
  } 
}

