
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rform',
  templateUrl: './rform.html',
  styleUrls: ['./rform.scss'],
  imports: [ReactiveFormsModule,NgFor,NgIf],
  standalone: true
})
export class Rform {
  employeeForm: FormGroup;

  states = ['West Bengal', 'Tamil Nadu', 'Odisha', 'Maharashtra', 'Delhi'];

  stateCityMap: { [key: string]: string[] } = {
    'West Bengal': ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur'],
    'Tamil Nadu': ['Chennai', 'Vellore', 'Madurai'],
    'Odisha': ['Bhubaneswar', 'Puri', 'Cuttack'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
    'Delhi': ['New Delhi', 'Dwarka', 'Rohini']
  };

  cities: string[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      address: ['', [Validators.required]],
      countryCode: ['+91', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      gender: ['', Validators.required],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pinCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    }, { validators: this.passwordMatchValidator });
  }

  
  onStateChange() {
    const selectedState = this.employeeForm.get('state')?.value;
    this.cities = this.stateCityMap[selectedState] || [];
    
    this.employeeForm.get('city')?.setValue('');
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log('Form Submitted:', this.employeeForm.value);
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }
   logout() {
    this.router.navigate(['/login']);
  }

  get f() {
    return this.employeeForm.controls;
  }
}
