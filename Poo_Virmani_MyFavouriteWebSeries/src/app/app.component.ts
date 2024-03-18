import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentListComponent, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Poo_Virmani_MyFavouriteWebSeries';
}
