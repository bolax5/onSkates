import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  signinForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

  signIn() {
    if (this.signinForm.valid && this.signinForm.value.password === this.signinForm.value.repeatPassword) {
      this.authService.createNewUser(this.signinForm.value.email, this.signinForm.value.password).then(() => {
        alert('En breve recibirás un email');
      }, (error) => console.error(error));
    }
  }

  logIn() {
    if (this.loginForm.valid) {
      this.authService.signInRegular(this.loginForm.value.email, this.loginForm.value.password).then(() => {
        this.router.navigate(['/']);
      }, (error) => console.error(error));
    }
  }
}
