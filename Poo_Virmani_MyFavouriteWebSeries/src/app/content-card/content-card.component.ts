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
      imgURL: "https://tse4.mm.bing.net/th?id=OIP.GLVKnfpwJF6x9T-7roI34QHaFj&pid=Api&P=0&h=180",
      type:"Comedy"
    });
    this.contentList.addContent({
      id: 1,
      title: "How I met your Mother",
      description:" A comedy series about Ted and how he fell in love.",
      creator:"Craig Thomas and Carter Bays",
      imgURL: "https://tse1.mm.bing.net/th?id=OIP.cWB0IEW0Y71dRAvydC7JdAHaEK&pid=Api&P=0&h=180",
      type:"Drama"
    });
    this.contentList.addContent({
      id: 2,
      title: "Permanent Roommates",
      description:"A TVF series about a couple who face the prospect of getting married after a long distance relationship and a surprise visit from the groom's roommate.",
      creator:"Arunabh Kumar",
      imgURL: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/c6891ba199e71ce3c613b23cd6daaf8dbdd6485c0dc1cbbcc77e5f1d7c25ae4e._V_SX450_.png",
      type:"Romance"
    });
  }
}
