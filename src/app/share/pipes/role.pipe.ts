import { Pipe, PipeTransform } from '@angular/core';
import { ROLE_LIST } from '@app/store/common';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return ROLE_LIST[value] || null;
  }
}
