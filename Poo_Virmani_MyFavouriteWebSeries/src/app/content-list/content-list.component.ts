import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { WebSeriesService } from '../services/web-series.service';
import { MessageService } from '../services/message.service';
import { ModifyContentComponent } from '../modify-content/modify-content.component';
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentListComponent,ContentCardComponent, FormsModule, SearchPipe, ModifyContentComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
  }
  @Input() Items: Content[] = [];
  @Input() contentItem: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';
  selectedTitle: string | null = null;
  selectedContent?: Content;
  checkContentExists() {
    const foundItem = this.Items.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }
  constructor(private WebSeries: WebSeriesService, private MessageService: MessageService) { }
  ngOnInit(): void {
    this.WebSeries.getContentObs().subscribe(content => this.Items = content);
    // this.WebSeries.getIdContent(5).subscribe(contentId => this.contentItem = contentId);
  }
  onSelect(content: Content): void {
    this.selectedContent = content;
    this.MessageService.add(`Content item at ${content.id}`);
    console.log("clicked");
  }

  addContentToList(newContentItem: Content): void {
    this.WebSeries.addContent(newContentItem).subscribe({
      next: (newContentFromServer) => {
        this.Items = [...this.Items, newContentFromServer];
      },
      error: (error) => {
        console.error('Error adding content:', error);
        this.MessageService.add('Failed to add content');
      }
    });
  }

  updateContentInList(contentItem: Content): void {
    this.WebSeries.updateContent(contentItem)
      .subscribe(() =>
        console.log("Content updated successfully")
      );

  }

  onContentAdded(newContent: Content): void {
    this.Items = [...this.Items, newContent];
    this.MessageService.add('Content added successfully');
  }
}
