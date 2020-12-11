import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() label!: string;
  @Input() href!: string;
  @Input() route!: string;
  @Input() action!: boolean;
  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public doAction(): void {
    this.clicked.emit();
  }
}
