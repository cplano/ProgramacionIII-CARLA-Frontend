// CONFIGURACION GENERAL de la app (la usa main.ts al arrancar).
// Aca se registran los "providers": servicios y funcionalidades que la app
// tiene disponibles en todos lados.

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    // Captura los errores no manejados del navegador y los informa en consola
    provideBrowserGlobalErrorListeners(),
    // provideRouter: activa la navegacion entre paginas con las rutas de app.routes.ts.
    // provideClientHydration: "hidratacion" = el navegador reutiliza el HTML que armo
    // el servidor (SSR) y le agrega la interactividad, en vez de dibujar todo de nuevo.
    provideRouter(routes), provideClientHydration()
  ]
};
