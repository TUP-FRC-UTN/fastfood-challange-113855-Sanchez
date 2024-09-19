import { TestBed } from '@angular/core/testing';

import { PedidosListaService } from './pedidos-lista.service';

describe('PedidosListaService', () => {
  let service: PedidosListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
