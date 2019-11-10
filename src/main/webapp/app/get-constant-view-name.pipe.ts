import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getConstantViewName'
})
export class GetConstantViewNamePipe implements PipeTransform {

  transform(camelCaseString: string, ...args: any[]): any {

    return camelCaseString
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, function(str) {
        return str.toUpperCase();
      });
  }

}
