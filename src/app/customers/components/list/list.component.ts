import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClienteModel } from '../../model/ClienteModel';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clientes!:ClienteModel[];
  displayedColumns:string[] = ['nome','telefone','editar','remover']
  dataSource!:MatTableDataSource<ClienteModel>;

  constructor(private service:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.clientes = this.service.list();
    this.dataSource = new MatTableDataSource(this.clientes);

    console.log(this.clientes)
  }

  list(){
    return this.clientes;
  }

}
