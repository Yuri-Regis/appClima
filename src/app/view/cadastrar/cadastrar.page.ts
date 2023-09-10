import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Cidade } from 'src/app/model/entities/Cidade';
import { CidadeService } from 'src/app/model/services/cidade.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome! : string;
  public temperatura! : number;
  public humidade! : number;
  public Clima! : number;

  constructor(private alertController: AlertController,
    private router : Router, private CidadeService : CidadeService) { }

  ngOnInit() {
  }

  cadastrar(){
    if(this.nome && this.temperatura){
      let novo : Cidade = new Cidade(this.nome, this.temperatura);
      novo.humidade = this.humidade;
      novo.Clima = this.Clima;
      this.CidadeService.cadastrar(novo);
      this.router.navigate(["/home"]);
    }else{
      this.presentAlert("Erro", "Nome e temperatura são campos Obrigatórios!");
    }
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Cidades',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
