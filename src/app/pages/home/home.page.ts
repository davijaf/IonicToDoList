import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { TarefaService } from 'src/app/services/tarefa.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tarefaCollection : any[] = [];

  constructor(
    private alertCtrl :  AlertController,
    private tarefaService : TarefaService,
    private actionSheetController: ActionSheetController,

    ) {}

  ionViewDidEnter(){
    this.listarTarefa();
  }

  listarTarefa() {
    this.tarefaCollection = this.tarefaService.listar();
  }



  async showAdd() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Informe a tarefa',
      inputs: [
        {
          name: 'tarefa',
          type: 'text',
          placeholder: 'Descreva sua tarefa'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Salvar',
          handler: (tarefa) => {
            if (!tarefa.tarefa) {
              // exibe um alerta informando que o campo tarefa é obrigatório
              this.presentAlert('Campo obrigatório', 'Por favor, informe uma tarefa.');
              return false;
            } else if (this.tarefaService.checkTarefaDuplicada(tarefa)) {
              // exibe um alerta informando que a tarefa já existe
              this.presentAlert('Tarefa duplicada', 'A tarefa informada já existe.');
              return false;
            } else {
              // salva a tarefa
              this.tarefaService.salvar(tarefa);
              this.listarTarefa();
              return true;
            }
          }
        },
      ]
    });
    await alert.present();
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


  delete(item : any){
    console.log(item);
    //this.tarefaCollection = this.tarefaCollection.filter(tarefa=>{return tarefa != item});
    this.tarefaService.delete(item);
    this.listarTarefa();
  }

  concluir(item : any){
    this.tarefaService.concluir(item);
    //item.status = 'Concluso';
    console.log(item);
    this.listarTarefa();
  }

  pendente(item : any){
    this.tarefaService.pendente(item);
    //item.status = 'Concluso';
    console.log(item);
    this.listarTarefa();
  }

  async presentActionSheet(item: any) {
    let status : string;
    let icone : string;
    if (item.status === 'Pendente') {
      status = 'Marcar como concluso';
      icone = 'checkmark';
    } else{
      status = 'Marcar como pendente';
      icone = 'checkmark-done';
    };
    const actionSheet = await this.actionSheetController.create({
      header: 'Ação',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Deletar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.delete(item);
            console.log('Delete clicked');
          },
        },

        {
          text: status,
          icon: icone,
          handler: () => {
            if (item.status === 'Pendente') {
              this.concluir(item);
              console.log('Concluído clicked');
            } else {
              this.pendente(item);
              console.log('Pendente clicked');
            }

          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
