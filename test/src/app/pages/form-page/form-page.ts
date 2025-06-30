import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgIf,
    NgFor
  ],
  templateUrl: './form-page.html',
  styleUrl: './form-page.scss'
})
export class FormPage implements OnInit {
  registrationForm: FormGroup;

  states: string[] = ['West Bengal', 'Delhi', 'Maharashtra', 'Tamil Nadu'];
  allCities: { [key: string]: string[] } = {
    'West Bengal': ['Kolkata', 'Siliguri', 'Asansol', 'Bardhaman', 'Durgapur', 'Bishnupur'],
    'Delhi': ['New Delhi', 'Dwarka', 'Noida', 'Ghaziabad', 'Faridabad', 'Gurgaon'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Vellore', 'Salem', 'Madurai']
  };
  filteredCities: string[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        address: [''],
        countryCode: ['+91', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        age: ['', [Validators.required, Validators.min(18)]],
        gender: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        pin: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {
    this.registrationForm.get('state')?.valueChanges.subscribe(selectedState => {
      this.filteredCities = this.allCities[selectedState] || [];
      this.registrationForm.get('city')?.setValue('');
    });
  }

  onStateChange(): void {
    const selectedState = this.registrationForm.get('state')?.value;
    this.filteredCities = this.allCities[selectedState] || [];
    this.registrationForm.get('city')?.setValue('');
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const confirmSubmit = confirm('Are you sure you want to submit the form?');
      if (confirmSubmit) {
        console.log('Form Submitted:', this.registrationForm.value);
        alert('Form Submitted Successfully!');
      }
    } else {
      this.markAllFieldsAsTouched();
      alert('Please fill all required fields correctly.');
    }
  }

  onCancel(): void {
    this.registrationForm.reset();
    this.filteredCities = [];
  }

  logout(): void {
    const confirmLogout = confirm('Do you really want to logout?');
    if (confirmLogout) {
      this.router.navigate(['/']);
    }
  }
  showPassword: boolean = false;
showConfirmPassword: boolean = false;
togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}

toggleConfirmPasswordVisibility(): void {
  this.showConfirmPassword = !this.showConfirmPassword;
}


  private markAllFieldsAsTouched(): void {
    Object.values(this.registrationForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  get f() {
    return this.registrationForm.controls;
  }
}
