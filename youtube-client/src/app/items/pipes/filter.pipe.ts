import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], query: string, apply: boolean): any[] {
    const items = Object.assign([], value);
    if (apply) {
      return items.filter(item => {
        const qStr = query.toLocaleLowerCase();
        const currStr = item.snippet.title.toLocaleLowerCase();
        return currStr.indexOf(qStr) + 1;
      });
    }
    return value;
  }

}
