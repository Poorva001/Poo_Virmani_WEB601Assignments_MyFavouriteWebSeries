import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';
@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(contentsItems: Content[], type: string): Content[] {
    if(!type){
      return contentsItems.filter(content => !content.type);
    }
    else{
      return contentsItems.filter(content => content.type === type);
    }
  }
}
