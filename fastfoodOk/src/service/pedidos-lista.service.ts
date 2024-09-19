import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Estado, Pedidos } from '../data/Pedidos';

@Injectable({
  providedIn: 'root',
})
export class PedidosListaService {
  private listaPedidosSubject = new BehaviorSubject<Pedidos[]>([]);
  listaPedidos$: Observable<Pedidos[]> = this.listaPedidosSubject.asObservable();

  constructor() {}

  addPedido(pedido: Pedidos) {
    const updatedList = [...this.listaPedidosSubject.getValue(), pedido];
    this.listaPedidosSubject.next(updatedList);
  }

  removePedido(position: number) {
    const updatedList = this.listaPedidosSubject.getValue().filter((_, index) => index !== position);
    this.listaPedidosSubject.next(updatedList);
  }

  getListPedidos(): Pedidos[] {
    const list = this.listaPedidosSubject.getValue().filter((item) => item.estado === Estado.PEDIDO);
    console.log(list);
    return list;
  }

  getListPedidosEnMarcha(): Pedidos[] {
    return this.listaPedidosSubject.getValue().filter((item) => item.estado === Estado.EN_MARCHA);
  }

  getListPedidosFinalizados(): Pedidos[] {
    return this.listaPedidosSubject.getValue().filter((item) => item.estado === Estado.TERMINADO);
  }

  getListAllPedidos(): Pedidos[] {
    return this.listaPedidosSubject.getValue().filter((item) => item.estado === Estado.TERMINADO);
  }

  modificarEstadoPedido(estado: Estado, id: number) {
    const updatedList = this.listaPedidosSubject.getValue().map((item) => {
      if (item.number === id) {
        item.estado = estado;
      }
      return item;
    });
    this.listaPedidosSubject.next(updatedList);
  }
}