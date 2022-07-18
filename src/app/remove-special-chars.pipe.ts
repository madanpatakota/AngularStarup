import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpecialChars'
})
export class RemoveSpecialCharsPipe implements PipeTransform {

  transform(value: any, input:any ): unknown {

    console.log("remove is firing")
     value = value.replace(input,"");
     return value;
  }

}
