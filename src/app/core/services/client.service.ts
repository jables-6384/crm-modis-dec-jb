import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateClient } from '../enums/state-client.enum';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private pCollection!: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = http.get<Client[]>(`${this.urlApi}/clients`);
  }

  get collection$(): Observable<Client[]> {
    return this.pCollection;
  }

  set collection$(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  private update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }
}
