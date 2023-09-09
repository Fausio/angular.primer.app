import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function composeString(val: string): string {
  return `Composed string: ${val}`;
}

function writeValue(val?: string) {
  console.log(composeString(val ?? "Fallback value"));
}

writeValue("London");
writeValue();
