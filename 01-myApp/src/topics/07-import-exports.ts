import { Product, taxtCalculation } from "./06-funtion-destructuring";

const shoppingCart: Product[] = [
  {
    description: 'Nokia',
    price: 100
  },
  {
    description: 'iPad',
    price: 150
  }
];

const [ total, tax ] = taxtCalculation({
  products: shoppingCart,
  tax: 0.15,
});

console.log(`Total: ${total}\nTax: ${tax}`)