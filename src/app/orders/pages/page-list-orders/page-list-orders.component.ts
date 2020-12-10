import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];

  public headers = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total TTC',
    'Total HT',
    'State',
  ];

  constructor(private orderService: OrderService) {
    this.orderService.collection$.subscribe((data) => {
      this.collection = data;
    });
  }

  ngOnInit(): void {}
}
