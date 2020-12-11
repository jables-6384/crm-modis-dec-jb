import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  public states = Object.values(StateOrder);
  public form!: FormGroup;

  @Input()
  init!: Order;

  @Output()
  clicked = new EventEmitter<Order>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt, Validators.required],
      nbJours: [this.init.nbJours, Validators.required],
      tva: [this.init.tva, Validators.required],
      state: [this.init.state, Validators.required],
      typePresta: [this.init.typePresta, Validators.required],
      client: [
        this.init.client,
        [Validators.required, Validators.minLength(2)],
      ],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }
  public onSubmit(): void {
    this.clicked.emit(this.form.value);
  }
}
