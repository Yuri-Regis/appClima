import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Cidade } from 'src/app/model/entities/Cidade';
import { CidadeService } from 'src/app/model/services/cidade.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listaDeCidades : Cidade[] = [];

  constructor(private alertController: AlertController,
    private router : Router, private CidadeService : CidadeService) {
      this.listaDeCidades = this.CidadeService.obterTodos();
    }

  irParaCadastrar(){
    this.router.navigate(["/cadastrar"]);
  }

  editar(indice :  number){
    this.router.navigate(["/detalhar", indice]);
  }
}
