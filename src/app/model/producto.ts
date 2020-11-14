import { Talla } from './talla';

export class Producto{
  id:number;
  producto:string;
  artista:string;
  tipo:string;
  imagen:string;
  stock:number;
  precio:number;
  cantidad:number;
  talla:Talla;
}
