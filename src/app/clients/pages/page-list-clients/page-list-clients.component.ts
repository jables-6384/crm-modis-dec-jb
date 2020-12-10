import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection!: Client[];

  public headers = ['Name', 'TVA', 'Total CA HT', 'Comment', 'State'];
  constructor() { }

  ngOnInit(): void {
  }

}
