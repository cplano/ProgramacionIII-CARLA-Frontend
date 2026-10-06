// PUNTO DE ENTRADA en el SERVIDOR (SSR = Server-Side Rendering).
// Generado por Angular al crear el proyecto con SSR.
// Hace lo mismo que main.ts, pero el HTML se arma en el servidor antes de
// enviarlo al navegador (la pagina aparece mas rapido y la leen mejor los buscadores).

import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
// Configuracion para el servidor (app.config.ts + lo especifico del servidor)
import { config } from './app/app.config.server';

// Funcion flecha que arranca la app con la configuracion del servidor.
const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

// export default: lo que este archivo "entrega" para que lo use el servidor (server.ts)
export default bootstrap;
