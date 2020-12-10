import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  // public collection!: Order[];
   public collection$!: Observable<Order[]>;

  // Not mandatory for http client observables.
  // private sub!: Subscription;

  public headers!: string[];

  constructor(private orderService: OrderService) {
    // this.sub = this.orderService.collection$.subscribe((data) => {
    //   this.collection = data;
    // });
    this.collection$ = this.orderService.collection$;
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
  }
  ngOnDestroy(): void {
    // Not mandatory for http client observables.
    // this.sub.unsubscribe();
  }

  ngOnInit(): void {}
}
