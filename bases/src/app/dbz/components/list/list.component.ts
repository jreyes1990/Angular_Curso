import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList:Character[] = [{
      id: uuid(),
      name: 'Trunks',
      power: 10,
  }];

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  deleteCharacterById( index?:string ):void {
    console.log("INDICE: ",index)
    if ( !index ) return;
    this.onDelete.emit(index);
  }
}
