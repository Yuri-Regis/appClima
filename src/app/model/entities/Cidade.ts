export class Cidade{
 private _nome: string;
 private _temperatura: number;
 private _humidade!: number;
 private _Clima!: number;

 constructor(nome : string, temperatura: number){
  this._nome = nome;
  this._temperatura = temperatura;
 }

 public get nome() : string{
  return this._nome;
 }

 public set nome(nome: string){
  this._nome = nome;
 }

 public get temperatura() : number{
  return this._temperatura;
 }

 public set temperatura(temperatura: number){
  this._temperatura = temperatura;
 }

 public get humidade(): number {
  return this._humidade;
}
public set humidade(value: number) {
  this._humidade = value;
}

public get Clima(): number {
  return this._Clima;
}
public set Clima(value: number) {
  this._Clima = value;
}



}
