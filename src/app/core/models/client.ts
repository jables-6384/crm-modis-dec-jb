import { StateClient } from '../enums/state-client.enum';
import { StateOrder } from '../enums/state-order.enum';
import { ClientI } from '../interfaces/client-i';
import { OrderI } from '../interfaces/order-i';

export class Client implements ClientI{

  id!: number;
  name!: string;
  state!: StateClient;
  tva!: number;
  totalCaHt!: number;
  comment!: string;

  constructor(){}
}
