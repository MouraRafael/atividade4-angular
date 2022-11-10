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



  get nome(){  return this.formCadastroCliente.get("nome")!}
  get cpf(){return this.formCadastroCliente.get("cpf")!}
  get telefone(){return this.formCadastroCliente.get("telefone")!}

  get cep(){return this.formCadastroCliente.get("endereco")?.get("cep")!}
  get logradouro(){return this.formCadastroCliente.get("endereco")?.get("logradouro")!}
  get complemento(){return this.formCadastroCliente.get("endereco")?.get("complemento")!}
  get bairro(){return this.formCadastroCliente.get("endereco")?.get("bairro")!}
  get localidade(){return this.formCadastroCliente.get("endereco")?.get("localidade")!}
  get uf(){return this.formCadastroCliente.get("endereco")?.get("uf")!}
}
