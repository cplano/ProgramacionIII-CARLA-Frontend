// CONFIGURACION PARA EL SERVIDOR (SSR). Generado por Angular.
// Toma la configuracion normal (app.config.ts) y le suma lo necesario
// para que la app se pueda dibujar en el servidor.

import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    // Activa el renderizado en el servidor usando las reglas de app.routes.server.ts
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

// mergeApplicationConfig: junta las dos configuraciones en una sola
export const config = mergeApplicationConfig(appConfig, serverConfig);
