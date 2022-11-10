import { Injectable } from '@angular/core';
import { ClienteModel } from '../model/ClienteModel';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EnderecoModel } from '../model/EnderecoModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  cadastro(customer:ClienteModel){
    localStorage.setItem('cliente',JSON.stringify(customer))
  }

  pegaCEP(cepNumber:string):Observable<EnderecoModel>{
    const cep = this.http.get<EnderecoModel>(`http://viacep.com.br/ws/${cepNumber}/json/`);
    return cep;
  }
}
