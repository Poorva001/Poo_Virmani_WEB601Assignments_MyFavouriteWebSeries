import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Everybody Loves Raymond",
      description:"A comedy series about the everyday life of sports columnist Ray Barone and his dysfunctional family.",
      creator:"Philip Rosenthal",
      type:"Comedy"
    });
    this.contentList.addContent({
      id: 1,
      title: "How I met your Mother",
      description:" A comedy series about Ted and how he fell in love.",
      creator:"Craig Thomas and Carter Bays",
      type:"Drama"
    });
    this.contentList.addContent({
      id: 2,
      title: "Permanent Roommates",
      description:"A TVF series about a couple who face the prospect of getting married after a long distance relationship and a surprise visit from the groom's roommate.",
      creator:"Arunabh Kumar",
      type:"Romance"
    });
  }
}
