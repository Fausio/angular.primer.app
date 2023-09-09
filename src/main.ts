import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

class Product {

  name: string;
  price: number;
  category?: string;

  constructor(name: string, price: number, category?: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  printDetails() {
    if (this.category != undefined) {
      console.log(`Name: ${this.name}, Price: ${this.price}, ` +
        `Category: ${this.category}`);
    } else {
      console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
  }
}

class DiscountProduct extends Product {
  constructor(name: string, price: number, private discount: number) {
    super(name, price - discount);
  }
}

let hat = new DiscountProduct("Hat", 100, 10);

let boots = new Product("Boots", 100, "Snow Gear");

console.log(`Hat is a Product? ${boots instanceof DiscountProduct}`);



