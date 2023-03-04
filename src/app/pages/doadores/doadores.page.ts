import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-doadores',
  templateUrl: './doadores.page.html',
  styleUrls: ['./doadores.page.scss'],
})
export class DoadoresPage implements OnInit {
  nome: any;
  constructor(private route: ActivatedRoute, private navCtrl : NavController,) {
    this.nome = this.route.snapshot.paramMap.get('nome');

  }

  retornar() {
    this.navCtrl.pop();
    //this.navCtrl.back();
  }


  ngOnInit() {
  }

}
