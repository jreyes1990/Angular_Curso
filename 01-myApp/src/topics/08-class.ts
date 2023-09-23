export class Person {
  // public name:string;
  // private address:string;

  // constructor(){
  //   this.name = 'Jolberth';
  //   this.address = 'New York';
  // }

  constructor( public firtName:string, public lastName:string, private address?:string){
    // this.name = name;
    // this.address = address;
  }
}

// export class Hero extends Person {
//   constructor( public alterEgo:string, public age:number, public realName:string ){
//     super( realName, 'New York');
//   }
// }

export class Hero {
  //public person: Person;

  constructor( public alterEgo:string, public age:number, public realName:string, public person: Person ){
    // this.person = new Person(realName);
  }
}

const tony = new Person('Tony', 'Start', 'New York');
const iroman = new Hero('Alberto', 33, 'Jolberth', tony);

console.log(iroman)