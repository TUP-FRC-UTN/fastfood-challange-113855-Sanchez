import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pedidos } from '../../data/Pedidos';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PedidosListaService } from '../../service/pedidos-lista.service';

@Component({
  selector: 'app-form-pedido',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-pedido.component.html',
  styleUrl: './form-pedido.component.css'
})
export class FormPedidoComponent implements OnChanges{

  ServicePedido : PedidosListaService = inject(PedidosListaService)
  pedido :Pedidos = new Pedidos()

  
sendForm(_t7: NgForm) {
  if(_t7.valid){
    this.ServicePedido.addPedido(this.pedido)
    this.pedido = new Pedidos()
    _t7.reset()
  }

}
ngOnChanges(changes: SimpleChanges): void {
  
}


}
