import { Component, inject, OnInit } from '@angular/core';
import { Pedidos } from '../../data/Pedidos';
import { PedidosListaService } from '../../service/pedidos-lista.service';

@Component({
  selector: 'app-cocina-table',
  standalone: true,
  imports: [],
  templateUrl: './cocina-table.component.html',
  styleUrl: './cocina-table.component.css'
})
export class CocinaTableComponent implements OnInit{
  servicePedidos : PedidosListaService = inject(PedidosListaService)
  pedidoCocinando : Pedidos = new Pedidos()
  listPedidosEnCurso : Pedidos[] = []

  ngOnInit(): void {
    this.listPedidosEnCurso = this.servicePedidos.getListPedidosEnMarcha()
  }


}
