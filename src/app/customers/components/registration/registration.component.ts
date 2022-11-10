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
      cpf:['',[Validators.required,Validators.pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)]],
      telefone:['',[Validators.required]],
      endereco:this.formBuilder.group({
        cep:['',[Validators.required]],
        logradouro:['',[Validators.required]],
        complemento:['',[Validators.required]],
        bairro:['',[Validators.required]],
        localidade:['',[Validators.required]],
        uf:['',[Validators.required]]
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
