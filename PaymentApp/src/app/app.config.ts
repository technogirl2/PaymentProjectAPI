import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideToastr(),
    provideAnimations(),
  ],
};
