import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

const materialModules =[
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
  exports:[RegistrationComponent]
})
export class CustomersModule { }
