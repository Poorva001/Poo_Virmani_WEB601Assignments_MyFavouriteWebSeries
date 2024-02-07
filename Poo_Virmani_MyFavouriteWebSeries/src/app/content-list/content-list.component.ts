import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentListComponent,ContentCardComponent, FormsModule, SearchPipe],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () Items: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.Items.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }
  ngOnInit(): void {
    this.Items =[
      {
        id: 1,
        title: "Everybody Loves Raymond",
        description:"A comedy series about the everyday life of sports columnist Ray Barone and his dysfunctional family.",
        creator:"Philip Rosenthal",
        imgURL: "https://image.tmdb.org/t/p/original/vkXeCdMqaZlCoWCoKdDYgs4Ynrg.jpg",
        type:"Comedy",
        tags: ["emotions", "relationships", "laughter"]
      },
      {
        id: 2,
        title: "How I met your Mother",
        description:" A comedy series about Ted and how he fell in love.",
        creator:"Craig Thomas and Carter Bays",
        imgURL: "https://picfiles.alphacoders.com/400/thumb-1920-400793.jpg",
        type:"Drama",
        tags: ["emotions", "humor", "laughter"]
      },
      {
        id: 3,
        title: "Permanent Roommates",
        description:"A TVF series about a couple who face the prospect of getting married after a long distance relationship and a surprise visit from the groom's roommate.",
        creator:"Arunabh Kumar",
        imgURL: "https://m.media-amazon.com/images/M/MV5BNzZlNTlmNTEtNDVmNi00M2I5LWE0MDMtNTQ5ZTgwOTA2NzA0XkEyXkFqcGdeQXVyMzc5NDk0NzQ@._V1_FMjpg_UX1000_.jpg",
        type:"Romance",
        tags: ["emotions", "relationships"]
      },
      {
        id: 4,
        title: "Vikings",
        description: "Follow the legendary Viking chieftain Ragnar Lothbrok and his descendants as they raid and explore new territories.",
        creator: "Michael Hirst",
        imgURL: "https://movieposters2.com/images/1512284-b.jpg",
        type: "Drama",
        tags: ["Vikings", "war", "exploration"]
    },
    {
        id: 5,
        title: "Luna Nera",
        description: "A young witch discovers her true powers in a world where witchcraft is both a source of power and a danger to its practitioners.",
        creator: "Tiziana Triana",
        imgURL: "https://fr.web.img3.acsta.net/r_1280_720/pictures/20/04/20/06/11/3746828.jpg",
        type: "Fantasy",
        tags: ["witchcraft", "magic", "coming-of-age"]
    },
    {
        id: 6,
        title: "Cursed",
        description: "A reimagining of the Arthurian legend, following Nimue, a young heroine with a mysterious gift, as she seeks to save her people.",
        creator: "Tom Wheeler, Frank Miller",
        imgURL: "https://www.themoviedb.org/t/p/original/bLDi1pdZnhXkv4XayCocCIuHrn4.jpg",
        type: "Fantasy",
        tags: ["Arthurian legend", "magic", "heroine"]
    }
      
    ];
  }
 
}
