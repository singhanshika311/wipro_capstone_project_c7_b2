import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, ...args: any[]): any {
    const sortfield=args[0];

    value.sort((a:any,b:any)=>{
      if(a[sortfield]<b[sortfield]){
        return -1
      }
      else if (a[sortfield]>b[sortfield]){
        return 1
      }
      else {
        return 0 ;
      }
    });
    return value;
  }
 ;
}
