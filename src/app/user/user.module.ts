import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    TableComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
