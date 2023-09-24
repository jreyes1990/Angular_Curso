import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {
  private _tagsHistory:string[] = [];
  private apiKey:string = '1BRyEKQNJJTCEC5wjl4aOyLgnT3ybwcr';

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory( tag:string ){
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes( tag )){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag );
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice( 0, 10 );
  }

  searchTag( tag:string ){
    if ( tag.length === 0 ) return;
    this.organizeHistory( tag );
  }
}
