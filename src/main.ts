import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function getUKCapital(): string {
  return "London";
}
function writeCity(f: () => string) {
  console.log(`City: ${f()}`)
}
writeCity(getUKCapital);
