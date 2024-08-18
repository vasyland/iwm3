import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
// import { loginResponseInterceptor } from './interceptors/login-response.interceptor';
import { customInterceptor } from './interceptors/custom.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withDebugTracing()),
    provideHttpClient(withInterceptors([customInterceptor]))
  ]
};

//withInterceptors([customInterceptor])
