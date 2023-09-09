import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let myArray: (number | string | boolean)[] = [100, "Adam", true];
let otherArray = [...myArray, 200, "Bob", false];

let sum: number = otherArray.filter(val => typeof (val) == "number")
  .reduce((total: number, val) => total + (val as number), 0);

console.log(`Sum: ${sum}`);
let sumeNumbers = 0;

let mySume = otherArray.forEach((value, index) => {

  if (typeof (value) == "number") { 
    sumeNumbers +=    value;
  }

})

console.log("total: " + sumeNumbers);
