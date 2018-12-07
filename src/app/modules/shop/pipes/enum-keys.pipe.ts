import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'enumKeys'})
export class EnumKeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    const keys = [];

    for (const enumMember in value) {
      const enumValue = value[enumMember];
      if (typeof enumValue === 'string') {
        keys.push(enumValue);
      }
    }

    return keys;
  }
}
