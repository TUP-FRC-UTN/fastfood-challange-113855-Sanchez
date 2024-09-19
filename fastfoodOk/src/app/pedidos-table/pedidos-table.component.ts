import { PedidosListaService } from '../../service/pedidos-lista.service';
import { Estado, Pedidos } from '../../data/Pedidos';
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
  itemCocinando: Pedidos | null = null;
  ngOnInit(): void {
    this.servicePedidos.listaPedidos$.subscribe((pedidos) => {
      this.listPedido = this.servicePedidos.getListPedidos();
      console.log('Updated list of pedidos:', this.listPedido);
    });
  }
  cocinar(arg0: number) {
    if (!this.itemCocinando) {
      this.itemCocinando =
        this.listPedido.find((item) => item.number === arg0) || new Pedidos();
      this.servicePedidos.modificarEstadoPedido(Estado.EN_MARCHA, arg0);
    }
  }
  terminar() {
    if (this.itemCocinando) {
      this.servicePedidos.modificarEstadoPedido(
        Estado.TERMINADO,
        this.itemCocinando?.number
      );
      this.itemCocinando = null;
    }
  }
}
