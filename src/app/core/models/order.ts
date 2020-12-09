import { StateOrder } from '../enums/state-order.enum';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI{
  id!: number;
  tjmHt!: number;
  nbJours!: number;
  tva!: number;
  state!: StateOrder;
  typePresta!: string;
  client!: string;
  comment!: string;
}
