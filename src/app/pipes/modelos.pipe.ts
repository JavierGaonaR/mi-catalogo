import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelos'
})
export class ModelosPipe implements PipeTransform {

  transform(modelos: number[], ...args: unknown[]): any {
    if(modelos.length == 1) {
      return `${modelos[0]}`;
    }else {
      return `[${modelos[0]} - ${modelos[modelos.length - 1]}]`;
    }
  }

}
