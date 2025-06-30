import { Routes } from '@angular/router';
import { LoginComponent } from './login/login'
import { Rform } from './rform/rform';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'rform', component: Rform },
  { path: '**', redirectTo: 'login' } 
];
