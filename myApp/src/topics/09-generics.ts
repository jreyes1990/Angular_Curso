export function whatsMyType<T>( argument:T ):T {
  return argument;
}

let amIsString = whatsMyType<string>('Hola mundo');
let amIsNumber = whatsMyType<number>(100);
let amIsArray = whatsMyType<number[]>([ 1, 2, 3, 4, 5 ]);

console.log( amIsString.split(' ') );
console.log( amIsNumber.toFixed() );
console.log( amIsArray.join('-') );