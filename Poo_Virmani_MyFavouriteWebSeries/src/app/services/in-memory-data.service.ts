import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    // setting it to the value of our array of content
    const content : Content[] = CONTENT;
    return {content};
    }
    
    getId(contents: Content[]): number {
      return contents.length > 0 ? Math.max(...contents.map(content => content.id || 0)) + 1 : 2000;
    }
}
