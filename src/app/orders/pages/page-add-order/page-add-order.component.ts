import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  public order = new Order();
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {}

  public add(item: Order): void {
    this.orderService.add(item).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['orders']);
    });
  }
}
