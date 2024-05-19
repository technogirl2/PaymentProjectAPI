import {
  bootstrapApplication,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
});
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
