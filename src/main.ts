import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//startup module
//module is nothing but contains the angular related code.
//here as of now code means component
//component is nothing but a kind of a element...
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
