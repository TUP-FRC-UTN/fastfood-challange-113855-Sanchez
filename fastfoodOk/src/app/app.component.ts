import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
import { PedidosTableComponent } from './pedidos-table/pedidos-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormPedidoComponent,PedidosTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood';
}
