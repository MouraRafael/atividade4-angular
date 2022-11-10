import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  exports:[RegistrationComponent],
  providers:[CustomerService]
})
export class CustomersModule { }
