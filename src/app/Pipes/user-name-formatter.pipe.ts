import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userNameFormatter',
})
export class UserNameFormatterPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): any {
    const gender = args[0];
    if (gender === 'female') {
      return `Mrs. ${value}`;
    } else {
      return `Mr. ${value}`;
    }
  }
}
