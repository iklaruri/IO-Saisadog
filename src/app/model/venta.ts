import { DetalleVenta } from './detalleVenta';

export class Venta{
  id:number;
  codUsuario:number;
  fecha:string;
  detalleVentas:DetalleVenta[];
  direccion:string
}
