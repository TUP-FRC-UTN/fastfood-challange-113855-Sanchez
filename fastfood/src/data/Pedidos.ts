export class Pedidos {
  number: number = Math.floor(Math.random() * 1000);
  name: string = ''; // Nombre del cliente
  description: string = ''; // Descripción del pedido
  date: Date = new Date(); // Fecha de creación del pedido
  estado : Estado= Estado.PEDIDO
}

 export enum Estado {
    EN_MARCHA = "EN_MARCHA",
    TERMINADO = "TERMINADO",
    PEDIDO="PEDIDO"
  }