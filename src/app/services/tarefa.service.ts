import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  tarefaCollection : any[]=[];
  key = 'tarefaCollection';
  constructor() { }

  salvar(tarefa : any, callback=null) {
    tarefa.status = 'Pendente';
    // Obter info do localStorage
    let value = localStorage.getItem(this.key);

    if (value == null || value==undefined){
      this.tarefaCollection.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(this.tarefaCollection))
    } else {
      let collection : any[] = JSON.parse(value);
      collection.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(collection));
    }

    if (callback!=null){
    }
  }

  listar() {
    // Obter localStorage
    let value = localStorage.getItem(this.key);
    if (value==null || value==undefined) {
      return [];
    }

    let collection: any[] = JSON.parse(value);
    return collection;
  }

  delete(tarefa : any) {
    // Obter localStorage
    let value = localStorage.getItem(this.key);

    if (value==null || value==undefined) {
      return;
    }

    let collection: any[] = JSON.parse(value);

    let resultCollection = collection.filter(item=>{return item.tarefa != tarefa.tarefa})

    localStorage.setItem(this.key, JSON.stringify(resultCollection));

  }

  concluir(tarefa : any) {
    // Obter localStorage
    let value = localStorage.getItem(this.key);

    if (value == null || value == undefined) {
      return;
    }

    let collection: any[] = JSON.parse(value);
    // encontrar o índice do objeto correspondente
    let index = collection.findIndex(item => item.tarefa === tarefa.tarefa);

    if (index >= 0) {
      // atualizar o valor da propriedade 'status'
      collection[index].status = "Concluído";
      // atualizar a coleção no localStorage
      localStorage.setItem(this.key, JSON.stringify(collection));
    }
  }

  pendente(tarefa : any) {
    // Obter localStorage
    let value = localStorage.getItem(this.key);

    if (value == null || value == undefined) {
      return;
    }

    let collection: any[] = JSON.parse(value);
    // encontrar o índice do objeto correspondente
    let index = collection.findIndex(item => item.tarefa === tarefa.tarefa);

    if (index >= 0) {
      // atualizar o valor da propriedade 'status'
      collection[index].status = "Pendente";
      // atualizar a coleção no localStorage
      localStorage.setItem(this.key, JSON.stringify(collection));
    }
  }

  checkTarefaDuplicada(tarefa: any): boolean {
    let value = localStorage.getItem(this.key);

    if (value == null || value == undefined) {
      return false;
    }

    let collection: any[] = JSON.parse(value);
    return collection.some(item => item.tarefa === tarefa.tarefa);
  }

}
