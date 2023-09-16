import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Hola mundo, Bienvenido a mi primera App de Angular';
  public descripcion:string = "Footer -> bienvenidos a Angular";
}
