import { Injectable } from '@angular/core';
import { CONTENT } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class WebSeriesService {

  constructor(private MessageService: MessageService) { }
  getContent():Observable<Content[]>{
    return of(CONTENT);
    const contents = of(CONTENT);
    this.MessageService.add('Content Array Loaded!! HEEEE');
    return contents;
  }

  getIdContent(id:number):Observable<any>{
    return of(CONTENT.find(item => item.id === id));
  }
}
