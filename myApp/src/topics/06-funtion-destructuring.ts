interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0
}

const tablet: Product = {
  description: "iPad Air",
  price: 250.0
}

interface TaxtCalculationOptions {
  tax: number;
  products: Product[];
}

//function taxtCalculation( options:TaxtCalculationOptions ): [number, number] {
//function taxtCalculation( { tax, products }:TaxtCalculationOptions ): [number, number] {
function taxtCalculation( options:TaxtCalculationOptions ): [number, number] {
  const { tax, products } = options;
  let total=0;

  products.forEach( ({ price }) => {
    total += price;
  });

  return [ total, total*tax ];
}

const shoppingCart = [ phone, tablet ];
const tax = 0.15;

const [ total, totalTax ] = taxtCalculation({
  products: shoppingCart,
  tax: tax,
});

console.log(`Total: ${total}\nTax: ${totalTax}`)

export {};