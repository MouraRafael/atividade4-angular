import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './customers/components/list/list.component';
import { RegistrationComponent } from './customers/components/registration/registration.component';
import { Router } from "@angular/router";
import { EditComponent } from './customers/components/edit/edit.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'clientes/lista',
    pathMatch: 'full'
  },
  {
    path:'clientes/cadastro',
    component: RegistrationComponent,
  },
  {
    path: 'clientes/lista',
    component: ListComponent
  },
  {
    path:'clientes/edita/:id',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
