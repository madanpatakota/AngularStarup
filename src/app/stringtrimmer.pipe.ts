import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringtrimmer'
})
export class StringtrimmerPipe implements PipeTransform {

  transform(data: any , input:any): unknown {


  // inteview quesition diff b/w any and unknown
   //Angular puts ..... more 

    data = data.slice(0,input) + "...More";
   
    // console.log("firing from pipe");
    // console.log(data);

    return data;
  }

}
