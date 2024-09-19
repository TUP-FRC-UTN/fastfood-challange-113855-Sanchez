import { Component, inject, OnInit } from '@angular/core';
import { PedidosListaService } from '../../service/pedidos-lista.service';
import { Pedidos } from '../../data/Pedidos';

@Component({
  selector: 'app-pedidos-table',
  standalone: true,
  imports: [],
  templateUrl: './pedidos-table.component.html',
  styleUrl: './pedidos-table.component.css'
})
export class PedidosTableComponent implements OnInit {
  private servicePedidos  = inject(PedidosListaService)
  listPedido : Pedidos[] = []
  
  ngOnInit(): void {
    console.log("actualice")
    this.listPedido = this.servicePedidos.getListPedidos()
    console.log(this.listPedido)
  }
}
