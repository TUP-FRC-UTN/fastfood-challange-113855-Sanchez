import { Injectable } from '@angular/core';
import { Estado, Pedidos } from '../data/Pedidos';

@Injectable({
  providedIn: 'root',
})
export class PedidosListaService {
  private listaPedidos: Pedidos[] = [];

  
  addPedido(pedido: Pedidos) {
    this.listaPedidos.push(pedido);
    console.log(this.listaPedidos)
  }
  removePedido(position: number) {
    this.listaPedidos.splice(position, 1);
  }

  getListPedidos (): Pedidos[]{
    const list = this.listaPedidos.filter((item)=>item.estado===Estado.PEDIDO);
    console.log(list)
    return list
  }

  getListPedidosEnMarcha(): Pedidos[] {
    return this.listaPedidos.filter((item)=>item.estado===Estado.EN_MARCHA);
  }
  getListPedidosFinalizados(): Pedidos[] {
    return this.listaPedidos.filter((item)=>item.estado===Estado.TERMINADO);
  }
  getListAllPedidos(): Pedidos[] {
    return this.listaPedidos.filter((item)=>item.estado===Estado.TERMINADO);
  }
  modificarEstadoPedido(estado:Estado, id:number){
    this.listaPedidos = this.listaPedidos.map((item)=>{
      if(item.number===id){
        item.estado = estado
      }
      return item
    })
  }
}