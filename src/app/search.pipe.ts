import { Pipe, PipeTransform } from '@angular/core';
import { List } from './type';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: List[], searchText: string): List[] {
    if(!items) return[];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter( item => {
      return item.name.toLowerCase().includes(searchText);
    })
   }

}
