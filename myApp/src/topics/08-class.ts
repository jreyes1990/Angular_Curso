export class Person {
  // public name:string;
  // private address:string;

  // constructor(){
  //   this.name = 'Jolberth';
  //   this.address = 'New York';
  // }

  constructor( public name:string, private address:string){
    // this.name = name;
    // this.address = address;
  }
}

const iroman = new Person('Alberto', 'Santa Lucia Cotz.');

console.log(iroman)