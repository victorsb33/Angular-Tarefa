import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceTarefaApiService } from 'src/app/service/tarefa-api/service-tarefa-api.service';


@Component({
  selector: 'vex-lista-tarefa-api',
  templateUrl: './lista-tarefa-api.component.html',
  styleUrls: ['./lista-tarefa-api.component.scss']
})
export class ListaTarefaApiComponent implements OnInit {
  tarefas: any[] = [];
  
  constructor(private http: HttpClient, private tarefaService: ServiceTarefaApiService) { }

  ngOnInit(): void {
    this.tarefaService.getTarefas().subscribe({
      next: response => {
        console.log('dados recebidos da API', response);
        // caso o JSON venha embrulhado em um objeto altere aqui
        this.tarefas = Array.isArray(response) ? response : response?.tarefas || [];
      },
      error: err => console.error('falha ao buscar tarefas', err)
    });
  }

}
