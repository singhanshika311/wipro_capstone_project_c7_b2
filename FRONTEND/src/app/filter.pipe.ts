import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString : string , propname:string): any[] {

    const resultArray =[];
    if(value.length === 0 || filterString===" " || propname=== ""){
      return value;
    }
    for(const item of value){
      if(item[propname]===filterString){
        resultArray.push(item);
      }

    }
    return resultArray;
  }

}
