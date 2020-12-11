import {
  ChangeDetectorRef,
  Component,

  OnDestroy,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
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
  public states = Object.values(StateOrder);

  constructor(
    private orderService: OrderService,
    private cdr: ChangeDetectorRef
  ) {
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

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.orderService.changeState(item, state).subscribe((obj) => {
      item.state = obj.state;
      this.cdr.detectChanges();
    });
  }
}
