import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'iroman';
  public age:number = 45;

  public name2:string = 'Spiderman'
  public age2:number = 35;

  get capitalizeName():string {
    return 'Hola mundo'.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = this.name2;
  }

  changeAge():void {
    this.age = this.age2;
  }
}
