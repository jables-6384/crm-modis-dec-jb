import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  id: number;
  name: string;
  state: StateClient;
  tva: number;
  totalCaHt: number;
  comment: string;
}
