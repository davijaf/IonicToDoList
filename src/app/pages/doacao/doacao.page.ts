import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.page.html',
  styleUrls: ['./doacao.page.scss'],
})
export class DoacaoPage implements OnInit {
  loading : boolean = true;
  constructor(
    private navCtrl : NavController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    setTimeout(() =>{
    this.loading = false;
    },3000);
  }

  retornar() {
    this.navCtrl.pop();
    //this.navCtrl.back();
  }

  async fazerDoacao() {
    localStorage.setItem('fezdoacao', 'sim');

    const toast = await this.toastCtrl.create({
      message: 'Doação realizada com sucesso',
      position: 'top',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  agradecimento(nome : string) {
    this.navCtrl.navigateForward('doadores/' + nome);
    //this.navCtrl.back();
  }



}
