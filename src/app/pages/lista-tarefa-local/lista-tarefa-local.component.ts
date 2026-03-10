import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


export interface Tarefas {
  descricao: string;
  posicao: number;
  status: string;
  
}
const ELEMENT_DATA: Tarefas[] = [
  {posicao: 1, descricao: 'Revisar conceitos de componentização', status: "true",},
  {posicao: 2, descricao: 'Praticar a exibição de listas', status: "false", },
 
];


@Component({
  selector: 'vex-lista-tarefa-local',
  templateUrl: './lista-tarefa-local.component.html',
  styleUrls: ['./lista-tarefa-local.component.scss']
})
export class ListaTarefaLocalComponent implements OnInit {
  
displayedColumns: string[] = ['posicao', 'descricao', 'status'];
dataSource = new MatTableDataSource(ELEMENT_DATA);  
listarTarefa = new FormControl('');

adicionarTarefa() {
    const descricao = this.listarTarefa.value?.trim();
    if (!descricao) return;
    
    const novaTarefa: Tarefas = {
      posicao: this.dataSource.data.length + 1,
      descricao,
      status: 'false'
    };
    
    this.dataSource.data.push(novaTarefa);
    this.dataSource.data = [...this.dataSource.data]; // Atualiza
    this.listarTarefa.reset();
  }

  alterarStatus(index: number, checked: boolean) {
  this.dataSource.data[index].status = checked ? 'true' : 'false';
  this.dataSource.data = [...this.dataSource.data]; // Força atualização
}

  

  constructor() { }

  ngOnInit(): void {
  }

}
