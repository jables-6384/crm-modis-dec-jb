import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: number, coeff: number, tva?: number): number {
    if (tva){
      return value * coeff * (1 + tva / 100);
    }
    return value * coeff;
  }

}
