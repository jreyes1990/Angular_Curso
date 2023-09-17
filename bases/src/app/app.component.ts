import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title:string = 'Hola mundo, Bienvenido a mi primera App de Angular';
  public descripcion:string = "Footer -> bienvenidos a Angular";
  public counter:number = 10;

  increaseBy( value:number ):void {
    if (value === 0) {
      this.counter = 10;
    } else {
      this.counter += value;
    }
  }

  resetCounter(){
    this.counter = 10;
  }
}
