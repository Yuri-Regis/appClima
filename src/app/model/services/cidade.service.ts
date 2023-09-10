import { Injectable } from '@angular/core';
import { Cidade } from '../entities/Cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  public listaDeCidades : Cidade[] = [];

  constructor() {
    let c1 : Cidade = new Cidade("Guarapuava", 20);
    c1.humidade = 21;
    let c2 : Cidade = new Cidade("Curitiba", 13);
    c2.humidade = 36;
    let c3 : Cidade = new Cidade("Sao Paulo", 26);
    c3.humidade = 13;
    this.listaDeCidades.push(c1);
    this.listaDeCidades.push(c2);
    this.listaDeCidades.push(c3);
   }

   cadastrar(Cidade : Cidade){
    this.listaDeCidades.push(Cidade);
   }

   obterTodos() : Cidade[]{
    return this.listaDeCidades;
   }

   obterPorIndice(indice : number) : Cidade{
    return this.listaDeCidades[indice];
   }

   atualizar(indice : number, novo : Cidade){
    this.listaDeCidades[indice] = novo;
   }

   deletar(indice : number){
    this.listaDeCidades.splice(indice, 1);
   }

}
