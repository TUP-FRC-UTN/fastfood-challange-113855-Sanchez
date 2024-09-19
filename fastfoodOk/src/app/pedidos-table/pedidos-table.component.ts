import { PedidosListaService } from '../../service/pedidos-lista.service';
import { Pedidos } from '../../data/Pedidos';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-table',
  standalone: true,
  imports: [],
  templateUrl: './pedidos-table.component.html',
  styleUrl: './pedidos-table.component.css',
})
export class PedidosTableComponent implements OnInit {
  private servicePedidos = inject(PedidosListaService);
  listPedido: Pedidos[] = [];

  ngOnInit(): void {
    this.servicePedidos.listaPedidos$.subscribe((pedidos) => {
      this.listPedido = pedidos;
      console.log('Updated list of pedidos:', this.listPedido);
    });
  }
}
