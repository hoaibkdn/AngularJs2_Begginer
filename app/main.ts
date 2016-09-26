import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './JFModule';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);