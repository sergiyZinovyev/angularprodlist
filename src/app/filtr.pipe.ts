import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtr',
  pure: false
})
export class FiltrPipe implements PipeTransform {

  transform(array:{id: number, name: string, price: number}[], args?: any): any {
    return array.sort((a: {id: number, name: string, price: number}, b: {id: number, name: string, price: number}) => b.price - a.price);
  }

}
