import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // or AppComponent if you're using that method

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err: any) => console.error(err)); // Add explicit type for 'err'
