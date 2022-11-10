import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { EditComponent } from './components/edit/edit.component';


const materialModules =[
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
]

@NgModule({
  declarations: [
    RegistrationComponent,
    ListComponent,
    EditComponent,
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
