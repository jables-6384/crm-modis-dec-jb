import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
