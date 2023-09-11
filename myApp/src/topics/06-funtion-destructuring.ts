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

function textCalculation( options:TaxtCalculationOptions ):number[] {
  let total=0;

  options.products.forEach( product => {
    //total = total + product.price;
    total += product.price;
  });

  return [ total, total*options.tax ];
}

const shoppingCart = [ phone, tablet ];
const tax = 0.15;

const result = textCalculation({
  products: shoppingCart,
  tax: tax,
});

console.log(`Total: ${result[0]}\nTax: ${result[1]}`)

export {};