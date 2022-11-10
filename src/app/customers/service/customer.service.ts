import { Injectable } from '@angular/core';
import { ClienteModel } from '../model/ClienteModel';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EnderecoModel } from '../model/EnderecoModel';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  register(customer:ClienteModel){
    customer.id = uuid.v4()

    let customers:ClienteModel[] = this.list();
    customers.push(customer);


    //memo: remember to try to validate the CPF later when there's more time
    localStorage.setItem('customers',JSON.stringify(customers))
  }

  list():ClienteModel[]{
    let customerList = JSON.parse(localStorage.getItem('customers')!) as ClienteModel[] ?? [];
    return customerList;
  }

  delete(id:string){
    let customers:ClienteModel[] = this.list();

    customers = customers.filter(customer => customer.id !== id)

    localStorage.setItem('customers',JSON.stringify(customers))
  }


  pegaCEP(cepNumber:string):Observable<EnderecoModel>{
    const cep = this.http.get<EnderecoModel>(`http://viacep.com.br/ws/${cepNumber}/json/`);
    return cep;
  }
}
