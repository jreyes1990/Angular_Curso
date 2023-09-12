export class Person {
  public name:string;
  private address:string;

  constructor(){
    this.name = 'Jolberth';
    this.address = 'New York';
  }
}

const iroman = new Person();

console.log(iroman)