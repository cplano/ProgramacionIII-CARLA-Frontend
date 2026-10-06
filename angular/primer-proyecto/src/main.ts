// PUNTO DE ENTRADA de la aplicacion en el NAVEGADOR: es lo primero que se ejecuta.

// bootstrapApplication: funcion que "arranca" una app Angular con componentes standalone.
import { bootstrapApplication } from '@angular/platform-browser';
// Configuracion general de la app (router, etc.) definida en app.config.ts
import { appConfig } from './app/app.config';
// Componente raiz: el que contiene a todos los demas (Header, Dashboard, Footer)
import { App } from './app/app';

// Arranca la app usando App como componente raiz. Angular busca la etiqueta
// <app-root> en index.html y dibuja ahi el componente.
// .catch: si algo falla al arrancar, muestra el error en la consola (F12).
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
