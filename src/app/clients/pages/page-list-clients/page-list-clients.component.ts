import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public collection$!: Observable<Client[]>;
  public headers!: string[];

  constructor(private clientService: ClientService) {
   this.collection$ = this.clientService.collection$;
   this.headers = ['Name', 'Total CA HT', 'Total CA TTC', 'Comment', 'State'];
  }

  ngOnInit(): void {}
}
