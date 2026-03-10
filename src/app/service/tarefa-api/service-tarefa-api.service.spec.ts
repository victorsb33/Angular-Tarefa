import { TestBed } from '@angular/core/testing';

import { ServiceTarefaApiService } from './service-tarefa-api.service';

describe('ServiceTarefaApiService', () => {
  let service: ServiceTarefaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTarefaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
