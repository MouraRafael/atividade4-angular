import { EnderecoModel } from "./EnderecoModel";


export interface ClienteModel{
  id:string,
  nome:string,
  cpf:number,
  telefone:string,
  endereco:EnderecoModel,
}
