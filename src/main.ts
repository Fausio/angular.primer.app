import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

class Product {
  constructor(name: string, price: number, category?: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  name: string
  price: number
  category?: string
}

let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100, "Snow Gear");



function printDetails(product: { name: string, price: number, category?: string }) {
  if (product.category != undefined) {
    console.log(`Name: ${product.name}, Price: ${product.price}, ` +
      `Category: ${product.category}`);
  } else {
    console.log(`Name: ${product.name}, Price: ${product.price}`);
  }
}

printDetails(hat);
printDetails(boots);




