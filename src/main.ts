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

let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100, "Snow Gear");





hat.printDetails();




