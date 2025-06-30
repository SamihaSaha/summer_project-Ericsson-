import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register';
import { FormPage } from './pages/form-page/form-page';

export const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'form', component: FormPage }
];
