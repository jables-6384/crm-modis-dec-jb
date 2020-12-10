import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent implements OnInit, OnChanges {

  @Input()
  public headers!: string[];

  @Input()
  public collection!: Order[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }
}
