import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";

import { ClienteModel } from '../../model/ClienteModel';
import { EnderecoModel } from "../../model/EnderecoModel";
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formCadastroCliente!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private service:CustomerService
  ) { }

  ngOnInit(): void {
    this.formCadastroCliente = this.formBuilder.group({
      nome:[''],
      cpf:['',[Validators.required,Validators.pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)]],
      telefone:['',[Validators.required,Validators.pattern(/(\(?\d{2}\)?\s)?(\d{4,5}\-?\d{4})$/)]],
      endereco:this.formBuilder.group({
        cep:['',[Validators.required,Validators.pattern(/^\d{5}\-?\d{3}$/)]],
        logradouro:['',[Validators.required]],
        complemento:['',],
        bairro:['',[Validators.required]],
        localidade:['',[Validators.required]],
        uf:['',[Validators.required]]
      }),
    })
  }



  cadastrar():void{

    const cliente = this.formCadastroCliente.getRawValue() as ClienteModel;
    this.service.register(cliente);
  }

  verifyCEP(){
    const cep = this.formCadastroCliente.get('endereco')?.getRawValue() as EnderecoModel;
    console.log(cep)
    const receivedCEP = this.service.pegaCEP(cep.cep);
    receivedCEP.subscribe({
      next:(cep)=>{
        this.refresForm(cep)
      },
      error: (err)=>{
        console.log(err)
      }
    })
    console.log(receivedCEP)
  }

  refresForm(endereco:EnderecoModel){
    this.formCadastroCliente.get("endereco")?.patchValue({
      logradouro: endereco.logradouro,
      bairro: endereco.bairro,
      localidade:endereco.localidade,
      uf: endereco.uf
    })
  }









  get nome(){  return this.formCadastroCliente.get("nome")!}
  get cpf(){return this.formCadastroCliente.get("cpf")!}
  get telefone(){return this.formCadastroCliente.get("telefone")!}

  get cep(){return this.formCadastroCliente.get("endereco")?.get("cep")!}
  get logradouro(){return this.formCadastroCliente.get("endereco")?.get("logradouro")!}

  get bairro(){return this.formCadastroCliente.get("endereco")?.get("bairro")!}
  get localidade(){return this.formCadastroCliente.get("endereco")?.get("localidade")!}
  get uf(){return this.formCadastroCliente.get("endereco")?.get("uf")!}
}
