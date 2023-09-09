import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  function writeValue(val?: string ) {
    console.log(`Value: ${val ?? "Fallback value"}`)
    }

    writeValue("London");
    writeValue();
