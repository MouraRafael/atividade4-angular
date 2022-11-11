import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from '../../model/ClienteModel';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formEditaCliente!:FormGroup;
  customerEntity!:ClienteModel

  constructor(
    private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private service:CustomerService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.customerEntity = this.service.getCustomerById(id);


    this.formEditaCliente = this.formBuilder.group({
      nome:['',[Validators.required]],
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

    this.loadForm(this.customerEntity)
  }

  loadForm(customer:ClienteModel){
    this.formEditaCliente.patchValue({
      nome: customer.nome,
      cpf: customer.cpf,
      telefone: customer.telefone,
      endereco: customer.endereco
    })
  }

  edit(){
    this.customerEntity.nome = this.nome.value;
    this.customerEntity.cpf = this.cpf.value;
    this.customerEntity.telefone = this.telefone.value;
    this.customerEntity.endereco.cep = this.cep.value;
    this.customerEntity.endereco.logradouro = this.logradouro.value;
    this.customerEntity.endereco.complemento = this.complemento.value;
    this.customerEntity.endereco.bairro = this.bairro.value;
    this.customerEntity.endereco.localidade = this.localidade.value;
    this.customerEntity.endereco.uf = this.uf.value;

    this.service.edit(this.customerEntity)
  }


  get nome(){  return this.formEditaCliente.get("nome")!}
  get cpf(){return this.formEditaCliente.get("cpf")!}
  get telefone(){return this.formEditaCliente.get("telefone")!}

  get cep(){return this.formEditaCliente.get("endereco")?.get("cep")!}
  get logradouro(){return this.formEditaCliente.get("endereco")?.get("logradouro")!}
  get complemento(){return this.formEditaCliente.get("endereco")?.get("complemento")!};
  get bairro(){return this.formEditaCliente.get("endereco")?.get("bairro")!}
  get localidade(){return this.formEditaCliente.get("endereco")?.get("localidade")!}
  get uf(){return this.formEditaCliente.get("endereco")?.get("uf")!}
}
