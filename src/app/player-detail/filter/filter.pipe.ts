import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'filter'})
export class FilterPipe {
  transform(value, filters) {

    var filter = function(obj, filters) {
      return Object.keys(filters).every(prop => obj[prop] === filters[prop])
    }

    return value.filter(obj => filter(obj, filters[0]));
  }
}