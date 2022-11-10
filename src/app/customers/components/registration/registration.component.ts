import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";

import { ClienteModel } from '../../model/ClienteModel';
import { EnderecoModel } from "../../model/EnderecoModel";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formCadastroCliente!:FormGroup;

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formCadastroCliente = this.formBuilder.group({
      nome:[''],
      cpf:[''],
      telefone:[''],
      endereco:this.formBuilder.group({
        cep:[''],
        logradouro:[''],
        complemento:[''],
        bairro:[''],
        localidade:[''],
        uf:['']
      }),
    })
  }



  cadastrar():void{

    const cliente = this.formCadastroCliente.getRawValue() as ClienteModel;
    console.log(cliente)
  }
}
