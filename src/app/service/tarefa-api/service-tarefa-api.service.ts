import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTarefaApiService {

  private apiUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) { }
  getTarefas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
