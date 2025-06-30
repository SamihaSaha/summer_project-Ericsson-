import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register';
import { FormPage } from './pages/form-page/form-page';

const routes: Routes = [
  { path: '', component: RegisterComponent, data: { animation: 'LoginPage' } },
  { path: 'form', component: FormPage, data: { animation: 'FormPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
