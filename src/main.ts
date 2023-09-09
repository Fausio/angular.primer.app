import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  function writeValue(val: string  , ...extraInfo: string[]) {
    console.log(`Value: ${val}, Extras: ${extraInfo}`)
    }

    writeValue("London", "Raining", "Cold");
    writeValue("Paris", "Sunny");
    writeValue("New York");
