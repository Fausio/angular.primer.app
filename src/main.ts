import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



let myArray: (number | string | boolean)[] = [100, "Adam", true];
for (let i = 0; i < myArray.length; i++) {
  console.log("Index " + i + ": " + myArray[i]);
}
console.log("---");
myArray.forEach((value, index) => console.log("Index " + index + ": " + value));
