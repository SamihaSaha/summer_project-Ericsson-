import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl:'./login.html',
  styleUrls: ['./login.scss'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.router.navigate(['/form']);
    }
  }
}
