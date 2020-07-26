import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  searchText : string;
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.CountryName.toLowerCase().includes(searchText) || it.CountryCode.toLowerCase().includes(searchText) || it.Capital.toLowerCase().includes(searchText) || it.ContinentName.toLowerCase().includes(searchText);
    });
  }

  }
