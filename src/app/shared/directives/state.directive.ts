import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

@Input()
appState!: string;

@HostBinding('class')
tdClassString!: string;

  constructor() { }

  ngOnChanges(): void {
    this.tdClassString = `state-${this.appState.toLowerCase()}`;
  }
}
