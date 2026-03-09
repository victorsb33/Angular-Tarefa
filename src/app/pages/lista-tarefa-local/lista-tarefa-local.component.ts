import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  dataSource = ELEMENT_DATA;  
listarTarefa = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
