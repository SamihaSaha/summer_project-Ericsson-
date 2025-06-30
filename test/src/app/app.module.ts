import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { App } from './app';
import { RegisterComponent } from './pages/register/register';
import { FormPage } from './pages/form-page/form-page'; // if standalone
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    App,
    BrowserModule,
    ReactiveFormsModule,
    RegisterComponent,  
    FormPage             
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
