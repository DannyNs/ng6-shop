import { Pipe, PipeTransform } from '@angular/core';

import { Category } from '../store/category';

interface NameAwareInterface {
  name: string;
}

@Pipe({ name: 'filterByName' })
export class FilterByNamePipe implements PipeTransform {
  transform(allCategories: NameAwareInterface[], searchString: string) {
    return allCategories.filter(category => category.name
      .toLocaleLowerCase().indexOf(searchString.toLowerCase()) > -1);
  }
}