import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  



  let myArray: (number | string | boolean)[] = [100, "Adam", true];
  myArray[0] = "Tuesday";
  let val = myArray[0];
  console.log(`Value: ${val}`);

