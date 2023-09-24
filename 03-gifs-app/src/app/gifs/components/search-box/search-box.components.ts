import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" class="form-control" placeholder="Buscar gifs....."
     (keyup.enter)="searchTag()" #txtTagInput
    >
  `
})

export class SearchBoxComponent {
  constructor( private gifsServide:GifsService ) { }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  public searchTag():void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsServide.searchTag( newTag );
    console.log({ newTag })
    this.tagInput.nativeElement.value = '';
  }
}
