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

export class Hero extends Person {
  constructor( public alterEgo:string, public age:number, public realName:string ){
    super( realName, 'New York');
  }
}


const iroman = new Hero('Alberto', 33, 'Jolberth');

console.log(iroman)