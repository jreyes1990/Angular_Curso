import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'iroman';
  public age:number = 45;

  get capitalizeName():string {
    return 'Hola mundo'.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }
}
