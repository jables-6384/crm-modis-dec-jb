import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id!: number;
  name!: string;
  state = StateClient.ACTIVE;
  tva = 20;
  totalCaHt = 0;
  comment!: string;

  constructor() {}
}
