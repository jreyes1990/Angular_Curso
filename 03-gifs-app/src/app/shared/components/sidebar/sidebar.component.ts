import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor( private gifsServide:GifsService ) { }

  get tags():string[] {
    return this.gifsServide.tagsHistory;
  }

  searchTag( tag:string ):void {
    this.gifsServide.searchTag( tag );
  }
}
