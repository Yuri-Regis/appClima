import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Cidade } from 'src/app/model/entities/Cidade';
import { CidadeService } from 'src/app/model/services/cidade.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  indice! : number;
  nome! : string;
  temperatura! : number;
  humidade! : number;
  Clima! : number;
  Cidade! : Cidade;
  edicao: boolean = true;


  constructor(private actRoute : ActivatedRoute,
    private CidadeService : CidadeService,
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe((parametros) => {
      if(parametros["indice"]){
        this.indice = parametros["indice"];
      }
    })
    this.Cidade = this.CidadeService.obterPorIndice(this.indice);
    this.nome = this.Cidade.nome;
    this.temperatura = this.Cidade.temperatura;
    this.humidade = this.Cidade.humidade;
    this.Clima = this.Cidade.Clima;
  }

  habilitar(){
    if(this.edicao){
      this.edicao = false;
    }else{
      this.edicao = true;
    }
  }


  editar(){
    if(this.nome && this.temperatura){
      let novo: Cidade = new Cidade(this.nome, this.temperatura);
      novo.humidade = this.humidade;
      novo.Clima = this.Clima;
      this.CidadeService.atualizar(this.indice, novo);
      this.router.navigate(["/home"]);
    }else{
      this.presentAlert("Erro", "Nome e temperatura são campos Obrigatórios!");
    }
  }

  async excluir() {
    const confirmAlert = await this.presentAlertConfirm('Confirmação', 'Tem certeza que deseja excluir esta cidade?');

    confirmAlert.onDidDismiss().then((data) => {
      if (data.role === 'confirm') {
        this.CidadeService.deletar(this.indice);
        this.router.navigate(['/home']);
      }
    });
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Clima e Tempos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentAlertConfirm(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Clima e Tempo',
      subHeader: subHeader,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // Cancelar a ação
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            // Executar a ação de confirmação
          },
        },
      ],
    });
    await alert.present();
    return alert;
  }



}
