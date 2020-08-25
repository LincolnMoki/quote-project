import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postTime'
})
export class PostTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
