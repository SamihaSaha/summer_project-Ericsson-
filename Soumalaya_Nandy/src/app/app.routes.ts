import { Routes } from '@angular/router';
import { Login } from './login/login'
import { Rform } from './regform/regform';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'form', component: Rform },
  { path: '**', redirectTo: 'login' } 
];
