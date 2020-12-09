import { Component, Input, OnInit } from '@angular/core';

/**
 * User interface 2
 */
@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.scss'],
})
export class Ui2Component implements OnInit {

  /**
   * defines if the panel is opened or not
   */
  public open: boolean;

  constructor() {
    this.open = true;
  }

  ngOnInit(): void {}

  /**
   * open or close the nav menu
   */
  public toggle(): void {
    this.open = !this.open;
  }
}
