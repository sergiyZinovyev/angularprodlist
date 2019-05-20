import { Pipe, PipeTransform } from '@angular/core';
import { List } from './type';

@Pipe({
  name: 'filtr',
  pure: false
})
export class FiltrPipe implements PipeTransform {

  transform(array:List[], args?: {direct: string, column: string}): List[] {
    if(args.direct == 'desc'){
      return array.sort((a: List, b: List) => {
        if (a[args.column] > b[args.column]) return -1;
        if (a[args.column] < b[args.column]) return 1;
      });
    }

    if(args.direct == 'asc'){
      return array.sort((a: List, b: List) => {
        if (a[args.column] > b[args.column]) return 1;
        if (a[args.column] < b[args.column]) return -1;
      });
    }

  }
}
