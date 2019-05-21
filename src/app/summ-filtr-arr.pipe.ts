import { Pipe, PipeTransform } from '@angular/core';
import { List } from './type';


@Pipe({
  name: 'summFiltrArr',
  pure: false
})
export class SummFiltrArrPipe implements PipeTransform {

  transform(array: List[]): number {
    let sum: number = 0;
    for(let i:number = 0; i < array.length; i++){
      sum += array[i].price;
    }
    return sum;
  }

}
